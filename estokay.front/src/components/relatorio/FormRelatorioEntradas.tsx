import { Dispatch, SetStateAction } from "react";
import { useForm, Controller } from "react-hook-form";
import { useQueries } from "react-query";
import Loading from "../../assets/svg/Loading";
import { GetDoacoes, RelatorioDoacoes } from "../../services/fetchBuscarDoacao";
import { Relatorio } from "../../types/relatorio";
import Button from "../common/Button";
import Input from "../common/Input";
import SelectableInput from "../common/SelectableInput";
import { GetVoluntarios } from "../../services/fetchVoluntarios";
import { Voluntario } from "../../types/voluntario";

export default function FormRelatorioEntradas({ setData }: { setData: Dispatch<SetStateAction<RelatorioDoacoes[]>> }) {
  const getDoacoes = new GetDoacoes();
  const getVoluntarios = new GetVoluntarios();
  const {
    handleSubmit,
    getValues,
    register,
    control,
    formState: { isSubmitting },
  } = useForm<Relatorio>();

  const results = useQueries([
    {
      queryKey: ["doacoes"],
      queryFn: () => getDoacoes.exec(getValues()),
      enabled: false,
      onSuccess: setData,
    },
    {
      queryKey: ["voluntarios"],
      queryFn: () => getVoluntarios.exec(),
      enabled: true,
      select(data: Voluntario[]) {
        return data.map((v) => ({
          value: v.nome,
          desc: v.nome,
        }));
      },
    },
  ]);

  function onSubmit() {
    results[0].refetch();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-2">
      <div className="grid md:grid-cols-3 gap-2 shadow-md  sm:p-4 p-2 rounded-sm">
        <Input id="dataInicio" label="Data Inicio" lang="pt-BR" type="date" {...register("dataInicio")} />
        <Input id="dataFim" label="Data Fim" lang="pt-BR" type="date" {...register("dataFim")} />

        <Controller
          name="voluntario"
          control={control}
          render={({ field }) => (
            <SelectableInput id="voluntario" label="Voluntário" options={results[1].data ?? []} {...field} />
          )}
        />

        {/* <SelectableInput
          id="voluntario"
          label="Voluntário"
          options={results[1].data ?? []}
          {...register("voluntario")}
        /> */}
      </div>
      <div className="md:col-span-2 lg:col-span-4 flex flex-col-reverse md:flex-row">
        <Button className="w-full  ml-auto md:w-[118px]" type="submit" variant="neutral" disabled={isSubmitting}>
          {isSubmitting || results[0].isRefetching ? <Loading /> : "Consultar"}
        </Button>
      </div>
    </form>
  );
}
