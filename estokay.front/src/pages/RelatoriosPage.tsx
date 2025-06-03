import { Link } from "react-router-dom";
import ChartSVG from "../assets/svg/ChartSVG";
import ItensInputSVG from "../assets/svg/ItensInput";
import ItensOutputSVG from "../assets/svg/ItensOutput";
import { Funcao } from "../common/enums/enumFuncao";
import Title from "../components/common/Title";
import ItemCadastro from "../components/register/ItemCadastro";
import { useDataVoluntario } from "../hooks/useDataVoluntario";

export default function RelatoriosPage() {
  const voluntario = useDataVoluntario();

  if (!voluntario || !voluntario.dataVoluntario) return null;

  const volutarioFuncao = Number(voluntario.dataVoluntario.funcao);

  return (
    <section className="flex flex-col gap-2 sm:gap-5 sm:py-12 sm:px-4 items-center justify-center m-auto">
      <Title className="text-4xl">
        <h1>Relatórios</h1>
      </Title>
      <div className="flex flex-col gap-2 sm:gap-5 md:flex-row sm:p-4 w-full justify-center">
        <Link to={"entradas"}>
          <ItemCadastro icon={<ItensInputSVG />} desc="Entradas" />
        </Link>
        {volutarioFuncao === Funcao.ADMIN.valueOf() && (
          <Link to={"saidas"}>
            <ItemCadastro icon={<ItensOutputSVG />} desc="Saidas" />
          </Link>
        )}
        <Link to={"graficos"}>
          <ItemCadastro icon={<ChartSVG />} desc="Gráficos" />
        </Link>
      </div>
    </section>
  );
}
