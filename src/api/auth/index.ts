import { client, PATH } from "@/api/index";
import { AuthRequest, AuthResponse } from "@/types/auth/index";
import { AxiosResponse } from "axios";

export async function join({ email, password }: AuthRequest) {
  await client.post<AxiosResponse<AuthResponse>>(PATH.JOIN, {
    email,
    password,
  });
}

export async function login({ email, password }: AuthRequest) {
  const { data } = await client.post(PATH.JOIN, {
    email,
    password,
  });
}
