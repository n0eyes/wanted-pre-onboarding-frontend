import { ActionFunctionArgs, SubmitFunction } from 'react-router-dom';

type Extract<T> = T extends (args: infer U, options?: infer R) => void
  ? U & R
  : T;

type TaskType = 'EDIT_TODO' | 'CHECK_TODO' | 'CREATE_TODO' | 'DELETE_TODO';

interface DispatchOptions {
  callback?: VoidFunction;
  trigger?: () => SubmitFunction | void;
}
interface Dispatch {
  (
    {
      type,
      payload,
    }: { type: TaskType; payload?: { [index: string | number]: any } },
    options?: DispatchOptions
  ): void;
}

interface Task extends Extract<Dispatch> {}

let taskList: Task[] = [];

const clear = () => (taskList = []);

export const dispatch: Dispatch = ({ type, payload }, options) => {
  let callback: DispatchOptions['callback'];
  let trigger: DispatchOptions['trigger'];

  if (options?.callback) callback = options.callback;
  if (options?.trigger) trigger = options.trigger;

  taskList.push({ type, payload, callback });
  trigger?.();
};

export function withAction(action: Function) {
  return async (args: ActionFunctionArgs) => await action(args);
}

export async function consume(callback: (task: Task) => Promise<unknown>) {
  for (const task of taskList) {
    await callback(task);
    task.callback?.();
  }

  clear();

  return null;
}
