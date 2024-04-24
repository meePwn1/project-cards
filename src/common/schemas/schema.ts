import { z } from 'zod'

export const formSchema = z.object({
  confirmPassword: z.string().min(4),
  deckName: z.string().min(3, 'Deck name is too short').max(30, 'Deck name is too long'),
  email: z.string().email(),
  image: z
    .instanceof(File)
    .optional()
    .refine(file => {
      console.log(file)
    }),
  password: z.string().min(4),
  private: z.boolean().optional(),
  rememberMe: z.boolean().optional(),
  username: z.string().min(3),
})

export type FormValues = z.infer<typeof formSchema>
