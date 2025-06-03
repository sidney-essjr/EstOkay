import { getLerVoluntario } from "../../services/fetchLerVoluntario";

export async function verificarEmail(email: string | undefined) {
  if (typeof email === "string") {
    const { result } = await getLerVoluntario(email);
    if (typeof result === "object") return false;
  }
  return true;
}
