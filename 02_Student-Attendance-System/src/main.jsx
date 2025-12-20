import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import StudentProvider from "./contexts/StudentProvider.jsx";
import UserProvider from "./contexts/UserProvider.jsx";
import "./index.css";
import { router } from "./routes/router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentProvider>
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
    </StudentProvider>
  </StrictMode>
);
