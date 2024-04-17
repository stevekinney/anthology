import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';

const meta = {
  title: 'Components/Input',
  component: Input,
  args: {
    label: 'Input',
    placeholder: 'Enter text',
    disabled: false,
    required: false,
  },
  argTypes: {
    label: {
      name: 'Label',
      control: 'text',
      description: 'Label of the input',
    },
    placeholder: {
      name: 'Placeholder',
      control: 'text',
      description: 'Placeholder text of the input',
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the input',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
    required: {
      name: 'Required',
      control: 'boolean',
      description: 'Marks the input as required',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Required: Story = {
  args: {
    required: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithDetails: Story = {
  args: {
    details: 'This is a helpful hint.',
  },
};

export const Unlabeled: Story = {
  args: {
    unlabeled: true,
  },
};
