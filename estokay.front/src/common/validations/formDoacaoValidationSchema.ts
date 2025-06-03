import { z } from "zod";

export const itemDoacaoValidationSchema = z.object({
  descricao: z.string().trim().min(1, "Campo obrigatório!"),
  categoria: z.string().trim().min(1, "Campo obrigatório!"),
  quantidade: z
    .string()
    .trim()
    .refine((val) => !isNaN(parseInt(val, 10)), { message: "Valor válido" })
    .transform((val) => (typeof val === "string" ? parseInt(val, 10) : String(val)))
    .refine((val) => Number(val) >= 1 && Number(val) <= 1000, {
      message: "Deve ser entre 1 e 1000",
    }),
  tamanho: z.string().trim().optional(),
  medida: z.string().trim().min(1, "Campo obrigatório!"),
  validade: z
    .string()
    .trim()
    .optional()
    .transform((val) => (val ? new Date(val) : undefined))
    .refine((val) => !val || val >= new Date(), { message: "Produto vencido" })
    .refine((val) => !val || !Number.isNaN(val.getTime()), { message: "Data inválida" }),
});

export const formDoacaoValidationSchema = z.object({
  doador: z.string().trim().min(1, "Campo obrigatório!"),
  dataEntrada: z
    .string()
    .trim()
    .transform((val) => new Date(val))
    .refine((val) => val <= new Date(), { message: "Data inválida" })
    .refine((val) => !Number.isNaN(val.getTime()), { message: "Data inválida" }),
  itens: z.array(itemDoacaoValidationSchema).min(1, "Nenhum item vinculado"),
});

export type FormDoacaoFields = z.infer<typeof formDoacaoValidationSchema>;
