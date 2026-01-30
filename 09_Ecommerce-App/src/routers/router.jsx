import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PrivateAdminRoute, PrivateUserRoute } from "../components";
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
        path: "cart",
        element: (
          <PrivateUserRoute>
            <Cart />
          </PrivateUserRoute>
        ),
      },
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      {
        path: "add-product",
        element: (
          <PrivateAdminRoute>
            <AddProduct />
          </PrivateAdminRoute>
        ),
      },
    ],
  },
]);
