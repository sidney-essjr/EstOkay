import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import Loading from "../../assets/svg/Loading";
import {
  FormDoadorFields,
  formDoadorSchemaValidation,
} from "../../common/validations/formDoadorValidationSchema";
import { uf } from "../../data/registerOptions";
import { getCepInfo } from "../../services/fetchCepInfo";
import { postCriarDoador } from "../../services/fetchCriarDoador";
import Button from "../common/Button";
import Input from "../common/Input";
import SelectableInput from "../common/SelectableInput";

interface FormDoadorProps {
  readonly openModal: (open: boolean) => void;
}

export default function FormDoador({ openModal }: FormDoadorProps) {
  const {
    register,
    reset,
    handleSubmit,
    setValue,
    setError,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormDoadorFields>({ resolver: zodResolver(formDoadorSchemaValidation) });
  const [fetchInfo, setFetchInfo] = useState("");
  const cep = useWatch<FormDoadorFields>({ control, name: "codigoPostal" });

  const queryClient = useQueryClient();
  const mutation = useMutation(postCriarDoador, {
    onSuccess: () => {
      queryClient.invalidateQueries("doador");
    },
  });

  async function cepInfo() {
    if (cep) {
      const { result } = await getCepInfo(cep);

      if (typeof result === "object" && result.bairro) {
        setValue("endereco", result.logradouro);
        setValue("cidade", result.localidade);
        setValue("bairro", result.bairro);
        setValue("estado", result.uf);
      } else {
        setError("codigoPostal", { message: "CEP inválido!" });
      }
    }
  }

  useEffect(() => {
    if (cep?.length === 8) {
      cepInfo();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cep]);

  async function onSubmit(data: FormDoadorFields) {
    const response = await mutation.mutateAsync(data);
    setFetchInfo(response.message);
    setTimeout(() => {
      setFetchInfo("");
      if (response.result) {
        reset();
        openModal(false);
      }
    }, 4000);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="grid grid-cols-1 md:grid-cols-3 gap-2"
    >
      <Input
        className="md:col-span-2"
        id="nome"
        label="Nome*"
        error={errors.nome?.message}
        {...register("nome")}
      />
      <Input
        id="telefone"
        label="Telefone"
        error={errors.telefone?.message}
        {...register("telefone")}
      />
      <Input
        id="codigoPostal"
        label="CEP"
        error={errors.codigoPostal?.message}
        {...register("codigoPostal")}
      />
      <Input
        className="md:col-span-2"
        id="endereco"
        label="Endereço"
        error={errors.endereco?.message}
        {...register("endereco")}
      />
      <Input id="bairro" label="Bairro" error={errors.bairro?.message} {...register("bairro")} />
      <Input id="cidade" label="Cidade*" error={errors.cidade?.message} {...register("cidade")} />
      <SelectableInput
        id="estado"
        label="UF*"
        options={uf}
        error={errors.estado?.message}
        {...register("estado")}
      />
      <div className="flex flex-col sm:flex-row-reverse md:col-span-3 gap-2 justify-between items-center">
        <Button
          className="w-full sm:w-[32.6%]"
          type="submit"
          variant="success"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loading /> : "Registrar"}
        </Button>
        {fetchInfo !== "" ? (
          <p className="flex-1 text-center text-sm text-detail-color">{fetchInfo}</p>
        ) : (
          <p className="flex-1"></p>
        )}
      </div>
    </form>
  );
}
