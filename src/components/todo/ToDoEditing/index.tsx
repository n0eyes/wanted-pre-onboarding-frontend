import React from "react";
import { Styled } from "./style";

function ToDoEditing() {
  return (
    <Styled.Root>
      <Styled.Form>
        <Styled.Input />
        <Styled.Button variant="basic">완료</Styled.Button>
      </Styled.Form>
    </Styled.Root>
  );
}

export default ToDoEditing;
