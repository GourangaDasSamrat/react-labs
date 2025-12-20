import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Counter, StudentAddForm, StudentSection } from "../components";

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
    ],
  },
]);
