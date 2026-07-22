import { z } from "zod";

export const SignUpEmailSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email(),
    password: z.string().min(8, "Too short!"),
    confirmPassword: z.string(),
    acceptTerms: z.boolean(),
  })
  .refine((form) => form.password === form.confirmPassword, {
    message: "Passwords dont match",
    path: ["confirmPassword"],
  });

export type SignupEmailForm = z.infer<typeof SignUpEmailSchema>;
