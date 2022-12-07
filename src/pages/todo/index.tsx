import React from "react";
import InputForm from "@/components/todo/InputForm";
import ToDoList from "@/components/todo/ToDoList";
import { Styled } from "./style";

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
