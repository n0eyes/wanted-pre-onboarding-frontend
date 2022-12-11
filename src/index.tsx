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
import ToDo, { toDoLoader } from "./pages/todo";
import Login, { loginAction } from "./pages/login";
import Layout from "./components/Layout";
import Auth from "./pages/auth";
import { withAction } from "./utils/actions/withAction";
import { toDoAction } from "./utils/actions";
import Error from "./pages/error";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<Error />}>
      <Route element={<App />}>
        <Route
          index
          element={
            <Auth to="/todo" login={true}>
              <Login />
            </Auth>
          }
          action={loginAction}
        />
        <Route
          path="join"
          element={
            <Auth to="/todo" login={true}>
              <Join />
            </Auth>
          }
          action={joinAction}
        />
        <Route
          path="todo"
          element={
            <Auth to="/" login={false}>
              <ToDo />
            </Auth>
          }
          action={withAction(toDoAction)}
          loader={toDoLoader}
        />
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
