import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./styles/index.css";
import ScrollTop from "./components/common/ScrollTop.jsx"

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
    <ScrollTop />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
