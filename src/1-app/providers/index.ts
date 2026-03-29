import { compose } from '6-shared/lib/compose';
import { withTheme } from './MUI';
import { withStore } from './Store';
import { withToastify } from './Toastify';

export const withProviders = compose(withTheme, withStore, withToastify);
