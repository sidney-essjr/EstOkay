import { postSessionLogin } from "../../services/fetchSessionLogin";

export async function sessionLogin() {
  const response = await postSessionLogin();
  if (response.result && typeof response.result === "object") {
    return response;
  }

  return null;
}

