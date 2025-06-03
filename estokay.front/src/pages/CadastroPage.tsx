import { Link } from "react-router-dom";
import DistributionSVG from "../assets/svg/DistributionSVG";
import DonationSVG from "../assets/svg/DonationSVG";
import NewVoluntarySVG from "../assets/svg/NewVoluntarySVG";
import { Funcao } from "../common/enums/enumFuncao";
import Title from "../components/common/Title";
import ItemCadastro from "../components/register/ItemCadastro";
import { useDataVoluntario } from "../hooks/useDataVoluntario";

export default function CadastroPage() {
  const voluntario = useDataVoluntario();

  if (!voluntario || !voluntario.dataVoluntario) return null;

  const volutarioFuncao = Number(voluntario.dataVoluntario.funcao);

  return (
    <section className="flex flex-col gap-2 sm:gap-5 sm:py-12 sm:px-4 items-center justify-center m-auto">
      <Title className="text-4xl">
        <h1>Cadastros</h1>
      </Title>
      <div className="flex flex-col gap-2 sm:gap-5 md:flex-row sm:p-4 w-full justify-center">
        <Link to={"doacao"}>
          <ItemCadastro icon={<DonationSVG />} desc="Doação" />
        </Link>
        {volutarioFuncao === Funcao.ADMIN.valueOf() && (
          <Link to={"voluntario"}>
            <ItemCadastro icon={<NewVoluntarySVG />} desc="Voluntário" />
          </Link>
        )}
        <Link to={"distribuicao"}>
        <ItemCadastro icon={<DistributionSVG />} desc="Distribuicão" />
        </Link>
      </div>
    </section>
  );
}
