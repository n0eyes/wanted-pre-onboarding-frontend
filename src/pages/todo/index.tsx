import React from "react";
import InputForm from "@/components/todo/InputForm";
import ToDoList from "@/components/todo/ToDoList";
import { Styled } from "./style";
import { to } from "@/api/auth";
import { createToDo, getToDo } from "@/api/todo";
import { GetToDoResponse } from "@/types/todo";
import { ActionFunctionArgs, useLoaderData } from "react-router-dom";

function ToDo() {
  const toDoList = useLoaderData() as GetToDoResponse;

  return (
    <Styled.Root>
      <Styled.Title>To Do List</Styled.Title>
      <Styled.Main>
        <InputForm />
        <ToDoList toDoList={toDoList} />
      </Styled.Main>
    </Styled.Root>
  );
}

export default ToDo;

export async function ToDoLoader() {
  const [error, data] = await to<GetToDoResponse>(getToDo());

  return data ?? error;
}

export async function ToDoAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const todo = formData.get("todo") as string;

  if (request.method === "POST") {
    await to(createToDo({ todo }));
  }

  return null;
}
