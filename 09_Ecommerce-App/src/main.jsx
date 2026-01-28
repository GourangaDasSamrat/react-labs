import "bootstrap-icons/font/bootstrap-icons.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import { rootRouter } from "./routers/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={rootRouter} />
  </StrictMode>,
);
