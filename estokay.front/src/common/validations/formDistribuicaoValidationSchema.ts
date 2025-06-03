import { z } from "zod";
import isValidCPF from "../utils/isValidCPF";

export const formDistribuicaoValidationSchema = z.object({
  nome: z.string().trim().min(1, "Campo obrigatório!"),
  documento: z
    .string()
    .min(1, "Campo obrigatório!")
    .refine(isValidCPF, { message: "CPF inválido" }),
  categoria: z.string().trim().optional(),
  descricao: z.string().trim().optional(),
  quantidade: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || !isNaN(parseInt(val, 10)), { message: "Valor válido" })
    .transform((val) => (typeof val === "string" ? parseInt(val, 10) : String(val))),
});

export type FormDistribuicaoFields = z.infer<typeof formDistribuicaoValidationSchema>;
