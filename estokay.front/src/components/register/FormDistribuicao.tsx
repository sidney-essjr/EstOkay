import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Loading from "../../assets/svg/Loading";
import {
  FormDistribuicaoFields,
  formDistribuicaoValidationSchema,
} from "../../common/validations/formDistribuicaoValidationSchema";
import { categorias } from "../../data/registerOptions";
import { getItensEstoque } from "../../services/fetchBuscarItensEstoque";
import { postCriarDistribuicao } from "../../services/fetchCriarDistribuicao";
import { ItemDoacao } from "../../types/ItemDoacao";
import Button from "../common/Button";
import Input from "../common/Input";
import SelectableInput from "../common/SelectableInput";
import { ItemDistribuicao } from "./DistribuicaoContainer";

export default function FormDistribuicao({
  itens,
  setItens,
}: {
  itens: ItemDistribuicao[];
  setItens: Dispatch<SetStateAction<ItemDistribuicao[]>>;
}) {
  const [infoMessage, setInfoMessage] = useState("");
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormDistribuicaoFields>({
    resolver: zodResolver(formDistribuicaoValidationSchema),
  });

  const [data, setData] = useState<ItemDoacao[]>([]);
  const queryClient = useQueryClient();
  const mutation = useMutation(postCriarDistribuicao, {
    onSuccess: () => {
      queryClient.invalidateQueries("itensDoacao");
    },
  });
  const [quantidadePorItem, setQuantidadePorItem] = useState<{ value: number; desc: string }[]>([]);
  const [descItem, setDescItem] = useState<{ value: string; desc: string }[]>([]);
  useQuery(["itensDoacao"], () => getItensEstoque(), {
    onSuccess: (data) => {
      setData(
        typeof data.result === "object" ? data.result.filter((item) => item.quantidade > 0) : []
      );
    },
  });

  function changeQuantity(e: HTMLSelectElement["value"]) {
    const id = Number(e.split(" ")[0]);
    const quantidade = data.find((item) => item.id === id)?.quantidade;
    if (quantidade && !Number.isNaN(quantidade)) {
      const options = [];
      for (let index = 1; index <= quantidade; index++) {
        options.push({ value: index, desc: String(index) });
      }
      setQuantidadePorItem(options);
    }
  }

  function changeDesc(categoria: HTMLSelectElement["value"]) {
    const itens = data.filter((item) => item.categoria === categoria);
    const options: { value: string; desc: string }[] = [];
    itens.forEach((item) => {
      options.push({ value: `${item.id} ${item.descricao}`, desc: item.descricao });
    });

    setDescItem(options);
  }

  function addItem() {
    const { categoria, descricao, quantidade } = getValues();

    if (categoria && descricao && quantidade) {
      const id = Number(descricao.split(" ")[0]);
      if (!itens.find((item) => item.id === id)) {
        setItens((prev) => [...prev, { id, categoria, descricao, quantidade }]);
      } else {
        setInfoMessage(
          "Objeto ja consta na lista de itens, para alterar a quantidade remova e adicione novamente"
        );
        setTimeout(() => {
          setInfoMessage("");
        }, 4000);
      }
    }
  }

  async function onSubmit(data: FormDistribuicaoFields) {
    if (itens.length === 0) {
      setInfoMessage("Nenhum item selecionado");
      return;
    }
    const response = await mutation.mutateAsync({
      nome: data.nome,
      documento: data.documento,
      itemDistribuicao: itens.map((item) => ({
        itemDoacao: item.id,
        quantidade: Number(item.quantidade),
      })),
    });

    setInfoMessage(response.message);

    setTimeout(() => {
      setInfoMessage("");
      if (response.result) {
        reset();
        setItens([]);
      }
    }, 4000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2">
      <div className="flex flex-col sm:flex-row gap-2 shadow-md sm:p-4 p-2 rounded-sm">
        <Input
          className="flex-1"
          id="nome"
          label="Nome beneficiário*"
          error={errors.nome?.message}
          {...register("nome")}
        />
        <Input
          id="documento"
          label="Documento*"
          error={errors.documento?.message}
          {...register("documento")}
        />
      </div>
      <div className="grid grid-cols-1 gap-2 lg:grid-cols-5 shadow-md sm:p-4 p-2 rounded-sm">
        <SelectableInput
          id={"categoria"}
          label="Categoria*"
          options={categorias}
          error={errors.categoria?.message}
          {...register("categoria")}
          onChange={(e) => changeDesc(e.currentTarget.value)}
        />
        <SelectableInput
          id={"descricao"}
          className="lg:col-span-2"
          label="Descrição*"
          options={descItem}
          error={errors.descricao?.message}
          {...register("descricao")}
          onChange={(e) => changeQuantity(e.currentTarget.value)}
        />
        <SelectableInput
          id={"quantidade"}
          label="Quantidade*"
          options={quantidadePorItem}
          error={errors.quantidade?.message}
          {...register("quantidade")}
        />

        <Button
          className="w-full lg:col-span-1 lg:w-auto mt-auto h-[48px]"
          variant="neutral"
          type="button"
          onClick={() => addItem()}
        >
          Add
        </Button>
      </div>
      <Button className="w-full" type="submit" variant="success" disabled={isSubmitting}>
        {isSubmitting ? <Loading /> : "Registrar"}
      </Button>
      {infoMessage !== "" ? (
        <p className="h-9 text-center text-sm text-detail-color">{infoMessage}</p>
      ) : (
        <p className="h-9 "></p>
      )}
    </form>
  );
}
