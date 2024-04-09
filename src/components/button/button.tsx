import { ComponentProps } from 'react';
import clsx from 'clsx';

import styles from './button.module.css';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant = 'primary', ...props }: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        variant === 'secondary' && styles.secondary,
        variant === 'destructive' && styles.destructive,
      )}
      {...props}
    />
  );
};
