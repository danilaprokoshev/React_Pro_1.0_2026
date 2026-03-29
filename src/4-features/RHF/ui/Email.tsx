import { TextField } from '@mui/material';

import type { FC } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import type { FormValues } from '../model';

export const Email: FC = () => {
  const { control } = useFormContext<FormValues>();

  console.log('RHF Email');

  return (
    <Controller
      name="email"
      control={control}
      render={({ field, fieldState }) => (
        <TextField
          {...field}
          sx={{ mb: 2 }}
          fullWidth
          type="email"
          label="Email"
          variant="outlined"
          error={!!fieldState.error}
          helperText={fieldState.error?.message}
        />
      )}
    />
  );
};
