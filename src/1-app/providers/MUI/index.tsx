import { ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import type { ComponentType } from 'react';
import { theme } from './theme';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export const withTheme = (WrappedComponent: ComponentType) => () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <WrappedComponent />
  </ThemeProvider>
);
