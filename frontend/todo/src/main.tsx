import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "./App.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Notifications />
      <App />
    </MantineProvider>
  </React.StrictMode>
);
