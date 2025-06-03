import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Loading from "../../../assets/svg/Loading";
import {
  FormEsqueceuSenhaField,
  formEsqueceuSenhaValidationSchema,
} from "../../../common/validations/formEsqueceuSenhaValidationSchema";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { postEsqueceuSenha } from "../../../services/fetchEsqueceuSenha";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FormEsqueceuSenha() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormEsqueceuSenhaField>({ resolver: zodResolver(formEsqueceuSenhaValidationSchema) });
  const [fetchInfo, setFetchInfo] = useState("");
  const navigate = useNavigate();

  async function onSubmit(data: FormEsqueceuSenhaField) {
    const response = await postEsqueceuSenha(data);

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
      <Input id="email" label="E-mail" error={errors.email?.message} {...register("email")} />
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? <Loading /> : "Enviar"}
      </Button>

      {fetchInfo ? (
        <p className="h-9 pt-9 text-center text-sm text-detail-color">{fetchInfo}</p>
      ) : (
        <p className="h-9 pt-9"></p>
      )}
    </form>
  );
}
