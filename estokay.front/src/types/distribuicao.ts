export type Distribuicao = {
  nome: string;
  documento: string;
  itemDistribuicao: {
    itemDoacao: number;
    quantidade: number;
  }[];
};
