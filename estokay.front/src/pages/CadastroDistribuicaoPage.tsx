import Title from "../components/common/Title";
import DistribuicaoContainer from "../components/register/DistribuicaoContainer";

export default function CadastroDistribuicaoPage() {
  return (
    <section className="m-auto max-w-[1000px]">
      <Title>
        <h1>Cadastro de Distribuição</h1>
      </Title>
      <DistribuicaoContainer />
    </section>
  );
}
