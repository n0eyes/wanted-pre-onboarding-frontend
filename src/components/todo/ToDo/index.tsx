import React from "react";
import { UnPacked } from "@/types/common";
import { GetToDoResponse } from "@/types/todo";
import { Styled } from "./style";

interface ToDoProps {
  data: UnPacked<GetToDoResponse>;
}

function ToDo(props: ToDoProps) {
  const {
    data: { todo },
  } = props;
  return (
    <Styled.Root>
      <Styled.Content>{todo}</Styled.Content>
      <Styled.ButtonWrapper>
        <Styled.Button variant="basic">수정</Styled.Button>
        <Styled.Button variant="basic">삭제</Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.Root>
  );
}

export default ToDo;
