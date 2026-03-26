import type { PropsWithChildren } from 'react';

import styles from './Button.module.css';

type Props = {
  onClick: () => void;
  isActive?: boolean;
};

export function Button({
  children,
  onClick,
  isActive = false,
}: PropsWithChildren<Props>) {
  return (
    <button
      className={`${styles.button} ${isActive ? styles.active : ''}`.trim()}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
