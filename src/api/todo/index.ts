import { client, PATH } from "@/api";
import { getToDoResponse } from "@/types/todo";

export async function getToDo() {
  const { data } = await client<getToDoResponse>(PATH.GET_TODO);

  return data;
}
