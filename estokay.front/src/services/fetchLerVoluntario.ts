import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { Voluntario } from "../types/voluntario";

export async function getLerVoluntario(email: string) {
  try {
    const response = await fetch(`/api/voluntarios/buscar/${email}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
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
