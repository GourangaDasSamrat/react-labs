import "bootstrap-icons/font/bootstrap-icons.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { store } from "./app/store.js";
import "./index.css";
import { rootRouter } from "./routers/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={rootRouter} />
    </Provider>
  </StrictMode>,
);
