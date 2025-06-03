import Title from "../components/common/Title";
import RelatorioEntradasContainer from "../components/relatorio/RelatorioEntradasContainer copy";

export default function RelatorioEntradasPage() {
  return (
    <section className="m-auto max-w-[1000px]">
      <Title>
        <h1>Relatório de Entradas</h1>
      </Title>
      <RelatorioEntradasContainer />
    </section>
  );
}
