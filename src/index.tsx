import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { GlobalStyle } from "./style/global";
import Join, { joinAction } from "./pages/join";
import ToDo, { ToDoLoader } from "./pages/todo";
import Login, { loginAction } from "./pages/login";
import Layout from "./components/Layout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route element={<App />}>
        <Route index element={<Login />} action={loginAction} />
        <Route path="join" element={<Join />} action={joinAction} />
        <Route path="todo" element={<ToDo />} loader={ToDoLoader} />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
