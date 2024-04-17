import { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  args: {
    children: 'Badge',
    variant: 'default',
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'Text to display on the badge',
      table: {
        disable: true,
      },
    },
    variant: {
      name: 'Variant',
      description: 'Variant of the badge',
      control: 'select',
      options: ['default', 'primary', 'information', 'success', 'warning', 'danger'],
      table: {
        defaultValue: {
          summary: 'default',
        },
      },
    },
  },
} as Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof Badge>;
