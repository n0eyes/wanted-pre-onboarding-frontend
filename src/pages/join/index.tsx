import React from "react";
import Input from "@/components/common/Input";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { Styled } from "./style";
import useAuthForm from "@/utils/hooks/useAuthForm";
import { join, to } from "@/api/auth";
import { AuthResponse } from "@/types/auth";

function Join() {
  const {
    value: { email, password, pwCheck },
    handlers: { emailHandler, pwHandler, pwCheckHandler },
    validate: { isError, errors },
  } = useAuthForm();

  return (
    <Styled.Root>
      <Styled.Title>Join</Styled.Title>
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

        <Input
          type="password"
          name="pw-check"
          placeholder="password check"
          value={pwCheck}
          onChange={pwCheckHandler}
        />
        <Styled.Error>{errors.pwCheck}</Styled.Error>

        <Styled.ButtonWrapper>
          <Styled.Button type="submit" disabled={isError}>
            Join
          </Styled.Button>
        </Styled.ButtonWrapper>
      </Styled.Form>
    </Styled.Root>
  );
}

export default Join;

export async function joinAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const [error, data] = await to<AuthResponse>(join({ email, password }));

  return data ? redirect("/") : null;
}
