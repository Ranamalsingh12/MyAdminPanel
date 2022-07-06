import React from "react";
import ReactDom from "react-dom";

import "./index.css";
import App from "./App";
import { ContextProvider } from "./context/ContextProvider";

ReactDom.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.getElementById("root")
);
