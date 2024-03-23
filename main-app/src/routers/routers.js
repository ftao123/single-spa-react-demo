import React from "react";
import App from "../App";
import App1 from "../pages/App1";
import App2 from "../pages/App2";
import App3 from "../pages/App3";
import { createBrowserRouter } from "react-router-dom";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/app1",
    element: <App1 />,
  },
  {
    path: "/app2",
    element: <App2 />,
  },
  {
    path: "/app3",
    element: <App3 />,
  },
]);

export default routers;
