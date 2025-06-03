import { zodResolver } from "@hookform/resolvers/zod";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import Loading from "../../assets/svg/Loading";
import { itemDoacaoValidationSchema } from "../../common/validations/formDoacaoValidationSchema";
import { categorias, medida, tamanhos } from "../../data/registerOptions";
import { postAtualizarItem } from "../../services/fetchAtualizarItem";
import { ItemDoacao } from "../../types/ItemDoacao";
import Button from "../common/Button";
import Input from "../common/Input";
import SelectableInput from "../common/SelectableInput";

export default function FormAtualizarItem({
  item,
  openModal,
}: Readonly<{
  item: ItemDoacao;
  openModal: Dispatch<SetStateAction<boolean>>;
}>) {
  const {
    register,
    reset,
    getValues,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(itemDoacaoValidationSchema),
    defaultValues: {
      descricao: item.descricao || "",
      quantidade: String(item.quantidade) || "",
      categoria: item.categoria || "",
      tamanho: item.tamanho || "",
      medida: item.medida || "",
      validade: item.validade || "",
    },
  });
  const queryClient = useQueryClient();
  const [fetchInfo, setFetchInfo] = useState("");
  const mutation = useMutation(postAtualizarItem, {
    onSuccess: () => {
      queryClient.invalidateQueries("itensDoacao");
    },
  });

  async function onSubmit() {
    const values = getValues();

    item = {
      ...item,
      ...values,
      quantidade: Number(values.quantidade),
    };

    const response = await mutation.mutateAsync(item);
    setFetchInfo(response.message);
    setTimeout(() => {
      if (response.result) {
        reset();
        openModal(false);
      }
      setFetchInfo("");
    }, 4000);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 sm:p-4 p-2 rounded-sm"
    >
      <Input
        id="descricao"
        label="Descricao*"
        className="md:col-span-3"
        error={errors?.descricao?.message}
        {...register("descricao")}
      />
      <Input
        id="quantidade"
        label="Quantidade*"
        type="number"
        min={1}
        max={1000}
        error={errors?.quantidade?.message}
        {...register("quantidade")}
      />
      <SelectableInput
        id="categoria"
        label="Categoria*"
        options={categorias}
        error={errors?.categoria?.message}
        {...register("categoria")}
      />
      <SelectableInput
        id="tamanho"
        label="Tamanho"
        options={tamanhos}
        error={errors?.tamanho?.message}
        {...register("tamanho")}
      />
      <SelectableInput
        id="medida"
        label="Medida*"
        options={medida}
        error={errors?.medida?.message}
        {...register("medida")}
      />
      <Input
        id="validade"
        label="Validade"
        type="date"
        error={errors?.validade?.message}
        {...register("validade")}
      />
      <Button
        className="w-full mt-auto mx-auto h-[48px]"
        type="submit"
        variant="success"
        disabled={isSubmitting}
      >
        {isSubmitting ? <Loading /> : "Atualizar"}
      </Button>
      {fetchInfo !== "" ? (
        <p className="h-9 md:col-span-3 pt-3 text-center text-sm text-detail-color">{fetchInfo}</p>
      ) : (
        <p className="h-9 md:col-span-3 "></p>
      )}
    </form>
  );
}
