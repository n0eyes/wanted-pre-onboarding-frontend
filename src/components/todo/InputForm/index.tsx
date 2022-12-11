import React from "react";
import Input from "@/components/common/Input";
import { Styled } from "./style";
import { dispatch } from "@/utils/actions/withAction";

function InputForm() {
  const submitHandler = () => dispatch({ type: "CREATE_TODO" });

  return (
    <Styled.Root>
      <Styled.Form method="post" onSubmit={submitHandler}>
        <Input name="todo" />
        <Styled.Button>추가</Styled.Button>
      </Styled.Form>
    </Styled.Root>
  );
}

export default InputForm;
