import React from 'react';
import { ActionFunctionArgs, redirect } from 'react-router-dom';
import { Styled } from './style';
import { join } from '@/api/auth';
import { AuthResponse } from '@/types/auth';
import { to } from '@/api';
import AuthForm from '@/components/common/AuthForm';

function Join() {
  return (
    <Styled.Root>
      <Styled.Title>Join</Styled.Title>
      <AuthForm type="Join" />
    </Styled.Root>
  );
}

export default Join;

export async function joinAction({ request }: ActionFunctionArgs) {
  const formData = await request.formData();

  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  const [error, data] = await to<AuthResponse>(join({ email, password }));

  return data ? redirect('/') : null;
}
