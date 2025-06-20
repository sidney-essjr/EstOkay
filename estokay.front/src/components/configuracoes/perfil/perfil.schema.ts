import { z } from "zod";
import isValidCPF from "../../../common/utils/isValidCPF";

const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;

export const perfilValidationSchema = z.object({
  nome: z.string().trim().min(1, "Campo obrigatório!"),
  telefone: z
    .string()
    .trim()
    .optional()
    .refine(
      (val) => !val || telefoneRegex.test(val),
      { message: "Telefone inválido" }
    ),
  email: z.string().trim().min(1, "Campo obrigatório!").email(),
  documento: z
    .string()
    .min(1, "Campo obrigatório!")
    .refine(isValidCPF, { message: "CPF inválido" }),
});
export type Perfil = z.infer<typeof perfilValidationSchema>;
