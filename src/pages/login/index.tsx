import React from "react";
import Input from "@/components/common/Input";
import { Styled } from "./style";

function Login() {
  return (
    <Styled.Root>
      <Styled.Title>Login</Styled.Title>
      <Styled.Form method="post">
        <Input type="text" name="email" placeholder="email" />
        <Styled.Error></Styled.Error>

        <Input type="text" name="password" placeholder="password" />
        <Styled.Error></Styled.Error>

        <Styled.ButtonWrapper>
          <Styled.Button type="submit" variant="basic">
            Login
          </Styled.Button>
          <Styled.Button type="submit" variant="outlined">
            Join
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Root>
  );
}

export default Login;
