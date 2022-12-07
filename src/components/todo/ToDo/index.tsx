import React from "react";
import { Styled } from "./style";

function ToDo() {
  return (
    <Styled.Root>
      <Styled.Content>todo</Styled.Content>
      <Styled.ButtonWrapper>
        <Styled.Button variant="basic">수정</Styled.Button>
        <Styled.Button variant="basic">삭제</Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.Root>
  );
}

export default ToDo;
