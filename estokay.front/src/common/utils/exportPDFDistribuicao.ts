import { Column } from "@material-table/core";
import { RelatorioDistribuicao } from "../../services/fetchBuscarDistribuicao";
import jsPDF from "jspdf";
import "jspdf-autotable";

export function exportPDFDistribuicao({
  data,
  columns,
}: {
  data: RelatorioDistribuicao[];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  columns: Column<any>[];
}) {
  const doc = new jsPDF();
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  doc.autoTable({
    head: [columns.map((col) => col.title)],
    body: data.map((row) => [
      new Date(row.criado).toLocaleDateString("pt-BR"),
      row.documento,
      row.nomeBeneficiario,
      row.itensDistribuicao.map(
        (item) =>
          `Descrição: ${item.itemEstoque.descricao} - Quantidade: ${item.quantidade} ${item.itemEstoque.medida}`
      ),
      row.voluntario.nome,
    ]),
  });
  doc.save("tabela.pdf");
}
