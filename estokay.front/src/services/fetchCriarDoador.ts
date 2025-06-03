import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { FormDoadorFields } from "../common/validations/formDoadorValidationSchema";

export async function postCriarDoador(data: FormDoadorFields) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/doadores`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return await responseHandler(response, { message: "Doador cadastrado com sucesso!" });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
