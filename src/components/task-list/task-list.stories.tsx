import type { Meta, StoryObj } from '@storybook/react';
import { TaskList } from './task-list';
import { TaskListProvider } from './task-list-context';

const meta = {
  title: 'Components/TaskList',
  component: TaskList,
  loaders: [
    async () => {
      const tasks = await fetch('https://jsonplaceholder.typicode.com/todos').then((res) =>
        res.json(),
      );
      return { tasks };
    },
  ],
  decorators: [
    (Story, { loaded }) => (
      <TaskListProvider tasks={loaded.tasks}>
        <Story />
      </TaskListProvider>
    ),
  ],
} as Meta<typeof TaskList>;

export default meta;
type Story = StoryObj<typeof TaskList>;

export const Default: Story = {};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};
