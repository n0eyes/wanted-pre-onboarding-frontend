import React from 'react';
import useAuthForm from '@/utils/hooks/useAuthForm';
import { Link } from 'react-router-dom';
import Input from '../Input';
import { Styled } from './style';

interface AuthFormProps {
  type: 'Login' | 'Join';
}

interface FormProps {
  data: ReturnType<typeof useAuthForm>;
}

function AuthForm({ type }: AuthFormProps) {
  const data = useAuthForm();

  if (type === 'Login') return <AuthForm.Login data={data} />;
  if (type === 'Join') return <AuthForm.Join data={data} />;

  return null;
}

export default AuthForm;

AuthForm.Login = function (props: FormProps) {
  const {
    data: {
      value: { email, password },
      handlers: { emailHandler, pwHandler },
      validate: { isError, errors },
    },
  } = props;

  return (
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
        <Styled.Button type="submit" disabled={isError}>
          Login
        </Styled.Button>
        <Link to={'/join'}>
          <Styled.Button type="button" variant="outlined">
            Join
          </Styled.Button>
        </Link>
      </Styled.ButtonWrapper>
    </Styled.Form>
  );
};

AuthForm.Join = function (props: FormProps) {
  const {
    data: {
      value: { email, password, pwCheck },
      handlers: { emailHandler, pwHandler, pwCheckHandler },
      validate: { isError, errors },
    },
  } = props;

  return (
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
  );
};
