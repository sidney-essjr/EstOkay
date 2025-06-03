import Title from "../components/common/Title";
import EstoqueContainer from "../components/estoque/EstoqueContainer";

export default function EstoquePage() {
  return (
    <section className="m-auto max-w-[1000px]">
      <Title>
        <h1>Estoque de itens</h1>
      </Title>
      <EstoqueContainer />
    </section>
  );
}
