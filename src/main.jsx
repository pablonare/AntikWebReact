import React from "react";
import ReactDOM from "react-dom/client";

import "./styles/reset.css";
import "./styles/variables.css";
import "./styles/typography.css";
import "./styles/globals.css";
import "./styles/utilities.css";

import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);