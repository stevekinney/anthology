import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export const Button = (props: ButtonProps) => {
  return <button {...props} />;
};
