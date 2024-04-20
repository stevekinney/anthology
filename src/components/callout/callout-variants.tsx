import { cva, type VariantProps } from 'class-variance-authority';

const variations = ['primary', 'information', 'success', 'danger', 'warning'] as const;
type Variations = (typeof variations)[number];

const variant = {
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
    'dark:text-primary-50',
  ],
  success: [
    'bg-success-200',
    'border-success-500',
    'text-success-900',
    'dark:bg-success-800',
    'dark:border-success-900',
    'dark:text-primary-50',
  ],
  danger: [
    'bg-danger-200',
    'border-danger-500',
    'text-danger-900',
    'dark:bg-danger-800',
    'dark:border-danger-900',
    'dark:text-primary-50',
  ],
  warning: [
    'bg-warning-200',
    'border-warning-500',
    'text-warning-900',
    'dark:bg-warning-800',
    'dark:border-warning-900',
    'dark:text-primary-50',
  ],
};

export const variants = cva(['p-4', 'rounded-lg', 'border', 'shadow-md', 'space-y-4'], {
  variants: {
    variant,
  },
});

export type CalloutVariants = VariantProps<typeof variants>;
