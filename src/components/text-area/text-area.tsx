import clsx from 'clsx';
import { useMemo, useState, type ComponentProps } from 'react';

type TextAreaProps = ComponentProps<'textarea'> & { label: string };

export const TextArea = ({ label, required, maxLength, ...props }: TextAreaProps) => {
  const [value, setValue] = useState(String(props.value || ''));
  const tooLong = useMemo(() => maxLength && value.length > maxLength, [value, maxLength]);

  return (
    <label className="flex flex-col gap-1.5">
      <span
        className={clsx(
          'inline-flex items-center gap-1 text-sm font-medium',
          required && 'after:h-1.5 after:w-1.5 after:rounded-full after:bg-accent-500',
        )}
      >
        {label}
      </span>

      <textarea
        className={clsx(
          'w-full gap-2 rounded-md bg-transparent bg-white p-4 text-sm placeholder-slate-400 shadow-sm ring-1 ring-inset ring-slate-500 invalid:bg-danger-50 focus:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:cursor-not-allowed disabled:bg-slate-50 dark:bg-slate-800 dark:placeholder-slate-300',
          tooLong && 'ring-2 ring-danger-500',
        )}
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      {maxLength && (
        <div className="gap-1.4 flex justify-end text-xs">
          <p className={clsx(tooLong ? 'text-danger-500' : 'text-slate-500')}>
            <span data-length={value.length}>{value.length}</span>/{maxLength}
          </p>
        </div>
      )}
    </label>
  );
};
