import { z } from "zod";

export const formDoadorSchemaValidation = z.object({
  nome: z.string().trim().min(1, "Campo obrigatório!"),
  telefone: z.string().trim().optional(),
  codigoPostal: z
    .string()
    .trim()
    .optional()
    .refine((val) => !val || /^\d{8}$/.test(val), {
      message: "CEP inválido!",
    }),
  endereco: z.string().trim().optional(),
  bairro: z.string().trim().optional(),
  cidade: z.string().trim().min(1, "Campo obrigatório!"),
  estado: z.string().trim().min(1, "Campo obrigatório!").max(2),
});

export type FormDoadorFields = z.infer<typeof formDoadorSchemaValidation>;
