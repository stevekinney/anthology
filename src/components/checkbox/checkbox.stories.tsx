import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  args: {
    label: 'Checkbox',
    disabled: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the checkbox',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the checkbox',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    checked: {
      name: 'Checked',
      control: 'boolean',
      description: 'Marks the checkbox as checked',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const CheckedAndDisabled: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
