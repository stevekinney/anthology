import { ComponentProps } from 'react';

import styles from './button.module.css';

export type ButtonProps = ComponentProps<'button'> & {
  variant: 'primary' | 'secondary' | 'destructive';
};

export const Button = ({ variant, ...props }: ButtonProps) => {
  let className = styles.button;
  if (variant === 'secondary') className += ' ' + styles.secondary;
  if (variant === 'destructive') className += ' ' + styles.destructive;

  return <button className={className} {...props} />;
};
