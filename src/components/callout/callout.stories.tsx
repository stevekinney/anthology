import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    title: 'An Important Message',
    children: 'This is a message that you should read.',
  },
  argTypes: {
    title: {
      name: 'Title',
      control: 'text',
      description: 'Title of the callout',
    },
    children: {
      name: 'Content',
      control: 'text',
      description: 'Content of the callout',
    },
    type: {
      name: 'Type',
      control: 'select',
      options: ['default', 'primary', 'information', 'success', 'warning', 'danger'],
      description: 'Type of callout',
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {};

export const Primary: Story = {
  args: {
    type: 'primary',
  },
};

export const Information: Story = {
  args: {
    type: 'information',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
  },
};

export const Danger: Story = {
  args: {
    type: 'danger',
  },
};
