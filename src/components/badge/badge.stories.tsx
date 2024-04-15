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

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Information: Story = {
  args: {
    variant: 'information',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

export const Dark: Story = {
  render: ({ children }) => (
    <div className="flex gap-2">
      <Badge variant="default">Default {children}</Badge>
      <Badge variant="primary">Primary {children}</Badge>
      <Badge variant="information">Information {children}</Badge>
      <Badge variant="success">Success {children}</Badge>
      <Badge variant="warning">Warning {children}</Badge>
      <Badge variant="danger">Danger {children}</Badge>
    </div>
  ),
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};
