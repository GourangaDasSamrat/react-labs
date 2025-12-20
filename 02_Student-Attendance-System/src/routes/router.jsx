import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import {
  Counter,
  NotFound,
  StudentAddForm,
  StudentSection,
  UserDetails,
  Users,
} from "../components";

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
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
