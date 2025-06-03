import { catchErrorHandler } from "../common/utils/errorHandler";
import { responseHandler } from "../common/utils/responseHandler";

type CepInfo = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
};

export async function getCepInfo(cep: string) {
  const url = "https://viacep.com.br/ws/";

  try {
    const response = await fetch(`${url}${cep}/json`);

    let result;

    if (response.ok) {
      result = (await response.json()) as CepInfo;
    }

    return await responseHandler<CepInfo>(response, { result: result });
  } catch (error) {
    return catchErrorHandler(error);
  }
}
