import Title from "../components/common/Title";
import GraficoView from "../components/relatorio/relatorio-grafico/grafico.view";
import useRelatorioGraficoModel from "../components/relatorio/relatorio-grafico/relatorio-grafico.model";
import RelatorioGraficoViewForm from "../components/relatorio/relatorio-grafico/relatorio-grafico.view";
import { GetDistribuicao } from "../services/fetchBuscarDistribuicao";
import { GetDoacoes } from "../services/fetchBuscarDoacao";

export default function RelatoriosGraficosPage() {
  const getDistribuicao = new GetDistribuicao();
  const getDoacoes = new GetDoacoes();
  const methods = useRelatorioGraficoModel({ getDistribuicao, getDoacoes });
  return (
    <section className="m-auto max-w-[1000px]">
      <Title>
        <h1>Relatórios Graficos</h1>
      </Title>
      <RelatorioGraficoViewForm {...methods} />
      <Title className="text-center pt-8">
        <h2>Doações</h2>
      </Title>
      <GraficoView
        itensTotal={methods.registrosTotaisEntrada}
        registrosPorMes={methods.registrosPorMesEntrada}
        registrosPorCategoria={methods.registrosPorCategoriaEntrada}
        registrosPorUF={methods.registrosPorUfEntrada}
      />
      <Title className="text-center pt-8">
        <h2>Distribuições</h2>
      </Title>
      <GraficoView
        itensTotal={methods.registrosTotaisSaida}
        registrosPorMes={methods.registrosPorMesSaida}
        registrosPorCategoria={methods.registrosPorCategoriaSaida}
      />
    </section>
  );
}
