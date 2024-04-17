import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './task-list';

const meta = {
  title: 'Components/TaskList',
  component: TaskList,
} as Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof TaskList>;
