import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";

export async function postRedefinirSenha(novaSenha: string, token: string) {
  try {
    const response = await fetch(`${import.meta.env.VITE_BASE_URL}/auth/redefinir-senha`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, novaSenha }),
    });

    console.log({ token, novaSenha });

    return await responseHandler(response, { message: "Senha redefinida com sucesso!" });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
