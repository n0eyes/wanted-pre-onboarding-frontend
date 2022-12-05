import { darken, lighten } from "polished";
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

          &:disabled {
            background-color: ${darken(0.1, "dodgerblue")};
          }

          &:not(:disabled):hover {
            background-color: ${lighten(0.1, "dodgerblue")};
          }

          &:not(:disabled):active {
            background-color: ${darken(0.1, "dodgerblue")};
          }
        `;

      if (variant === "outlined")
        return css`
          color: dodgerblue;
          background-color: white;
        `;
    }}
  `,
};
