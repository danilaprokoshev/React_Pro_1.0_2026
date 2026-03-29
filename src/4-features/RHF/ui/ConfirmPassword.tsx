import { TextField } from '@mui/material';

import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import type { FormValues } from '../model';

export const ConfirmPassword: FC = () => {
  const { control } = useFormContext<FormValues>();

  console.log('RHF ConfirmPassword');

  return (
    <Controller
      name="confirmPassword"
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          sx={{ mb: 2 }}
          fullWidth
          type="password"
          label="Повторите пароль"
          variant="outlined"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};
