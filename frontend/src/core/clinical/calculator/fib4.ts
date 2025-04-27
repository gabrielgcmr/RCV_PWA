import { z } from "zod";

// Interface de resultado para FIB-4
export interface FIB4Result {
  fib4?: number;
  errors?: string[];
}

// 1) Schema Zod para validação automática do FIB-4
const FIB4Schema = z.object({
  age: z
    .number()
    .min(18, { message: "A idade deve ser ≥ 18 anos." })
    .max(120, { message: "A idade deve ser ≤ 120 anos." }),
  ast: z
    .number()
    .min(1, { message: "O valor de AST deve ser > 0." })
    .max(1000, { message: "O valor de AST parece inválido." }),
  alt: z
    .number()
    .min(1, { message: "O valor de ALT deve ser > 0." })
    .max(1000, { message: "O valor de ALT parece inválido." }),
  platelets: z
    .number()
    .min(1, { message: "O valor de plaquetas deve ser > 0." })
    .max(1000000, { message: "O valor de plaquetas parece inválido." }),
});

// 2) Função calculateFIB4 seguindo padrão de cálculo com validação
export default function calculateFIB4(
  age: number,
  ast: number,
  alt: number,
  platelets: number
): FIB4Result {
  // Validação de entradas
  const validation = FIB4Schema.safeParse({ age, ast, alt, platelets });
  if (!validation.success) {
    const errors = validation.error.errors.map((e) => e.message);
    return { errors };
  }

  // Cálculo do FIB-4
  const data = validation.data;
  const fib4Value = (data.age * data.ast) / (data.platelets * Math.sqrt(data.alt));
  const fib4 = parseFloat(fib4Value.toFixed(2));

  return { fib4 };
}
