import MaterialTable from "@material-table/core";
import { Dispatch, memo, SetStateAction } from "react";
import EditSVG from "../../assets/svg/EditSVG";
import { Funcao } from "../../common/enums/enumFuncao";
import { useDataVoluntario } from "../../hooks/useDataVoluntario";
import { ItemDoacao } from "../../types/ItemDoacao";

const TabelaItensEstoque = memo(
  ({
    itens,
    setIsOpen,
    setUpdatedItem,
  }: {
    itens: ItemDoacao[];
    setIsOpen: Dispatch<React.SetStateAction<boolean>>;
    setUpdatedItem: Dispatch<SetStateAction<ItemDoacao | undefined>>;
  }) => {
    const voluntario = useDataVoluntario();

    const columns = [
      { title: "Codigo", field: "id" },
      { title: "Categoria", field: "categoria" },
      { title: "Descrição", field: "descricao" },
      { title: "Tamanho", field: "tamanho" },
      { title: "Medida", field: "medida" },
      { title: "Validade", field: "validade", type: "date" as const },
      { title: "Quantidade", field: "quantidade" },
    ];

    return (
      <MaterialTable
        title="Itens localizados"
        columns={columns}
        data={itens}
        options={{
          search: false,
        }}
        actions={
          voluntario?.dataVoluntario?.funcao === Funcao.ADMIN
            ? [
                {
                  icon: () => <EditSVG />,
                  tooltip: "Editar",
                  onClick: (_, item) => {
                    setUpdatedItem(item as ItemDoacao);
                    setIsOpen(true);
                  },
                },
              ]
            : []
        }
      />
    );
  }
);

export default TabelaItensEstoque;
