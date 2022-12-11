import { client, PATH } from "@/api/index";
import { AuthRequest, AuthResponse } from "@/types/auth/index";

export async function join({ email, password }: AuthRequest) {
  const { data } = await client.post<AuthResponse>(PATH.JOIN, {
    email,
    password,
  });

  return data;
}

export async function login({ email, password }: AuthRequest) {
  const { data } = await client.post<AuthResponse>(PATH.LOGIN, {
    email,
    password,
  });

  localStorage.setItem("user", data.access_token);
  client.defaults.headers["Authorization"] = `Bearer ${data.access_token}`;

  return data;
}
