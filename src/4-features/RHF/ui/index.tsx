import { zodResolver } from '@hookform/resolvers/zod';

import { Box, Button, Container, Divider, Typography } from '@mui/material';
import { useMemo, type FC } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

import { FORMS_LS_KEY } from '6-shared/config';
import { getMessageFromError } from '6-shared/lib/common';
import { formHandler } from '6-shared/lib/forms';
import { clearLS, loadFromLS } from '6-shared/lib/localStorage';
import {
  createInitialsValues,
  type FormValues,
  validationSchema,
} from '../model';
// import { AutoSave } from './AutoSave';
import { UserName } from './UserName';
// import { LostDataModal } from './LostDataModal';
import { FORM_LS_KEY } from '../config';
import { Email } from './Email';
import { Password } from './Password';
import { ConfirmPassword } from './ConfirmPassword';
// import { Skills } from './Skills';

export const RHFForm: FC = () => {
  const navigate = useNavigate();

  const initialValues = useMemo(() => {
    const valuesFromLS = loadFromLS<FormValues>({
      key: FORMS_LS_KEY,
      subTitle: FORM_LS_KEY,
    });

    return createInitialsValues(valuesFromLS);
  }, []);

  const form = useForm<FormValues>({
    defaultValues: initialValues,
    mode: 'onChange',
    resolver: zodResolver(validationSchema),
  });

  const { handleSubmit, formState } = form;

  const submitHandler = async (values: FormValues) => {
    try {
      await formHandler(values);

      toast.success('Форма успешно отправлена');

      clearLS({
        key: FORMS_LS_KEY,
        subTitle: FORM_LS_KEY,
      });

      navigate('/');
    } catch (error) {
      toast.error(getMessageFromError(error));
    }
  };

  return (
    <FormProvider {...form}>
      <Box
        component="form"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexFlow: 'column',
        }}
        onSubmit={handleSubmit(submitHandler)}
      >
        <Typography variant="h4" sx={{ mb: 4 }}>
          RHF form
        </Typography>
        <Container maxWidth="sm" sx={{ width: '100%' }}>
          <UserName />
          <Email />
          <Password />
          <ConfirmPassword />

          <Divider variant="middle" sx={{ mb: 4 }} />

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              loading={formState.isSubmitting}
              disabled={!formState.isValid || formState.isSubmitting}
              sx={{ mb: 2 }}
              variant="contained"
              type="submit"
            >
              Отправить
            </Button>
          </Box>
        </Container>
      </Box>
    </FormProvider>
  );
};
