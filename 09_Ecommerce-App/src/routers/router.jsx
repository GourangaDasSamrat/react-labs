import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Shop, NotFound } from "../pages";

export const rootRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Shop />,
      },
    ],
  },
]);