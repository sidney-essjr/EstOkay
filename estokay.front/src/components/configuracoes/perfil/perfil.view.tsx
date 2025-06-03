import Loading from "../../../assets/svg/Loading";
import Button from "../../common/Button";
import Input from "../../common/Input";
import usePerfilModel from "./perfil.model";

type PerfilViewProps = ReturnType<typeof usePerfilModel>;

export default function PerfilView({
  errors,
  handleSubmit,
  isSubmitting,
  onSubmit,
  register,
  info,
  isLoading,
}: PerfilViewProps) {
  return (
    <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-2 shadow-md p-4">
      <Input id="nome" label="Nome*" {...register("nome")} error={errors.nome?.message} />
      <Input id="email" label="E-mail*" {...register("email")} error={errors.email?.message} />
      <Input
        id="telefone"
        label="Telefone"
        {...register("telefone")}
        error={errors.telefone?.message}
      />
      <Input
        id="documento"
        label="Documento*"
        {...register("documento")}
        error={errors.documento?.message}
      />
      <div>
        <Button type="submit" className="ml-auto min-w-[112px] sm:w-auto w-full">
          {isSubmitting || isLoading ? <Loading /> : "Atualizar"}
        </Button>
        {info ? (
          <p className="h-9 text-center text-sm text-detail-color">{info}</p>
        ) : (
          <p className="h-9 "></p>
        )}
      </div>
    </form>
  );
}
