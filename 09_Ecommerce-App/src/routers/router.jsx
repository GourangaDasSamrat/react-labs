import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { PrivateAdminRoute, PrivateUserRoute } from "../components";
import {
  AddProduct,
  AllProducts,
  Cart,
  EditProduct,
  NotFound,
  Shop,
  SignIn,
  SignUp,
} from "../pages";

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
        path: "admin/add-product",
        element: (
          <PrivateAdminRoute>
            <AddProduct />
          </PrivateAdminRoute>
        ),
      },
      {
        path: "admin/all-products",
        element: (
          <PrivateAdminRoute>
            <AllProducts />
          </PrivateAdminRoute>
        ),
      },
      {
        path: "admin/edit-product/:id",
        element: (
          <PrivateAdminRoute>
            <EditProduct />
          </PrivateAdminRoute>
        ),
      },
    ],
  },
]);
