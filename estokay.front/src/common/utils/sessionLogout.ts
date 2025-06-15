import { postSessionLogout } from "../../services/fetchSessionLogout";

export async function sessionLogout() {
  const response = await postSessionLogout();
  if (response) {
    return response;
  }

  return null;
}
