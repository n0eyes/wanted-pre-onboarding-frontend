import styled from "styled-components";

export const Styled = {
  Root: styled.ul`
    width: 100%;
    height: 50rem;

    overflow-y: scroll;

    border: 1px solid black;

    padding: 1rem;
    margin-top: 4rem;

    & > li:not(:last-child) {
      margin-bottom: 1rem;
    }
  `,
};
