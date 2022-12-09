import { ActionFunctionArgs } from "react-router-dom";

type Extract<T> = T extends (args: infer U, callback?: infer R) => void
  ? U & { callback: R }
  : T;

type TaskType = "update" | "create";

interface Dispatch {
  (
    {
      type,
      payload,
    }: { type: TaskType; payload?: { [index: string | number]: any } },
    callback?: VoidFunction
  ): void;
}

interface Task extends Extract<Dispatch> {}

let taskList: Task[] = [];

const clear = () => (taskList = []);

export const dispatch: Dispatch = ({ type, payload }, callback = () => {}) => {
  taskList.push({ type, payload, callback });
};

export function withAction(action: Function) {
  return async (args: ActionFunctionArgs) => await action(args);
}

export async function consume(callback: (task: Task) => Promise<unknown>) {
  for (const task of taskList) {
    await callback(task);
    task.callback();
  }

  clear();

  return null;
}
