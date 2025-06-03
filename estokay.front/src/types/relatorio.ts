export type Relatorio = {
  dataInicio: Date;
  dataFim: Date;
  movimentacao: "ENTRADA" | "SAIDA";
  voluntario: string;
};
