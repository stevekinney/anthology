import { ComponentProps } from 'react';

import styles from './button.module.css';

type ButtonProps = ComponentProps<'button'> & {
  variant?: 'primary' | 'secondary' | 'destructive';
};

export const Button = (props: ButtonProps) => {
  return <button className={styles.button} {...props} />;
};
