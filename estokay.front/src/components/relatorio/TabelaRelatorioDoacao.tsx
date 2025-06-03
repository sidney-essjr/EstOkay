import MaterialTable from "@material-table/core";
import { memo } from "react";
import { exportPDFDoacao } from "../../common/utils/exportPDFDoacao";
import { RelatorioDoacoes } from "../../services/fetchBuscarDoacao";

const TabelaRelatorioDoacao = memo(({ data }: { data: RelatorioDoacoes[] }) => {
  const columns = [
    { title: "Data", field: "dataEntrada", type: "date" as const },
    { title: "Doador", field: "doador.nome" },
    { title: "Cidade", field: "doador.cidade" },
    { title: "UF", field: "doador.estado" },
    {
      title: "Itens",
      field: "itens",
      render: (rowData: RelatorioDoacoes) => (
        <ul>
          {rowData.itens.map((item, index) => (
            <>
              <li key={index}>
                {item.descricao} - {item.quantidade} {item.medida}
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
              exportFunc: () => exportPDFDoacao({ columns, data }),
            },
          ],
          search: false,
        }}
      />
    </section>
  );
});

export default TabelaRelatorioDoacao;
