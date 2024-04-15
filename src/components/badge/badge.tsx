import type { PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

const variants = cva(
  [
    'inline-flex',
    'items-center',
    'gap-1',
    'rounded-md',
    'border',
    'border-opacity-50',
    'px-2',
    'py-1',
    'font-medium',
    'text-xs',
  ],
  {
    variants: {
      variant: {
        default: [
          'bg-slate-50',
          'text-slate-600',
          'border-slate-400',
          'dark:bg-slate-800',
          'dark:border-slate-700',
          'dark:text-slate-300',
        ],
        primary: [
          'bg-primary-50',
          'text-primary-600',
          'border-primary-400',
          'dark:bg-primary-800',
          'dark:border-primary-700',
          'dark:text-primary-300',
        ],
        success: [
          'bg-success-50',
          'text-success-700',
          'border-success-600',
          'dark:bg-success-800',
          'dark:text-success-300',
        ],
        danger: [
          'bg-danger-50',
          'text-danger-700',
          'border-danger-400',
          'dark:bg-danger-800',
          'dark:text-danger-300',
        ],
        warning: [
          'bg-warning-50',
          'text-warning-800',
          'border-warning-600',
          'dark:bg-warning-800',
          'dark:text-warning-300',
        ],
        information: [
          'bg-information-50',
          'text-information-600',
          'border-information-400',
          'dark:bg-information-800',
          'dark:text-information-300',
        ],
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

type BadgeProps = PropsWithChildren<VariantProps<typeof variants>>;

export const Badge = ({ variant, ...props }: BadgeProps) => {
  return <div className={variants({ variant })} {...props} />;
};
