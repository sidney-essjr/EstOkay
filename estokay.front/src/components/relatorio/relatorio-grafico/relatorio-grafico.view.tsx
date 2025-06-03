import Loading from "../../../assets/svg/Loading";
import Button from "../../common/Button";
import Input from "../../common/Input";
import SelectableInput from "../../common/SelectableInput";
import useRelatorioGraficoModel from "./relatorio-grafico.model";

type RelatorioGraficoViewFormProps = ReturnType<typeof useRelatorioGraficoModel>;

export default function RelatorioGraficoViewForm({
  distribuicoes,
  doacoes,
  handleSubmit,
  isSubmitting,
  onSubmit,
  register,
}: RelatorioGraficoViewFormProps) {
  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2">
      <div className="grid md:grid-cols-3 gap-2 shadow-md  sm:p-4 p-2 rounded-sm">
        <Input id="dataInicio" label="Data Inicio" type="date" {...register("dataInicio")} />
        <Input id="dataFim" label="Data Fim" type="date" {...register("dataFim")} />
        <SelectableInput
          id="voluntario"
          label="Voluntário"
          options={[]}
          {...register("voluntario")}
        />
      </div>
      <div className="md:col-span-2 lg:col-span-4 flex">
        <Button
          className="w-full md:w-[118px] ml-auto"
          type="submit"
          variant="neutral"
          disabled={isSubmitting}
        >
          {isSubmitting || doacoes.isRefetching || distribuicoes.isRefetching ? (
            <Loading />
          ) : (
            "Consultar"
          )}
        </Button>
      </div>
    </form>
  );
}
