import { jwtDecode } from "jwt-decode";

export function decodeToken(token: string) {
  try {
    const decoded = jwtDecode<{ id: string; nome: string; email: string }>(token);
    return decoded;
  } catch (error) {
    console.error("Token inválido", error);
    return null;
  }
}
