import { z } from "zod";
import { loginSchema, registerSchema, refreshSessionSchema } from "./auth.validation";

export type RegisterDto = z.infer<typeof registerSchema>;
export type LoginDto = z.infer<typeof loginSchema>;
export type RefreshSessionDto = z.infer<typeof refreshSessionSchema>;
