import { z } from "zod";

export const formEsqueceuSenhaValidationSchema = z.object({
  email: z.string().trim().min(1, "Campo obrigatório!").email("Valor inválido!"),
});

export type FormEsqueceuSenhaField = z.infer<typeof formEsqueceuSenhaValidationSchema>;
