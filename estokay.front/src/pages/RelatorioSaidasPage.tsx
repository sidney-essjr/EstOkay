import Title from "../components/common/Title";
import RelatorioSaidasContainer from "../components/relatorio/RelatorioSaidasContainer";

export default function RelatorioSaidasPage() {
  return (
    <section className="m-auto max-w-[1000px]">
      <Title>
        <h1>Relatório de Saidas</h1>
      </Title>
      <RelatorioSaidasContainer />
    </section>
  );
}
