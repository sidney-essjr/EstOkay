import { Relatorio } from "../types/relatorio";

export type RelatorioDoacoes = {
  dataEntrada: Date;
  doador: {
    nome: string;
    cidade: string;
    estado: string;
  };
  itens: [
    { quantidade: number; categoria: string; descricao: string; medida: string; tamanho: string }
  ];
  voluntario: {
    nome: string;
  };
};

export interface IGetDoacao {
  exec: (params: Relatorio) => Promise<RelatorioDoacoes[]>;
}

export class GetDoacoes implements IGetDoacao {
  async exec(params: Relatorio) {
    const url = new URL(`${import.meta.env.VITE_URL_BASE}/doacoes/buscar`);

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        url.searchParams.append(key, String(value));
      }
    });

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

    const data = (await response.json()) as RelatorioDoacoes[];

    return data;
  }
}
