import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, IconButton, TextField } from '@mui/material';
import type { FC } from 'react';
import {
  Controller,
  useFieldArray,
  useFormContext,
  useFormState,
  useWatch,
} from 'react-hook-form';
import type { FormValues } from '../model';

export const SocialLinks: FC = () => {
  const { control } = useFormContext<FormValues>();
  const {
    fields: socialLinksValues,
    append: socialLinkAppend,
    remove: socialLinkRemove,
  } = useFieldArray<FormValues>({
    name: 'socialLinks',
  });

  const { errors } = useFormState<FormValues>({
    name: 'socialLinks',
  });

  const socialLinks = useWatch({ name: 'socialLinks', control });

  return (
    <>
      {socialLinksValues.map((socialLink, index) => (
        <Box
          key={socialLink.id}
          sx={{ display: 'flex', mb: 2, alignItems: 'flex-start' }}
        >
          <Controller
            name={`socialLinks.${index}.value` as const}
            control={control}
            render={({ field, fieldState }) => (
              <TextField
                {...field}
                sx={{ mb: 2 }}
                fullWidth
                label={`Социальная ссылка ${index + 1}`}
                variant="outlined"
                error={!!fieldState.error}
                helperText={fieldState.error?.message}
              />
            )}
          />

          {!!index && (
            <IconButton
              onClick={() => socialLinkRemove(index)}
              sx={{ ml: 2, mt: '12px' }}
              color="error"
              size="small"
            >
              <DeleteIcon />
            </IconButton>
          )}
        </Box>
      ))}

      <Button
        disabled={
          !!errors.socialLinks ||
          socialLinks.some(socialLink => !socialLink.value.trim())
        }
        onClick={() => socialLinkAppend({ value: '' })}
        color="primary"
        sx={{ mb: 4 }}
        startIcon={<AddIcon />}
      >
        Добавить социальную ссылку
      </Button>
    </>
  );
};
