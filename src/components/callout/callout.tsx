import type { PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

type CalloutProps = PropsWithChildren<{ title: string }> & VariantProps<typeof variants>;

const variants = cva(['p-4', 'rounded', 'border', 'shadow-md', 'space-y-4'], {
  variants: {
    type: {
      default: [
        'bg-slate-200',
        'border-slate-500',
        'text-slate-900',
        'dark:bg-slate-800',
        'dark:border-slate-900',
        'dark:text-slate-50',
      ],
      primary: [
        'bg-primary-200',
        'border-primary-500',
        'text-primary-900',
        'dark:bg-primary-800',
        'dark:border-primary-900',
        'dark:text-primary-50',
      ],
      information: [
        'bg-information-200',
        'border-information-500',
        'text-information-900',
        'dark:bg-information-800',
        'dark:border-information-900',
        'dark:text-information-50',
      ],
      success: [
        'bg-success-200',
        'border-success-500',
        'text-success-900',
        'dark:bg-success-800',
        'dark:border-success-900',
        'dark:text-success-50',
      ],
      warning: [
        'bg-warning-200',
        'border-warning-500',
        'text-warning-900',
        'dark:bg-warning-800',
        'dark:border-warning-900',
        'dark:text-warning-50',
      ],
      danger: [
        'bg-danger-200',
        'border-danger-500',
        'text-danger-900',
        'dark:bg-danger-800',
        'dark:border-danger-900',
        'dark:text-danger-50',
      ],
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

export const Callout = ({ title, children, type }: CalloutProps) => (
  <div className={variants({ type })}>
    <h2 className="font-semibold">{title}</h2>
    <p>{children}</p>
  </div>
);
