import React from "react";
import Input from "@/components/common/Input";
import { Styled } from "./style";
import { ActionFunctionArgs, Link, redirect } from "react-router-dom";
import useAuthForm from "@/utils/hooks/useAuthForm";
import { login, to } from "@/api/auth";
import { AuthResponse } from "@/types/auth";

function Login() {
  const {
    value: { email, password },
    handlers: { emailHandler, pwHandler },
    validate: { isError, errors },
  } = useAuthForm();

  return (
    <Styled.Root>
      <Styled.Title>Login</Styled.Title>
      <Styled.Form method="post">
        <Input
          type="text"
          name="email"
          placeholder="email"
          value={email}
          onChange={emailHandler}
        />
        <Styled.Error>{errors.email}</Styled.Error>

        <Input
          type="password"
          name="password"
          placeholder="password"
          value={password}
          onChange={pwHandler}
        />
        <Styled.Error>{errors.password}</Styled.Error>

        <Styled.ButtonWrapper>
          <Styled.Button type="submit" variant="basic" disabled={isError}>
            Login
          </Styled.Button>
          <Link to={"/join"}>
            <Styled.Button type="button" variant="outlined">
              Join
            </Styled.Button>
          </Link>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Root>
  );
}

export default Login;

export async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const [error, data] = await to<AuthResponse>(login({ email, password }));

  return data ? redirect("/todo") : null;
}
