import { flexCenter } from "@/style/mixin";
import styled from "styled-components";

export const Styled = {
  Error: styled.h1`
    width: 100vw;
    height: 100vh;

    ${flexCenter()}

    font-size: 5rem;

    color: white;
    background-color: palevioletred;
  `,
};
