import Button from "@/components/common/Button";
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
    padding: 1rem 2rem;
  `,
};
