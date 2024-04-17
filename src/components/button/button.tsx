import { ComponentProps } from 'react';

import { variants, type ButtonVariants } from './button-variants';

export type ButtonProps = ComponentProps<'button'> &
  ButtonVariants & {
    size?: 'small' | 'medium' | 'large';
  };

export const Button = ({
  variant = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  return <button {...props} className={variants({ variant, size })} />;
};
