import React from "react";
import Input from "@/components/common/Input";
import { Styled } from "./style";
import useInput from "@/utils/hooks/useInput";

function InputForm() {
  const [text, setText] = useInput();
  return (
    <Styled.Root>
      <Styled.Form method="post">
        <Input name="todo" value={text} onChange={setText} />
        <Styled.Button variant="basic">추가</Styled.Button>
      </Styled.Form>
    </Styled.Root>
  );
}

export default InputForm;
