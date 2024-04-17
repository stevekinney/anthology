import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './button';
import { expect, within } from '@storybook/test';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    size: 'medium',
    disabled: false,
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'Text to display on the button',
      table: {
        disable: true,
      },
    },
    variant: {
      name: 'Variant',
      description: 'Variant of the button',
      control: 'select',
      table: {
        defaultValue: {
          summary: 'primary',
        },
      },
    },
    size: {
      name: 'Size',
      control: 'select',
      description: 'Size of the button',
      table: {
        defaultValue: {
          summary: 'medium',
        },
      },
    },
    disabled: {
      name: 'Disabled',
      control: 'boolean',
      description: 'Disables the button',
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const ButtonAsLink: Story = {
  args: {
    href: 'https://example.com',
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = await canvas.findByText('Button');

    expect(button.tagName).toBe('A');
    expect(button).toHaveAttribute('href', 'https://example.com');
  },
};
