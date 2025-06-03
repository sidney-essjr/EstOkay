import { memo } from "react";
import Button from "../common/Button";
import { ItemDistribuicao } from "./DistribuicaoContainer";

const TabelaItensSelecionados = memo(
  ({
    itens,
    setItens,
  }: {
    itens: ItemDistribuicao[];
    setItens: (itens: ItemDistribuicao[]) => void;
  }) => {
    function remover(id: number) {
      const itensExibidos = itens.filter((item) => item.id !== id);
      setItens(itensExibidos);
    }

    return (
      <section className="w-full overflow-auto max-h-96 shadow-md">
        <table className="w-full min-w-[600px] p-2 h-12 justify-around ">
          <thead>
            <tr className="w-full p-2 h-12 text-center  font-bold text-logo-gray-color">
              <th scope="col" className="p-2 h-12 ">
                COD.
              </th>
              <th scope="col" className="p-2 h-12 ">
                TIPO
              </th>
              <th scope="col" className="p-2 h-12 ">
                DESCRIÇÃO
              </th>
              <th scope="col" className="p-2 h-12 ">
                QUANTIDADE
              </th>
              <th scope="col" className="p-2 h-12 ">
                REMOVER
              </th>
            </tr>
          </thead>
          <tbody>
            {itens.map((item) => (
              <tr key={item.id}>
                <td className="p-2 h-12 border-t border-b border-logo-gray-color text-center">
                  {item.id}
                </td>
                <td className="p-2 h-12 border-t border-b border-logo-gray-color">
                  {item.categoria}
                </td>
                <td className="p-2 h-12 border-t border-b border-logo-gray-color">
                  {item.descricao.split(" ").pop()}
                </td>
                <td className="p-2 h-12 border-t border-b border-logo-gray-color text-center">
                  {item.quantidade}
                </td>
                <td className="p-2 h-12 border-t border-b border-logo-gray-color">
                  <Button className="w-[110px] mx-auto h-8" onClick={() => remover(item.id)}>
                    Remover
                  </Button>
                </td>
              </tr>
            ))}
            <tr className="font-bold text-logo-gray-color">
              <td colSpan={3} className="p-2 h-12 border-t border-logo-gray-color">
                TOTAL
              </td>
              <td className="p-2 h-12 border-t border-logo-gray-color text-center">
                {itens.length}
              </td>
              <td className="p-2 h-12 border-t border-logo-gray-color">
                <Button className="w-[110px] mx-auto h-8" onClick={() => setItens([])}>
                  Limpar
                </Button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    );
  }
);

export default TabelaItensSelecionados;
