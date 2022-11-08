import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import User from "./component/user"
import { Theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <User/>
      {/* <App /> */}
    </Theme>
  </React.StrictMode>
);
