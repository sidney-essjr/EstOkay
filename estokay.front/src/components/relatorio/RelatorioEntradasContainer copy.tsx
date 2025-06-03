import { useState } from "react";
import { RelatorioDoacoes } from "../../services/fetchBuscarDoacao";
import FormRelatorioEntradas from "./FormRelatorioEntradas";
import { default as TabelaRelatorioDoacao } from "./TabelaRelatorioDoacao";

export default function RelatorioEntradasContainer() {
  const [data, setData] = useState<RelatorioDoacoes[]>([]);

  return (
    <section className="space-y-2">
      <FormRelatorioEntradas setData={setData} />
      <TabelaRelatorioDoacao data={data} />
    </section>
  );
}
