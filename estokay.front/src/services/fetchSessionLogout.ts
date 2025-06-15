import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { Voluntario } from "../types/voluntario";

export async function postSessionLogout() {
  try {
    const response = await fetch(`/api/auth/logout`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result;

    if (response.ok) {
      result = (await response.json()) ;
    }

    return await responseHandler<Voluntario>(response, { result: result });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
