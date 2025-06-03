import { z } from "zod";
import isValidCPF from "../utils/isValidCPF";

export const formVoluntarioSchemaValidation = z
  .object({
    nome: z.string().trim().min(1, "Campo obrigatório!"),
    telefone: z.string().trim().optional(),
    email: z.string().trim().min(1, "Campo obrigatório!").email(),
    documento: z.string().min(1,"Campo obrigatório!").refine(isValidCPF, { message: "CPF inválido" }),
    senha: z
      .string()
      .trim()
      .min(6, { message: "Deve ter no mínimo 6 caracteres." })
      .regex(/[A-Z]/, { message: "Deve conter pelo menos uma letra maiúscula." })
      .regex(/[a-z]/, { message: "Deve conter pelo menos uma letra minúscula." })
      .regex(/\d/, { message: "Deve conter pelo menos um número." })
      .regex(/[@$!%*?&#]/, { message: "Deve conter pelo menos um símbolo especial." }),
    confirmarSenha: z.string().trim().min(1, "Campo obrigatório!"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    message: "As senhas não correspondem.",
    path: ["confirmarSenha"],
  });

export type FormVoluntarioFields = z.infer<typeof formVoluntarioSchemaValidation>;
