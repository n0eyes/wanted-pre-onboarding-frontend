import Button from "@/components/common/Button";
import Form from "@/components/common/Form";
import Input from "@/components/common/Input";
import { flexBox, flexCenter } from "@/style/mixin";
import styled from "styled-components";

export const Styled = {
  Root: styled.li`
    ${flexBox({ content: "space-between", items: "center" })}
  `,

  Content: styled.div`
    flex-grow: 1;

    font-size: 1.5rem;
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
    height: 4rem;
  `,

  Input: styled(Input)`
    width: 100%;

    margin-right: 2rem;
  `,

  CheckBox: styled(Input)`
    width: 3rem;

    margin-right: 2rem;
  `,

  Label: styled.label`
    ${flexCenter()}

    height: 100%;

    flex-grow: 1;
  `,
};
