import React from "react";
import InputForm from "@/components/todo/InputForm";
import ToDoList from "@/components/todo/ToDoList";
import { Styled } from "./style";
import { getToDo } from "@/api/todo";
import { GetToDoResponse } from "@/types/todo";
import { useLoaderData } from "react-router-dom";
import { to } from "@/api";

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

export async function toDoLoader() {
  const [error, data] = await to<GetToDoResponse>(getToDo());

  return data ?? error;
}
