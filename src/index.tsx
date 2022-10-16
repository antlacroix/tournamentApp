import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WarriorProvider } from "./communs/hooks/warrior/WarriorContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WarriorProvider>
      <App />
    </WarriorProvider>
  </React.StrictMode>
);
