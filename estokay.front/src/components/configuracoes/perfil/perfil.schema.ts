import { z } from "zod";
import isValidCPF from "../../../common/utils/isValidCPF";

export const perfilValidationSchema = z.object({
  nome: z.string().trim().min(1, "Campo obrigatório!"),
  telefone: z.string().trim().optional(),
  email: z.string().trim().min(1, "Campo obrigatório!").email(),
  documento: z
    .string()
    .min(1, "Campo obrigatório!")
    .refine(isValidCPF, { message: "CPF inválido" }),
});

export type Perfil = z.infer<typeof perfilValidationSchema>;
