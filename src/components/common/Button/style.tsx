import styled, { css } from "styled-components";

export type Variant = "basic" | "outlined";

export const Styled = {
  Button: styled.button<{
    variant?: Variant;
  }>`
    padding: 0.5rem 0;

    border: 1px solid dodgerblue;
    ${({ variant }) => {
      if (variant === "basic")
        return css`
          color: white;
          background-color: dodgerblue;
        `;

      if (variant === "outlined")
        return css`
          color: dodgerblue;
          background-color: white;
        `;
    }}
  `,
};
