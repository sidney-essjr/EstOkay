import { z } from "zod";

export const formRedefinirSenhaValidationSchema = z
  .object({
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

export type FormRedefinirSenhaFields = z.infer<typeof formRedefinirSenhaValidationSchema>;
