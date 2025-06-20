import { Voluntario } from "../types/voluntario";

export interface IGetVoluntarios {
  exec: () => Promise<Voluntario[]>;
}

export class GetVoluntarios implements IGetVoluntarios {
  async exec() {
    const url = "/api/voluntarios/";

    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok)
      throw new Error(
        "Tivemos um problema para completar sua solicitação, estamos verificando a situação. Tente novamente mais tarde."
      );

    const data = (await response.json()) as Voluntario[];

    return data;
  }
}
