import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { AddProduct, Cart, NotFound, Shop, SignIn, SignUp } from "../pages";

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
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);
