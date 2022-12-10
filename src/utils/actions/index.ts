import { deleteToDo, updateToDo } from "@/api/todo";
import { to } from "@/api/auth";
import { createToDo } from "@/api/todo";
import { ActionFunctionArgs } from "react-router-dom";
import { consume } from "./withAction";

export async function toDoAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const todo = formData.get("todo") as string;

  return consume(async ({ type, payload }) => {
    switch (type) {
      case "create": {
        return to(createToDo({ todo }));
      }
      case "update": {
        return to(updateToDo({ id: payload?.id, todo, isCompleted: true }));
      }

      case "delete": {
        return to(deleteToDo({ id: payload?.id }));
      }

      default:
        return null;
    }
  });
}
