import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { FormDoacaoFields } from "../common/validations/formDoacaoValidationSchema";

export async function postCriarDoacao(data: FormDoacaoFields) {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_BASE}/doacoes`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await responseHandler(response, { message: "Doação registrada com sucesso!" });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
