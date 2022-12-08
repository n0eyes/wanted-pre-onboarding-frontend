import { ModifyToString } from "../common";

export interface Auth {
  email?: FormDataEntryValue | null;
  password?: FormDataEntryValue | null;
  pwCheck?: FormDataEntryValue | null;
}

export type Result<T> = { isError: boolean; errors: ModifyToString<T> };

export interface Validator {
  auth: (data: Auth) => Result<Auth>;
}

export interface AuthRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
}
