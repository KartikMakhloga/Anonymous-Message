import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email" }),
  password: z.string().min(6, "Password must be atleast 6 characters"),
});