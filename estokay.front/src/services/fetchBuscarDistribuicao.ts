import { Relatorio } from "../types/relatorio";

export type RelatorioDistribuicao = {
  criado: Date;
  documento: string;
  nomeBeneficiario: string;
  itensDistribuicao: [
    {
      itemEstoque: { descricao: string; categoria: string; tamanho: string; medida: string };
      quantidade: number;
    }
  ];
  voluntario: { nome: string };
};

export interface IGetDistribuicao {
  exec: (params: Relatorio) => Promise<RelatorioDistribuicao[]>;
}

export class GetDistribuicao implements IGetDistribuicao {
  async exec(params: Relatorio) {
    const searchParams = new URLSearchParams()

    Object.entries(params).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        searchParams.append(key, String(value));
      }
    });

    const url = `/api/distribuicoes/buscar?${searchParams.toString()}`;

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

    const data = (await response.json()) as RelatorioDistribuicao[];

    return data;
  }
}
