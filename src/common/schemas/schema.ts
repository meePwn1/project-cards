import { z } from 'zod'

export const formSchema = z.object({
  confirmPassword: z.string().min(6),
  email: z.string().email(),
  password: z.string().min(6),
  rememberMe: z.boolean().optional(),
  username: z.string().min(3),
})

export type FormValues = z.infer<typeof formSchema>
