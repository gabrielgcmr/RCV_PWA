import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AxiosError } from "axios";
import { Button } from "../../common/Button";
import useAuth from "../../../hooks/useAuth";

const loginSchema = z.object({
  email: z.string().email("Email inválido").nonempty("Email é obrigatório"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function LoginForm({ onSubmit }: { onSubmit?: () => void }) {
  const { login } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onLogin = async (data: LoginFormData) => {
    try {
      await login(data.email, data.password);
      onSubmit?.();
    } catch (error) {
      const axiosError = error as AxiosError<{ error: string }>;
      alert(axiosError.response?.data?.error || "Erro no login");
    }
  };

  return (
    <form onSubmit={handleSubmit(onLogin)} className="space-y-4">
      <div>
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-xl bg-zinc-700 text-white"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          type="password"
          placeholder="Senha"
          className="w-full px-4 py-2 rounded-xl bg-zinc-700 text-white"
          {...register("password")}
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
        Entrar
      </Button>
    </form>
  );
}
