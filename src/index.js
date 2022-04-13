import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.component";
import "./assets/sass/main.scss";
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
