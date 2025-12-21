import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { NotFound } from "../components";
import { Boards, BoardsDetails } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Boards />,
      },
      {
        path: "boards/:boardId",
        element: <BoardsDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
