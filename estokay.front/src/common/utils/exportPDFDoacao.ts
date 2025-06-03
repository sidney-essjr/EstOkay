import { Column } from "@material-table/core";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { RelatorioDoacoes } from "../../services/fetchBuscarDoacao";

export function exportPDFDoacao({
  data,
  columns,
}: {
  data: RelatorioDoacoes[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: Column<any>[];
}) {
  const doc = new jsPDF();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  doc.autoTable({
    head: [columns.map((col) => col.title)],
    body: data.map((row) => [
      new Date(row.dataEntrada).toLocaleDateString("pt-BR"),
      row.doador.nome,
      row.doador.cidade,
      row.doador.estado,
      row.itens.map(
        (item) => `Descrição: ${item.descricao} - Quantidade: ${item.quantidade} ${item.medida}`
      ),
      row.voluntario.nome,
    ]),
  });
  doc.save("tabela.pdf");
}
