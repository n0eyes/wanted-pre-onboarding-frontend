import React from "react";
import Input from "@/components/common/Input";
import { Styled } from "./style";
import { dispatch } from "@/utils/actions/withAction";

function InputForm() {
  const onSubmit = () => dispatch({ type: "create" });

  return (
    <Styled.Root>
      <Styled.Form method="post" onSubmit={onSubmit}>
        <Input name="todo" />
        <Styled.Button variant="basic">추가</Styled.Button>
      </Styled.Form>
    </Styled.Root>
  );
}

export default InputForm;
