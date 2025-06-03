type ItensDoacao = [
  {
    quantidade: number;
    categoria: string;
    descricao: string;
    medida: string;
    tamanho: string;
  }
][];

const calcRegistrosPorCategoriaEntrada = (distribuicao: ItensDoacao) => {
  const registrosPorCategoria = new Map<string, number>();

  distribuicao
    .flatMap((itens) => itens.map((item) => item.categoria))
    .forEach((categoria) =>
      registrosPorCategoria.set(categoria, (registrosPorCategoria.get(categoria) || 0) + 1)
    );

  return registrosPorCategoria;
};

export default calcRegistrosPorCategoriaEntrada;
