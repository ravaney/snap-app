import { z } from "zod";

export const SignUpEmailSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().trim().email().optional(),
    phone: z.string().trim().optional(),
    password: z.string().min(8, "Too short!"),
    confirmPassword: z.string(),
    acceptTerms: z.boolean(),
  })
  .refine((form) => form.password === form.confirmPassword, {
    message: "Passwords dont match",
    path: ["confirmPassword"],
  })
  .refine(({ email, phone }) => Boolean(email || phone), {
    message: "Email or phone nuber is required",
    path: ["email"],
  })
  .refine((form) => form.acceptTerms === true, {
    message: "Must accept terms",
    path: ["acceptTerms"],
  });

export type SignupEmailForm = z.infer<typeof SignUpEmailSchema>;

export type SuccessUserCreation = {
  id: string;
  email: string;
};
