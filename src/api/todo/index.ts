import {
  UpdateToDoRequest,
  UpdateToDoResponse,
} from "./../../types/todo/index";
import { CreateToDoRequest, CreateToDoResponse } from "@/types/todo/index";
import { client, PATH } from "@/api";
import { GetToDoResponse } from "@/types/todo";

export async function getToDo() {
  const { data } = await client<GetToDoResponse>(PATH.GET_TODO);

  return data;
}

export async function createToDo(payload: CreateToDoRequest) {
  const { data } = await client.post<CreateToDoResponse>(
    PATH.CREATE_TODO,
    payload
  );

  return data;
}

export async function updateToDo(payload: UpdateToDoRequest) {
  const { data } = await client.put<UpdateToDoResponse>(
    `${PATH.UPDATE_TODO}/3`,
    payload
  );

  return data;
}
