import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import StudentProvider from "./contexts/StudentProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentProvider>
      <App />
    </StudentProvider>
  </StrictMode>
);
