import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { ItemDoacao } from "../types/ItemDoacao";

export async function getItensEstoque(params = {}) {
  const url = new URL(`${import.meta.env.VITE_URL_BASE}/estoque/buscar`);
  url.search = new URLSearchParams(params).toString();

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    let result;

    if (response.ok) {
      result = (await response.json()) as ItemDoacao[];
    }

    return await responseHandler<ItemDoacao[]>(response, { result: result });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
