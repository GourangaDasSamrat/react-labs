import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { BoardProvider, ListProvider, TaskProvider } from "./contexts";
import "./index.css";
import { router } from "./routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BoardProvider>
      <ListProvider>
        <TaskProvider>
          <RouterProvider router={router} />
        </TaskProvider>
      </ListProvider>
    </BoardProvider>
  </StrictMode>
);
