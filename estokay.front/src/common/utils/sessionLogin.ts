import Cookies from "js-cookie";
import { postSessionLogin } from "../../services/fetchSessionLogin";

export async function sessionLogin() {
  const token = Cookies.get("accessToken");

  if (token) {
    const response = await postSessionLogin();
    if (response.result && typeof response.result === "object") {
      return response;
    }
  }
  return null;
}
