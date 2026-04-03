import { Outlet } from 'react-router';
import { Header } from '3-widgets/header';
import { withProviders } from './providers';
import { Box, Container } from '@mui/material';

export const App = withProviders(() => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}
      >
        <Header />
        <Container maxWidth="lg" sx={{ py: 8 }}>
          <Outlet />
        </Container>
      </Box>
    </>
  );
});
