import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Counter, StudentAddForm, StudentSection } from "../components";
import Users from "../components/Users";
import UserDetails from "../components/UserDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: (
          <>
            <StudentAddForm />
            <StudentSection />
          </>
        ),
      },
      {
        path: "counter",
        element: <Counter />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "users/:userId",
        element: <UserDetails />,
      },
    ],
  },
]);
