import { to } from "@/api";
import { deleteToDo, updateToDo } from "@/api/todo";
import { createToDo } from "@/api/todo";
import { ActionFunctionArgs } from "react-router-dom";
import { consume } from "./withAction";

export async function toDoAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const todo = formData.get("todo") as string;
  const isCompleted = Boolean(formData.get("checkbox") as string);

  return consume(async ({ type, payload }) => {
    switch (type) {
      case "CREATE_TODO": {
        return to(createToDo({ todo }));
      }
      case "EDIT_TODO": {
        return to(
          updateToDo({
            id: payload?.id,
            todo,
            isCompleted,
          })
        );
      }
      case "CHECK_TODO": {
        return to(
          updateToDo({
            id: payload?.id,
            todo,
            isCompleted,
          })
        );
      }

      case "DELETE_TODO": {
        return to(deleteToDo({ id: payload?.id }));
      }

      default:
        return null;
    }
  });
}
