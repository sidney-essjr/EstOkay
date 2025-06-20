type GraficoViewProps = {
  itensTotal: number;
  registrosPorCategoria: Map<string, number> | undefined;
  registrosPorMes: Record<string, number> | undefined;
  registrosPorUF?: Map<string, number>;
};

import { VictoryAxis, VictoryBar, VictoryChart, VictoryPie, VictoryTheme } from "victory";
import Title from "../../common/Title";

export default function GraficoView({
  itensTotal,
  registrosPorCategoria,
  registrosPorMes,
}: GraficoViewProps) {
  console.log(registrosPorMes);
  return (
    <section className="flex flex-wrap justify-center gap-4 sm:gap-0 sm:justify-between p-4 shadow-md items-center">
      <div className="flex flex-col items-start">
        <Title className="text-[15px]">
          <h3>Registros por mês</h3>
        </Title>
        <div className="max-w-[400px] h-[300px] overflow-auto">
          <VictoryChart theme={VictoryTheme.clean} domainPadding={20} width={320}>
            <VictoryAxis
              style={{ tickLabels: { fontSize: 10, padding: 5, fontFamily: "Arial" } }}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => `${x}`}
              style={{ tickLabels: { fontSize: 10, padding: 5, fontFamily: "Arial" } }}
            />
            <VictoryBar
              data={
                registrosPorMes
                  ? Object.entries(registrosPorMes).map(([key, value]) => ({
                      meses: key,
                      quantidade: value,
                    }))
                  : []
              }
              x="meses"
              y="quantidade"
              style={{
                data: { fill: "#fb3b2e", width: 30 },
                labels: { fontSize: 10, fill: "#000", fontFamily: "Arial" },
              }}
              labels={({ datum }) => `${datum.quantidade}`}
            />
          </VictoryChart>
        </div>
      </div>
      <div className="flex flex-col w-[200px] h-[150px] space-y-2 p-4 shadow-md">
        <Title className="text-[15px]">
          <h3>Total</h3>
        </Title>
        <h2 className="text-5xl text-center">{itensTotal}</h2>
      </div>
      <div className="flex flex-col items-start">
        <Title className="text-[15px]">
          <h3>Registros por categoria</h3>
        </Title>
        <div className="w-[320px] h-[300px]">
          <VictoryPie
            data={
              registrosPorCategoria
                ? Array.from(registrosPorCategoria, ([key, value]) => ({ x: key, y: value }))
                : []
            }
            x="x"
            y="y"
            innerRadius={100} // Cria um gráfico de pizza (faça o valor 0 para um gráfico de pizza completo)
            style={{
              data: {
                fillOpacity: 0.8, // Opacidade para dar um efeito moderno
                stroke: "#fff", // Cor da borda
                strokeWidth: 2, // Espessura da borda
                fontFamily: "Arial"
              },
              labels: {
                fontSize: 16, // Tamanho da fonte das labels
                fill: '"#a6a6a6',
                fontFamily: "Arial", // Cor das labels
              },
            }}
            colorScale={[
              "#fb3b2e",
              "#a6a6a6",
              "#8c8c8c",
              "#f74d39",
              "#bfbfbf",
              "#e0d9d0",
              "#ffffff",
              "#d13f2a",
            ]} // Cores personalizadas
            labelRadius={130} // Define o espaço para as labels
            labels={({ datum }) => `${datum.x}: ${datum.y}`}
          />
        </div>
      </div>
    </section>
  );
}
