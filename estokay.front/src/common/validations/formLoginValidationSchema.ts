import { z } from "zod";

export const formLoginValidationSchema = z.object({
  email: z.string().trim().min(1, "Campo obrigatório!").email("Valor inválido!"),
  senha: z.string().trim().min(1, "Campo obrigatório!"),
});

export type FormLoginFields = z.infer<typeof formLoginValidationSchema>;
