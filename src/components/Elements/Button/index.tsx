import type { ComponentProps, FC, ReactNode } from 'react';

import { clsx } from 'clsx';

import styles from './index.module.css';

type Props = {
  children: ReactNode;
  className?: string;
} & ComponentProps<'button'>;

export const Button: FC<Props> = ({ children, className, ...props }) => {
  return (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    <button {...props} className={clsx(styles.root, className)}>
      {children}
    </button>
  );
};
