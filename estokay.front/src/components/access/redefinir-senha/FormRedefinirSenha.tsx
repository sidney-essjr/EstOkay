import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import Loading from "../../../assets/svg/Loading";
import {
  FormRedefinirSenhaFields,
  formRedefinirSenhaValidationSchema,
} from "../../../common/validations/formRedefinirSenhaValidationSchema";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { postRedefinirSenha } from "../../../services/fetchRedefinirSenha";

export default function FormRedefinirSenha() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormRedefinirSenhaFields>({
    resolver: zodResolver(formRedefinirSenhaValidationSchema),
  });
  const [fetchInfo, setFetchInfo] = useState("");
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  async function onSubmit(data: FormRedefinirSenhaFields) {
    const token = searchParams.get("token") ?? "";
    const response = await postRedefinirSenha(data.senha, token);

    setFetchInfo(response.message);

    setTimeout(() => {
      setFetchInfo("");
      if (response.result) {
        reset();
        navigate("/");
      }
    }, 4000);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col space-y-4">
      <Input
        id="senha"
        label="Senha*"
        type="password"
        error={errors.senha?.message}
        {...register("senha")}
      />
      <Input
        id="confirmarSenha"
        label="Confirmar senha*"
        type="password"
        error={errors.confirmarSenha?.message}
        {...register("confirmarSenha")}
      />
      <Button type="submit" className="m-auto" disabled={isSubmitting}>
        {isSubmitting ? <Loading /> : "Cadastrar"}
      </Button>

      {fetchInfo ? (
        <p className="h-9 pt-9 text-center text-sm text-detail-color">{fetchInfo}</p>
      ) : (
        <p className="h-9 pt-9"></p>
      )}
    </form>
  );
}
