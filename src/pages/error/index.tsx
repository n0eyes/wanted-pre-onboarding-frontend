import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import { Styled } from "./style";

function Error() {
  const error = useRouteError();

  return (
    <Styled.Error>
      {isRouteErrorResponse(error) ? error.error?.message : "Unexpected Error"}
    </Styled.Error>
  );
}

export default Error;
