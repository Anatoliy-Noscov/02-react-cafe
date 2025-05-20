import "modern-normalize/modern-normalize.css";
import App from "./components/app/App";
import React from "react";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
