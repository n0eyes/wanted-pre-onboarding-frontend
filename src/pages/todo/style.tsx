import { flexCenter } from "@/style/mixin";
import styled from "styled-components";

export const Styled = {
  Root: styled.div`
    width: 60rem;
    padding: 3rem 2rem;
  `,

  Title: styled.header`
    font-size: 2.5rem;

    text-align: center;
  `,

  Main: styled.main`
    ${flexCenter("column")};

    margin-top: 3rem;
  `,
};
