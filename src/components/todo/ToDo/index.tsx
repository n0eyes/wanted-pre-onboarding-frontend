import React from "react";
import { UnPacked } from "@/types/common";
import { GetToDoResponse } from "@/types/todo";
import { Styled } from "./style";
import { useState } from "react";
import { dispatch } from "@/utils/actions/withAction";

interface ToDoProps {
  data: UnPacked<GetToDoResponse>;
}

interface ChildrenProps {
  data: ToDoProps["data"];
  onEdit: VoidFunction;
}

function ToDo(props: ToDoProps) {
  const { data } = props;
  const [editing, setEditing] = useState(false);
  const editHandler = () => setEditing((prev) => !prev);

  return editing ? (
    <ToDo.Editing data={data} onEdit={editHandler} />
  ) : (
    <ToDo.View data={data} onEdit={editHandler} />
  );
}

export default ToDo;

ToDo.View = function View(props: ChildrenProps) {
  const {
    data: { id, todo },
    onEdit,
  } = props;
  const deleteHandler = () => dispatch({ type: "delete", payload: { id } });

  return (
    <Styled.Root>
      <Styled.Form method="delete">
        <Styled.Content>{todo}</Styled.Content>
        <Styled.ButtonWrapper>
          <Styled.Button variant="basic" onClick={onEdit}>
            수정
          </Styled.Button>
          <Styled.Button variant="basic" onClick={deleteHandler}>
            삭제
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Root>
  );
};

ToDo.Editing = function Editing(props: ChildrenProps) {
  const {
    data: { id, todo },
    onEdit,
  } = props;

  const onSubmit = () => {
    dispatch(
      {
        type: "update",
        payload: { id },
      },
      onEdit
    );
  };

  return (
    <Styled.Root>
      <Styled.Form method="put" onSubmit={onSubmit}>
        <Styled.Input name="todo" defaultValue={todo} autoFocus />
        <Styled.Button variant="basic">완료</Styled.Button>
      </Styled.Form>
    </Styled.Root>
  );
};
