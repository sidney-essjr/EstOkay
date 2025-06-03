import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { FormEsqueceuSenhaField } from "../common/validations/formEsqueceuSenhaValidationSchema";

export async function postEsqueceuSenha(data: FormEsqueceuSenhaField) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/esqueceu-senha`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await responseHandler(response, { message: "E-mail enviado com sucesso!" });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
