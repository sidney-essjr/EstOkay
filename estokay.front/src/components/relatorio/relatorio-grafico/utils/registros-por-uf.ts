import { RelatorioDoacoes } from "../../../../services/fetchBuscarDoacao";

const calcRegistrosPorUF = (doacoes: RelatorioDoacoes[]) => {
  const registrosPorUF = new Map<string, number>();

  doacoes
    .flatMap((doacao) => doacao.doador.estado)
    .forEach((uf) => registrosPorUF.set(uf, (registrosPorUF.get(uf) || 0) + 1));

  return registrosPorUF;
};

export default calcRegistrosPorUF;
