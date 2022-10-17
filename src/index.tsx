import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { WarriorProvider } from "./communs/hooks/warrior/WarriorContext";
import { ScoreProvider } from "./communs/hooks/Score/ScoreContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <WarriorProvider>
      <ScoreProvider>
        <App />
      </ScoreProvider>
    </WarriorProvider>
  </React.StrictMode>
);
