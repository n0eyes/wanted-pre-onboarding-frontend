import React from "react";
import Input from "@/components/common/Input";
import { Styled } from "./style";

function InputForm() {
  return (
    <Styled.Root>
      <Styled.Form>
        <Input />
        <Styled.Button variant="basic">추가</Styled.Button>
      </Styled.Form>
    </Styled.Root>
  );
}

export default InputForm;
