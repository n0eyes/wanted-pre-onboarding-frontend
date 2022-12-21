import React, { ChangeEvent, useCallback } from 'react';
import { useState } from 'react';

function useInput(
  initial: string = ''
): [string, ({ target: { value } }: ChangeEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<string>(initial);

  const inputHandler = useCallback(
    ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
      setValue(value);
    },
    []
  );

  return [value, inputHandler];
}

export default useInput;
