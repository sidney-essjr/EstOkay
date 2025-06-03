import { useState } from "react";
import FormDistribuicao from "./FormDistribuicao";
import TabelaItensSelecionados from "./TabelaItensSelecionados";

export type ItemDistribuicao = {
  id: number;
  categoria: string;
  descricao: string;
  quantidade: number | string;
};

export default function DistribuicaoContainer() {
  const [itensSelecionados, setItensSelecionados] = useState<ItemDistribuicao[]>([]);
  return (
    <section>
      <FormDistribuicao itens={itensSelecionados} setItens={setItensSelecionados} />
      {itensSelecionados && (
        <TabelaItensSelecionados itens={itensSelecionados} setItens={setItensSelecionados} />
      )}
    </section>
  );
}
