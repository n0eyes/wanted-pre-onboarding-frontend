import React from "react";
import { Outlet } from "react-router-dom";
import { Styled } from "./style";

function Layout() {
  return (
    <Styled.Root>
      <Outlet />
    </Styled.Root>
  );
}

export default Layout;
