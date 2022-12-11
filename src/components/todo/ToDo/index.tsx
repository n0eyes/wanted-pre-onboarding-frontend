import { UnPacked } from "@/types/common";
import { GetToDoResponse } from "@/types/todo";
import { Styled } from "./style";
import { FormEvent, useState } from "react";
import { dispatch } from "@/utils/actions/withAction";
import useTrigger from "@/utils/hooks/useTrigger";

interface ToDoProps {
  data: UnPacked<GetToDoResponse>;
}

interface ChildrenProps {
  data: ToDoProps["data"];
}

function ToDo(props: ToDoProps) {
  const { data } = props;

  return <ToDo.View data={data} />;
}

export default ToDo;

ToDo.View = function View(props: ChildrenProps) {
  const {
    data: { id, todo, isCompleted },
  } = props;

  const [editing, setEditing] = useState(false);
  const trigger = useTrigger();

  const toggleEditing = () => setEditing((prev) => !prev);

  const updateHandler = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);
    const name = (e.target as HTMLInputElement).name;

    if (name !== "checkbox") return;

    dispatch({
      type: "CHECK_TODO",
      payload: { id },
    });

    trigger("put", formData);
  };

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    const formData = new FormData(e.currentTarget);

    dispatch(
      {
        type: "EDIT_TODO",
        payload: { id },
      },
      { callback: toggleEditing }
    );

    trigger("put", formData);
  };
  const deleteHandler = () => {
    dispatch({ type: "DELETE_TODO", payload: { id } });
    trigger("delete");
  };

  return (
    <Styled.Root>
      <Styled.Form onChange={updateHandler} onSubmit={submitHandler}>
        <Styled.CheckBox
          name="checkbox"
          type="checkbox"
          defaultChecked={isCompleted}
        />
        <Styled.Input name="todo" defaultValue={todo} readOnly={!editing} />

        <Styled.ButtonWrapper>
          {editing && <Styled.Button type="submit">완료</Styled.Button>}
          {!editing && (
            <Styled.Button onClick={toggleEditing} type="button">
              수정
            </Styled.Button>
          )}
          <Styled.Button onClick={deleteHandler} type="button">
            삭제
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Root>
  );
};
