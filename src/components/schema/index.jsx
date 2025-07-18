import { z } from "zod";

// /passwordSchema
export const passwordSchema = z
  .object({
    current_password: z.string().nonempty("Current Password is required"),
    new_password: z.string().nonempty("New Password is required"),
    confirm_password: z.string().nonempty("Confirm password is required"),
  })
  .refine((value) => value.new_password === value.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords must be match.",
  });

// updateSchema
export const updateSchema = z
  .object({
    new_password: z.string().nonempty("New Password is required"),
    confirm_password: z.string().nonempty("Confirm password is required"),
  })
  .refine((value) => value.new_password === value.confirm_password, {
    path: ["confirm_password"],
    message: "Passwords must be match.",
  });

// authSchema
export const authSchema = z
  .object({
   email: z.string().nonempty("Email is required"),
   password: z.string().nonempty("Password is required"),
  })
export const providerASchema = z
  .object({
    provider: z.string().nonempty("Provider is required"),
    city: z.string().nonempty("City is required"),
    state: z.string().nonempty("State is required"),
    email: z.string().nonempty("Email is required"),
    password: z.string().nonempty("Password is required"),
  })
export const chnageASchema = z
  .object({
    name: z.string().nonempty("User Name is required"),
    password: z.string().nonempty("Email is required"),
   
  })


  export const emailSchema = z.object({
  email: z.string().nonempty("Email is required"),
});