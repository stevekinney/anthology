import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';

type Story = StoryObj<typeof Button>;

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the button',
    },
  },
};

export default meta;

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
    disabled: false,
  },
};

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
    disabled: false,
  },
};
