import type { ComponentProps } from 'react';
import clsx from 'clsx';

type InputProps = ComponentProps<'input'> & {
  label: string;
  details?: string;
  required?: boolean;
  unlabeled?: boolean;
  disabled?: boolean;
};

export const Input = ({
  label,
  value,
  details,
  placeholder,
  required = false,
  unlabeled = false,
  disabled = false,
  ...props
}: InputProps) => {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className={clsx(
          'inline-flex items-center gap-1 text-sm font-medium',
          required && 'after:bg-accent-500 after:h-1.5 after:w-1.5 after:rounded-full',
          unlabeled && 'sr-only',
        )}
      >
        {label}
      </span>

      <input
        value={value}
        className="focus:bg-primary-50 focus:ring-primary-600 block w-full gap-2 rounded-md bg-transparent bg-white px-3 py-1 text-sm placeholder-slate-400 shadow shadow-sm ring-1 ring-inset ring-slate-500 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:bg-slate-50 dark:bg-slate-800 dark:placeholder-slate-300"
        placeholder={unlabeled ? label : placeholder}
        disabled={disabled}
        required={required}
        {...props}
      />
      {details && <span className="text-xs text-slate-500">{details}</span>}
    </label>
  );
};
