import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { FormVoluntarioFields } from "../common/validations/formVoluntarioSchemaValidation";

export async function postCriarVoluntario(data: FormVoluntarioFields) {
  try {
    const response = await fetch(`${import.meta.env.VITE_URL_BASE}/voluntarios`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nome: data.nome,
        email: data.email,
        senha: data.senha,
        telefone: data.telefone,
        documento: data.documento,
      }),
    });
    return await responseHandler(response, { message: "Voluntario cadastrado com sucesso!" });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
