import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App.component";
import "./assets/sass/main.scss";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<App />);
