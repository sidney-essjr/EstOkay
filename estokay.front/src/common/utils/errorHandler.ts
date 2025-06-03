export function catchErrorHandler(error: unknown) {
  if (error instanceof Error) {
    if (error.message === "Failed to fetch") {
      return {
        result: false,
        message:
          "Não foi possível conectar ao servidor. Verifique sua conexão com a internet ou tente novamente mais tarde.",
      };
    }
    return {
      result: false,
      message: error.message,
    };
  }
  return {
    result: false,
    message: "Tivemos um problema para completar sua solicitação, estamos verificando a situação!",
  };
}


