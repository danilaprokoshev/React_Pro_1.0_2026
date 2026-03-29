import type { FormValues } from './types';

export const createInitialsValues = (values?: FormValues): FormValues => ({
  userName: values?.userName ?? '',
  email: values?.email ?? '',
  password: values?.password ?? '',
  confirmPassword: values?.confirmPassword ?? '',
});
