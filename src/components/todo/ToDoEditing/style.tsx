import Button from "@/components/common/Button";
import Input from "@/components/common/Input";
import { flexBox } from "@/style/mixin";
import { Form } from "react-router-dom";
import styled from "styled-components";

export const Styled = {
  Root: styled.li`
    ${flexBox({ content: "space-between", items: "center" })}
  `,

  Button: styled(Button)`
    flex-shrink: 0;

    padding: 1rem 2rem;
    margin-left: 2rem;
  `,

  Form: styled(Form)`
    ${flexBox({ content: "space-between", items: "center" })}

    width: 100%;
  `,

  Input: styled(Input)`
    width: 100%;
  `,
};
