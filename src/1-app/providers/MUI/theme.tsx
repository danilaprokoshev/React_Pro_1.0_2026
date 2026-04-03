import { createTheme } from '@mui/material';
import type { LinkProps } from '@mui/material/Link';
import { LinkBehavior } from './LinkBehavior';

export const theme = createTheme({
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior,
        underline: 'none',
      } as Omit<LinkProps, 'className'>,
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior,
      },
    },
  },
});
