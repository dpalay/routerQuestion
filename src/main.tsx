import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import type { RouteObject } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Test from "./Test.tsx";

const routes: RouteObject[] = [
  { path: "/", element: <App /> },
  {
    path: "/test",
    loader: async ({ params }) => {
      console.log(params, "/test");
      return null;
    },
  },
  {
    path: "/test/:id",
    element: <Test />,
    loader: async ({ params }) => {
      console.log(params, `/test/${params.id}`);
      return null;
    },
  },
];

const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
