import React, { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

interface AuthProps {
  to: string;
  login: boolean;
}

function Auth(props: PropsWithChildren<AuthProps>): JSX.Element {
  const { children, to, login } = props;
  const user = localStorage.getItem("user");

  if (login && user) return <Navigate to={to} replace />;
  if (!login && !user) return <Navigate to={to} replace />;

  return <>{children}</>;
}

export default Auth;
