import { useState, type ComponentProps } from 'react';
import clsx from 'clsx';

type ToggleProps = ComponentProps<'input'> & {
  label: string;
};

export const Toggle = ({ label, ...props }: ToggleProps) => {
  return (
    <label className="inline-flex cursor-pointer items-center">
      <input type="checkbox" className="peer sr-only" {...props} />
      <div className="peer-checked:bg-primary-600 peer-focus:ring-primary-600 pointer-events-none relative h-6 w-11 rounded-full bg-slate-300 ring-offset-slate-50 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-full peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-offset-2 dark:bg-slate-700 dark:ring-offset-slate-900" />
      <span className="ml-3 text-sm font-medium">{label}</span>
    </label>
  );
};
