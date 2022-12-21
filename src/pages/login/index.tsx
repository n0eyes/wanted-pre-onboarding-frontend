import React from 'react';
import { Styled } from './style';
import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { login } from '@/api/auth';
import { AuthResponse } from '@/types/auth';
import { to } from '@/api';
import AuthForm from '@/components/common/AuthForm';

function Login() {
  return (
    <Styled.Root>
      <Styled.Title>Login</Styled.Title>
      <AuthForm type="Login" />
    </Styled.Root>
  );
}

export default Login;

export async function loginAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const [error, data] = await to<AuthResponse>(login({ email, password }));

  return data ? redirect('/todo') : null;
}
