import React, { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { Styled, Variant } from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
}

function Button({ children, ...props }: PropsWithChildren<ButtonProps>) {
  return (
    <Styled.Button {...props} variant={props.variant ?? "basic"}>
      {children}
    </Styled.Button>
  );
}

export default Button;
