import { z } from 'zod';

export const validationSchema = z
  .object({
    userName: z.string().min(1, 'Имя пользователя обязательно'),
    email: z.email('Неверный формат email'),
    password: z.string().min(6, 'Пароль должен содержать не менее 6 символов'),
    confirmPassword: z
      .string()
      .min(6, 'Пароль должен содержать не менее 6 символов'),
    socialLinks: z
      .array(z.object({ value: z.url('Неверный формат URL') }))
      .min(1, 'Добавьте хотя бы одну социальную ссылку'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmPassword) {
      ctx.addIssue({
        path: ['confirmPassword'],
        code: 'custom',
        message: 'Пароли не совпадают',
      });
    }
  });
