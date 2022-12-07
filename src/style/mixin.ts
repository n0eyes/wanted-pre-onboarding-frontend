import { css } from "styled-components";

export const flexBox = ({
  dir = "row",
  content = "baseline",
  items = "baseline",
}) =>
  css`
    display: flex;
    flex-direction: ${dir};
    justify-content: ${content};
    align-items: ${items};
  `;

export const flexCenter = (dir = "row") =>
  css`
    display: flex;
    flex-direction: ${dir};
    justify-content: center;
    align-items: center;
  `;
