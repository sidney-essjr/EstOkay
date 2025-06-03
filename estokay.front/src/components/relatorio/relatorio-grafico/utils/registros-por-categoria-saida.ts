type ItensDistribuicao = [
  {
    itemEstoque: {
      descricao: string;
      categoria: string;
      tamanho: string;
      medida: string;
    };
    quantidade: number;
  }
][];

const calcRegistrosPorCategoriaSaida = (distribuicao: ItensDistribuicao) => {
  const registrosPorCategoria = new Map<string, number>();

  distribuicao
    .flatMap((itens) => itens.map((item) => item.itemEstoque.categoria))
    .forEach((categoria) =>
      registrosPorCategoria.set(categoria, (registrosPorCategoria.get(categoria) || 0) + 1)
    );

  return registrosPorCategoria;
};

export default calcRegistrosPorCategoriaSaida;
