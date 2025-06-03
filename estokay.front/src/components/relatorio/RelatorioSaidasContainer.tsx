import { useState } from "react";
import { RelatorioDistribuicao } from "../../services/fetchBuscarDistribuicao";
import FormRelatorioSaidas from "./FormRelatorioSaidas";
import TabelaRelatorioDistribuicao from "./TabelaRelatorioDistribuicao";

export default function RelatorioSaidasContainer() {
  const [data, setData] = useState<RelatorioDistribuicao[]>([]);

  return (
    <section className="space-y-2">
      <FormRelatorioSaidas setData={setData} />
      <TabelaRelatorioDistribuicao data={data} />
    </section>
  );
}
