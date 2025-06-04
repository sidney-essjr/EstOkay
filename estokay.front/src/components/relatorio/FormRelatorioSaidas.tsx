import { Dispatch, SetStateAction } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../assets/svg/Loading";
import { GetDistribuicao, RelatorioDistribuicao } from "../../services/fetchBuscarDistribuicao";
import { Relatorio } from "../../types/relatorio";
import Button from "../common/Button";
import Input from "../common/Input";
import SelectableInput from "../common/SelectableInput";

export default function FormRelatorioSaidas({
  setData,
}: {
  setData: Dispatch<SetStateAction<RelatorioDistribuicao[]>>;
}) {
  const getDistribuicao = new GetDistribuicao();
  const {
    handleSubmit,
    getValues,
    register,
    formState: { isSubmitting },
  } = useForm<Relatorio>();
  const { refetch, isRefetching } = useQuery(
    ["distribuicao"],
    () => getDistribuicao.exec(getValues()),
    {
      enabled: false,
      onSuccess: setData,
    }
  );

  function onSubmit() {
    refetch();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2">
      <div className="grid md:grid-cols-3 gap-2 shadow-md  sm:p-4 p-2 rounded-sm">
        <Input id="dataInicio" label="Data Inicio" lang="pt-BR" type="date" {...register("dataInicio")} />
        <Input id="dataFim" label="Data Fim" lang="pt-BR" type="date" {...register("dataFim")} />
        <SelectableInput
          id="voluntario"
          label="Voluntário"
          options={[]}
          {...register("voluntario")}
        />
      </div>
      <div className="md:col-span-2 lg:col-span-4 flex flex-col-reverse md:flex-row">
        <Button
          className="w-full ml-auto md:w-[118px]"
          type="submit"
          variant="neutral"
          disabled={isSubmitting}
        >
          {isSubmitting || isRefetching ? <Loading /> : "Consultar"}
        </Button>
      </div>
    </form>
  );
}
