import { PropsWithChildren, createContext, useMemo, useReducer } from 'react';

let id = 0;

type Task = {
  id: string;
  title: string;
  completed: boolean;
};

type TaskListContextType = {
  tasks: Task[];
  incomplete: number;
  total: number;
  addTask: (title: string) => void;
  removeTask: (id: string) => void;
  toggleTask: (id: string) => void;
};

export const createTask = (title: string): Task => ({
  id: String(id++),
  title,
  completed: false,
});

const updateTask = (tasks: Task[], id: string, update: Partial<Task>): Task[] =>
  tasks.map((task) => (task.id === id ? { ...task, ...update } : task));

const removeTask = (tasks: Task[], id: string): Task[] => tasks.filter((task) => task.id !== id);

const addTask = (tasks: Task[], title: string): Task[] => [...tasks, createTask(title)];

const toggleTask = (tasks: Task[], id: string): Task[] =>
  updateTask(tasks, id, { completed: !tasks.find((task) => task.id === id)?.completed });

export const taskListReducer = (tasks: Task[], action: { type: string; payload: any }): Task[] => {
  switch (action.type) {
    case 'addTask':
      return addTask(tasks, action.payload);
    case 'removeTask':
      return removeTask(tasks, action.payload);
    case 'toggleTask':
      return toggleTask(tasks, action.payload);
    default:
      return tasks;
  }
};

export const TaskListContext = createContext<TaskListContextType>(
  undefined as unknown as TaskListContextType,
);

export const TaskListProvider = ({
  children,
  tasks: initialTasks = [],
}: PropsWithChildren<{ tasks?: Task[] }>) => {
  const [tasks, dispatch] = useReducer(taskListReducer, initialTasks);

  const addTask = (title: string) => dispatch({ type: 'addTask', payload: title });
  const removeTask = (id: string) => dispatch({ type: 'removeTask', payload: id });
  const toggleTask = (id: string) => dispatch({ type: 'toggleTask', payload: id });

  const incomplete = useMemo(() => tasks.filter((task) => !task.completed).length, [tasks]);
  const total = useMemo(() => tasks.length, [tasks]);

  return (
    <TaskListContext.Provider value={{ tasks, addTask, removeTask, toggleTask, incomplete, total }}>
      {children}
    </TaskListContext.Provider>
  );
};
