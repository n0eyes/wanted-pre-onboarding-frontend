import React, { useContext } from "react";
import { UnPacked } from "@/types/common";
import { GetToDoResponse } from "@/types/todo";
import { Styled } from "./style";
import { useState } from "react";
import { SubmitFunction, useSubmit } from "react-router-dom";
import { createContext } from "react";
import useInput from "@/utils/hooks/useInput";

interface ToDoProps {
  data: UnPacked<GetToDoResponse>;
}

interface Context {
  todo?: ToDoProps["data"]["todo"];
  editHandler?: VoidFunction;
  submit?: SubmitFunction;
}

const context = createContext<Context>({});
function ToDo(props: ToDoProps) {
  const {
    data: { todo },
  } = props;
  const [editing, setEditing] = useState(false);
  const editHandler = () => setEditing((prev) => !prev);
  const submit = useSubmit();

  return (
    <context.Provider value={{ todo, editHandler, submit }}>
      {editing ? <ToDo.Editing /> : <ToDo.View />}
    </context.Provider>
  );
}

export default ToDo;

ToDo.View = function View() {
  const { todo, editHandler } = useContext(context);

  return (
    <Styled.Root>
      <Styled.Content>{todo}</Styled.Content>
      <Styled.ButtonWrapper>
        <Styled.Button variant="basic" onClick={editHandler}>
          수정
        </Styled.Button>
        <Styled.Button variant="basic">삭제</Styled.Button>
      </Styled.ButtonWrapper>
    </Styled.Root>
  );
};

ToDo.Editing = function Editing() {
  const { todo, editHandler } = useContext(context);
  const [text, setText] = useInput(todo);

  return (
    <Styled.Root>
      <Styled.Form method="put">
        <Styled.Input value={text} onChange={setText} />
        <Styled.Button variant="basic" onClick={editHandler}>
          완료
        </Styled.Button>
      </Styled.Form>
    </Styled.Root>
  );
};
