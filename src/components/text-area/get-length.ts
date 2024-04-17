import { ComponentProps } from 'react';

export const getLength = (value: ComponentProps<'textarea'>['value']): number => {
  if (typeof value !== 'string') return 0;
  return value.length;
};

export const isTooLong = (
  value: ComponentProps<'textarea'>['value'],
  maxLength: ComponentProps<'textarea'>['maxLength'],
): boolean => {
  if (typeof value !== 'string') return false;
  if (!maxLength) return false;
  return value.length > maxLength;
};
