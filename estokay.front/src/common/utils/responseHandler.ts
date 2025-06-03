export async function responseHandler<T>(
  res: Response,
  options: { message?: string; result?: T } = {}
) {
  if (res.ok) {
    return { result: options.result ?? true, message: options.message ?? "" };
  } else {
    const errorData = await res.json();
    return {
      result: false,
      message:
        errorData.message ||
        "Tivemos um problema para completar sua solicitação, estamos verificando a situação!",
    };
  }
}
