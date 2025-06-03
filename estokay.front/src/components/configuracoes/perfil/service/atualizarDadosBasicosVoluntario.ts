import { Perfil } from "../perfil.schema";

export interface IAtualizarDadosBasicosVoluntario {
  exec: (data: Perfil, id: number) => Promise<boolean>;
}

export class AtualizarDadosBasicosVoluntario implements IAtualizarDadosBasicosVoluntario {
  async exec(data: Perfil, id: number) {
    const response = await fetch(`${import.meta.env.URL_BASE}/voluntarios/${id}`, {
      method: "PATCH",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok)
      throw new Error(
        "Tivemos um problema para completar sua solicitação, estamos verificando a situação. Tente novamente mais tarde."
      );

    return true;
  }
}
