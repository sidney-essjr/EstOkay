import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../../assets/svg/Loading";
import {
  FormLoginFields,
  formLoginValidationSchema,
} from "../../../common/validations/formLoginValidationSchema";
import { postLogin } from "../../../services/fetchFormLogin";
import Button from "../../common/Button";
import Input from "../../common/Input";

export default function FormLogin() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormLoginFields>({ resolver: zodResolver(formLoginValidationSchema) });
  const [fetchInfo, setFetchInfo] = useState("");
  const navigate = useNavigate();

  async function onSubmit(data: FormLoginFields) {
    const response = await postLogin(data);
    if (response.result) {
      reset();
      navigate("/cadastro");
    } else {
      setFetchInfo(response.message);
      setTimeout(() => {
        setFetchInfo("");
      }, 5000);
    }
  }

  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
      <Input
        id="usuario"
        label="Usuário*"
        placeholder="Insira seu usuário"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        id="senha"
        label="Senha*"
        placeholder="Insira sua senha"
        type="password"
        error={errors.senha?.message}
        {...register("senha")}
      />
      <Link to="/access/esqueceu-senha" className="mb-6 text-attention-color underline">
        Esqueci minha senha
      </Link>
      <Button disabled={isSubmitting} type="submit" className="m-auto">
        {isSubmitting ? <Loading /> : "Acessar minha conta"}
      </Button>

      {fetchInfo ? (
        <p className="h-9 pt-9 text-center text-sm text-detail-color">{fetchInfo}</p>
      ) : (
        <p className="h-9 pt-9"></p>
      )}
    </form>
  );
}
