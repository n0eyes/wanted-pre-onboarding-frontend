import React from "react";
import InputForm from "@/components/todo/InputForm";
import ToDoList from "@/components/todo/ToDoList";
import { Styled } from "./style";
import { to } from "@/api/auth";
import { getToDo } from "@/api/todo";
import { getToDoResponse } from "@/types/todo";

function ToDo() {
  return (
    <Styled.Root>
      <Styled.Title>To Do List</Styled.Title>
      <Styled.Main>
        <InputForm />
        <ToDoList />
      </Styled.Main>
    </Styled.Root>
  );
}

export default ToDo;

export async function ToDoLoader() {
  const [error, data] = await to<getToDoResponse>(getToDo());

  return data ?? error;
}
