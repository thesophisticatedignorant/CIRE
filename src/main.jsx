import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { WindowManagerProvider } from "./context/WindowManager.jsx";
import "./styles.css";
import "./mount_banners";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WindowManagerProvider>
      <App />
    </WindowManagerProvider>
  </React.StrictMode>
);
