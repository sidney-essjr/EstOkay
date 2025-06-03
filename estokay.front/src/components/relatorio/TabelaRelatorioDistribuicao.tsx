import MaterialTable from "@material-table/core";
import { memo } from "react";
import { exportPDFDistribuicao } from "../../common/utils/exportPDFDistribuicao";
import { RelatorioDistribuicao } from "../../services/fetchBuscarDistribuicao";

const TabelaRelatorioDistribuicao = memo(({ data }: { data: RelatorioDistribuicao[] }) => {
  const columns = [
    { title: "Data", field: "criado", type: "date" as const },
    { title: "Documento", field: "documento" },
    { title: "Beneficiario", field: "nomeBeneficiario" },
    {
      title: "Itens",
      field: "itensDistribuicao",
      render: (rowData: RelatorioDistribuicao) => (
        <ul>
          {rowData.itensDistribuicao.map((item, index) => (
            <>
              <li key={index}>
                {item.itemEstoque.descricao} - {item.quantidade}
                {item.itemEstoque.medida}
              </li>
            </>
          ))}
        </ul>
      ),
    },
    { title: "Voluntário", field: "voluntario.nome" },
  ];

  return (
    <section>
      <MaterialTable
        title="Registros localizados"
        columns={columns}
        data={data}
        options={{
          exportMenu: [
            {
              label: "Exportar para PDF",
              exportFunc: () => exportPDFDistribuicao({ columns, data }),
            },
          ],
          search: false,
        }}
      />
    </section>
  );
});

export default TabelaRelatorioDistribuicao;
