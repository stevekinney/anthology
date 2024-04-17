import { cva, type VariantProps } from 'class-variance-authority';

export type ButtonVariants = VariantProps<typeof variants>;

export const variants = cva(
  [
    'font-semibold',
    'border',
    'rounded',
    'shadow-sm',
    'inline-flex',
    'items-center',
    'cursor-pointer',
    'gap-1.5',
    'focus-visible:outline',
    'focus-visible:outline-2',
    'focus-visible:outline-offset-2',
    'transition-colors',
    'disabled:opacity-50',
    'disabled:cursor-not-allowed',
    'disabled:pointer-events-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-primary-600',
          'text-white',
          'border-transparent',
          'hover:bg-primary-500',
          'active:bg-primary-400',
        ],
        secondary: [
          'bg-white',
          'text-slate-900',
          'border-slate-300',
          'hover:bg-slate-50',
          'active:bg-slate-100',
        ],
        destructive: [
          'bg-danger-600',
          'text-white',
          'border-transparent',
          'hover:bg-danger-500',
          'active:bg-danger-400',
        ],
      },
      size: {
        small: ['px-2.5', 'py-1.5', 'text-xs'],
        medium: ['px-3', 'py-2', 'text-sm'],
        large: ['px-4', 'py-2.5', 'text-base'],
      },
    },
    defaultVariants: {
      variant: 'secondary',
      size: 'medium',
    },
  },
);
