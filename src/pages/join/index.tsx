import React from "react";
import Input from "@/components/common/Input";
import { ActionFunctionArgs, redirect } from "react-router-dom";
import { Styled } from "./style";
import { client } from "@/api";
import useForm, { validator } from "@/utils/hooks/useAuthForm";

function Join() {
  const {
    value: { email, password, pwCheck },
    handlers: { emailHandler, pwHandler, pwCheckHandler },
    validate: { isError, errors },
  } = useForm();

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
          <Styled.Button type="submit" variant="basic" disabled={isError}>
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

  const email = formData.get("email");
  const password = formData.get("password");
  const pwCheck = formData.get("pw-check");

  const { isError, errors } = validator.join({ email, password, pwCheck });

  if (isError) return errors;

  await client.post("/auth/signup", {
    email,
    password,
  });

  return redirect("/login");
}
