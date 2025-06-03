import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../assets/svg/Loading";
import {
  FormVoluntarioFields,
  formVoluntarioSchemaValidation,
} from "../../common/validations/formVoluntarioSchemaValidation";
import { postCriarVoluntario } from "../../services/fetchCriarVoluntario";
import Button from "../common/Button";
import Input from "../common/Input";

export default function FormVoluntario() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormVoluntarioFields>({ resolver: zodResolver(formVoluntarioSchemaValidation) });
  const [fetchInfo, setFetchInfo] = useState("");
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const mutation = useMutation(postCriarVoluntario, {
    onSuccess: () => {
      queryClient.invalidateQueries("voluntario");
    },
  });

  async function onSubmit(data: FormVoluntarioFields) {
    const response = await mutation.mutateAsync(data);
    setFetchInfo(response.message);
    setTimeout(() => {
      setFetchInfo("");
      if (response.result) {
        reset();
        navigate("/cadastro");
      }
    }, 4000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 shadow-md sm:p-4 p-2 rounded-sm">
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
          id="email"
          type="email"
          label="Email*"
          className="md:col-span-2"
          error={errors.email?.message}
          {...register("email")}
        />
        <Input
          id="documento"
          label="Documento*"
          error={errors.documento?.message}
          {...register("documento")}
        />
        <Input
          id="senha"
          type="password"
          className="md:col-span-2"
          label="Senha*"
          error={errors.senha?.message}
          {...register("senha")}
        />
        <Input
          id="confirmarSenha"
          type="password"
          label="Confirmar Senha*"
          className="md:col-span-2"
          error={errors.confirmarSenha?.message}
          {...register("confirmarSenha")}
        />

        <Button
          className="w-full mx-auto h-[48px] md:w-[200px]"
          type="submit"
          variant="success"
          disabled={isSubmitting}
        >
          {isSubmitting ? <Loading /> : "Registrar"}
        </Button>
        {fetchInfo !== "" ? (
          <p className="h-9 text-center text-sm text-detail-color">{fetchInfo}</p>
        ) : (
          <p className="h-9 md:col-span-3 pt-9"></p>
        )}
      </div>
    </form>
  );
}
