import React from "react";
import { Auth, Result, Validator } from "@/types/auth";
import { useEffect } from "react";
import { useState } from "react";
import useInput from "./useInput";

export const validator: Validator = {
  auth: ({ email, password, pwCheck = "" }: Auth) => {
    const result: Result<Auth> = { isError: false, errors: {} };

    if (typeof email !== "string" || (!email.includes("@") && email !== "")) {
      result.errors.email = "@를 포함한 올바른 이메일 양식을 입력해 주세요";
    }

    if (
      typeof password !== "string" ||
      (password.length < 8 && password !== "")
    ) {
      result.errors.password = "8자리 이상 입력해 주세요";
    }

    if (
      typeof pwCheck !== "string" ||
      (password !== pwCheck && pwCheck !== "")
    ) {
      result.errors.pwCheck = "비밀번호가 일치하지 않습니다";
    }

    if (Object.keys(result.errors).length) {
      result.isError = true;
    }

    return result;
  },
};

function useAuthForm() {
  const [email, emailHandler] = useInput();
  const [password, pwHandler] = useInput();
  const [pwCheck, pwCheckHandler] = useInput();

  const [validate, setValidate] = useState<Result<Auth>>({
    isError: false,
    errors: {},
  });

  useEffect(() => {
    const validate = validator.auth({ email, password, pwCheck });

    setValidate(validate);
  }, [email, password, pwCheck]);

  return {
    value: { email, password, pwCheck },
    handlers: { emailHandler, pwHandler, pwCheckHandler },
    validate,
  };
}

export default useAuthForm;
