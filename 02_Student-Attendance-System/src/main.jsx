import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import StudentProvider from "./contexts/StudentProvider.jsx";
import "./index.css";
import { router } from "./routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentProvider>
      <RouterProvider router={router} />
    </StudentProvider>
  </StrictMode>
);
