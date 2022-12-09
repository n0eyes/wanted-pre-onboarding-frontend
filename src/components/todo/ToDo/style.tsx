import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import { flexBox } from "@/style/mixin";
import styled from "styled-components";

export const Styled = {
  Root: styled.li`
    ${flexBox({ content: "space-between", items: "center" })}
  `,

  Content: styled.span`
    flex-grow: 1;
  `,

  ButtonWrapper: styled.div`
    width: 15rem;

    ${flexBox({ content: "space-between", items: "center" })}
    flex-shrink: 0;
  `,

  Button: styled(Button)`
    flex-shrink: 0;

    padding: 1rem 2rem;
  `,

  Form: styled(Form)`
    ${flexBox({ content: "space-between", items: "center" })}

    width: 100%;
  `,

  Input: styled(Input)`
    width: 100%;

    margin-right: 2rem;
  `,
};
