import { ComponentProps } from 'react';
import clsx from 'clsx';

export type CheckboxProps = Omit<ComponentProps<'input'>, 'type'> & {
  label: string;
};

export const Checkbox = ({ label, className, ...props }: CheckboxProps) => {
  return (
    <label
      className={clsx(
        'inline-flex cursor-pointer select-none items-center gap-1.5',
        props.disabled && 'cursor-not-allowed opacity-50',
        className,
      )}
    >
      <input type="checkbox" className="peer sr-only" {...props} />
      <div className="peer-checked:border-primary-800 peer-checked:bg-primary-600 peer-focus:ring-primary-500 dark:peer-checked:bg-primary-600 relative h-4 w-4 min-w-4 rounded border border-slate-500 bg-slate-50 shadow-sm after:absolute after:left-0.5 after:top-0 after:text-xs after:text-white after:drop-shadow-sm peer-checked:after:content-['✔'] peer-focus:ring-1 peer-focus:ring-offset-2 dark:bg-slate-700 dark:ring-offset-slate-800" />
      <span className="text-sm font-medium">{label}</span>
    </label>
  );
};
