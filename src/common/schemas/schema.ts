import { z } from 'zod'

export const schema = z
  .object({
    confirmPassword: z.string().min(6),
    email: z.string().email(),
    password: z.string().min(6),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export type FormValues = z.infer<typeof schema>
