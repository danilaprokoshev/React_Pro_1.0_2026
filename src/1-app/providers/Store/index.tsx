import { Provider } from 'react-redux';
import { store } from '1-app/store';
import type { ComponentType, FC } from 'react';

export const withStore = (WrappedComponent: ComponentType) => {
  const ReturnedComponent: FC = () => (
    <Provider store={store}>
      <WrappedComponent />
    </Provider>
  );

  ReturnedComponent.displayName = `withStore${WrappedComponent.displayName}`;

  return ReturnedComponent;
};
