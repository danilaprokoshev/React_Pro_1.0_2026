import { TextField } from '@mui/material';

import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import type { FormValues } from '../model';

export const Password: FC = () => {
  const { control } = useFormContext<FormValues>();

  console.log('RHF Password');

  return (
    <Controller
      name="password"
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          sx={{ mb: 2 }}
          fullWidth
          type="password"
          label="Пароль"
          variant="outlined"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};
