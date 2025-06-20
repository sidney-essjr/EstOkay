import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { useDataVoluntario } from "../../../hooks/useDataVoluntario";
import { Perfil, perfilValidationSchema } from "./perfil.schema";
import { IAtualizarDadosBasicosVoluntario } from "./service/atualizarDadosBasicosVoluntario";

type PerfilModelProps = {
  service: IAtualizarDadosBasicosVoluntario;
};

const usePerfilModel = ({ service }: PerfilModelProps) => {
  const voluntario = useDataVoluntario();
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm<Perfil>({
    resolver: zodResolver(perfilValidationSchema),
    defaultValues: {
      nome: voluntario?.dataVoluntario?.nome,
      email: voluntario?.dataVoluntario?.email,
      telefone: voluntario?.dataVoluntario?.telefone,
      documento: voluntario?.dataVoluntario?.documento,
    },
  });
  const [info, setInfo] = useState("");

  const { isLoading, mutate } = useMutation(
    ["voluntario"],
    () => service.exec(getValues(), voluntario?.dataVoluntario?.id || 0),
    {
      onSuccess: () => setInfo("Dados atualizados!"),
      onError: () => setInfo("Falha na atualização, verifique seus dados e tente novamente!"),
    }
  );

  function onSubmit() {
    mutate();
    setTimeout(() => {
      setInfo("");
    }, 4000);
  }

  return { register, errors, isSubmitting, onSubmit, handleSubmit, info, isLoading };
};

export default usePerfilModel;
