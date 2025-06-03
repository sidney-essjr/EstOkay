import { useState } from "react";
import { ItemDoacao } from "../../types/ItemDoacao";
import Modal from "../common/Modal";
import EstoqueForm from "./EstoqueForm";
import FormAtualizarItem from "./FormAtualizarItem";
import TabelaItensEstoque from "./TabelaItensEstoque";

export default function EstoqueContainer() {
  const [data, setData] = useState<ItemDoacao[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [updatedItem, setUpdatedItem] = useState<ItemDoacao>();
  return (
    <section>
      <EstoqueForm setData={setData} />
      <TabelaItensEstoque itens={data} setUpdatedItem={setUpdatedItem} setIsOpen={setIsOpen} />
      {isOpen && (
        <Modal title="Atualizar Item" openModal={setIsOpen}>
          {updatedItem && <FormAtualizarItem openModal={setIsOpen} item={updatedItem} />}
        </Modal>
      )}
    </section>
  );
}
