import React from "react";
import {
  SubmitOptions,
  FormMethod,
  useSubmit,
  SubmitFunction,
} from "react-router-dom";

type Target<T> = T extends (target: infer U) => void ? U : T;

function useTrigger() {
  const submit = useSubmit();

  function trigger(
    method: FormMethod,
    target?: Target<SubmitFunction>,
    options?: SubmitOptions
  ) {
    submit(target ?? null, {
      ...options,
      method,
    });
  }

  return trigger;
}

export default useTrigger;
