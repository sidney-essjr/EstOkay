import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { Voluntario } from "../types/voluntario";

export async function postSessionLogin() {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_BASE}/auth/session-login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result;

    if (response.ok) {
      result = (await response.json()) as Voluntario;
    }

    return await responseHandler<Voluntario>(response, { result: result });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
