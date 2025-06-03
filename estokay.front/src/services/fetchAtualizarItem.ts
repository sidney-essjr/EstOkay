import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { ItemDoacao } from "../types/ItemDoacao";

export async function postAtualizarItem(data: ItemDoacao) {
  try {
    const response = await fetch(`${import.meta.env.URL_BASE}/estoque/atualizar/${data.id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        descricao: data.descricao,
        quantidade: data.quantidade,
        categoria: data.categoria,
        tamanho: data.tamanho,
        medida: data.medida,
        validade: data.validade,
      }),
    });
    return await responseHandler(response, { message: "Item atualizado com sucesso!" });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
