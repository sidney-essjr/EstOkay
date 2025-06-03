const calcRegistrosPorMes = (datas: Date[]) => {

  console.log(datas)
  const nomesMeses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const contagemMeses: Record<string, number> = {};

  // Iterando sobre todas as datas
  datas.forEach((data) => {
    const dataFormatada = new Date(data)
    if (dataFormatada instanceof Date && !Number.isNaN(dataFormatada.getTime())) {
      const mes = dataFormatada.getMonth(); // 0 - Janeiro, 11 - Dezembro
      const nomeMes = nomesMeses[mes];

      // Incrementando a contagem de cada mês
      contagemMeses[nomeMes] = (contagemMeses[nomeMes] || 0) + 1;
    } else {
      console.error('Data inválida:', dataFormatada);
    }
  });

  console.log(contagemMeses);
  return contagemMeses;
};

export default calcRegistrosPorMes;
