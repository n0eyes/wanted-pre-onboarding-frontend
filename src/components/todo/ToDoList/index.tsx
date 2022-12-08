import React from "react";
import { GetToDoResponse } from "@/types/todo";
import ToDo from "../ToDo";
import { Styled } from "./style";

interface ToDoListProps {
  toDoList: GetToDoResponse;
}

function ToDoList(props: ToDoListProps) {
  const { toDoList } = props;

  return (
    <Styled.Root>
      {toDoList.map((data) => (
        <ToDo key={data.id} data={data} />
      ))}
    </Styled.Root>
  );
}

export default ToDoList;
