import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { Doador } from "../types/doador";

export async function getLerDoadores() {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_BASE}/doadores`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    let result;

    if (response.ok) {
      result = (await response.json()) as Doador[];
    }

    return await responseHandler<Doador[]>(response, { result: result });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
