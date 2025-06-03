import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { Distribuicao } from "../types/distribuicao";

export async function postCriarDistribuicao(data: Distribuicao) {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_BASE}/distribuicoes`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await responseHandler(response, { message: "Distribuição registrada com sucesso!" });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
