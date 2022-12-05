import axios from "axios";
import { client, PATH } from "@/api/index";
import { AuthRequest, AuthResponse } from "@/types/auth/index";

export async function to<T>(
  promise: Promise<T>
): Promise<[null, T] | [unknown, null]> {
  try {
    return [null, await promise];
  } catch (error) {
    if (axios.isAxiosError(error)) alert(error.response?.data.message);
    else throw error;

    return [error, null];
  }
}

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

  return data;
}
