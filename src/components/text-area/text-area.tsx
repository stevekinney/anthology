import clsx from 'clsx';
import type { ComponentProps } from 'react';

type TextAreaProps = ComponentProps<'textarea'> & { label: string };

export const TextArea = ({ label, required, maxLength, ...props }: TextAreaProps) => {
  const tooLong = maxLength && String(props.value).length > maxLength;
  const length = props.value ? String(props.value).length : 0;

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
        className="block w-full gap-2 rounded-md bg-transparent bg-white p-4 text-sm placeholder-slate-400 shadow-sm ring-1 ring-inset ring-slate-500 focus:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-primary-600 disabled:cursor-not-allowed disabled:bg-slate-50 dark:bg-slate-800 dark:placeholder-slate-300"
        {...props}
      />

      {maxLength && (
        <div className="flex justify-end text-xs text-slate-500">
          <p>
            {length || 0}/{maxLength}
          </p>
        </div>
      )}
    </label>
  );
};
