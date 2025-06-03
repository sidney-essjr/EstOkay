import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";
import { FormLoginFields } from "../common/validations/formLoginValidationSchema";

export async function postLogin(data: FormLoginFields) {
  try {
    const response = await fetch(`${import.meta.env.URL_BASE}/auth/login`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await responseHandler(response);
  } catch (error) {
    return catchErrorHandler(error);
  }
}
