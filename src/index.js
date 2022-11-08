import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App";
import User from "./component/user";
import { Theme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Theme>
      <BrowserRouter>
        <Routes>
          <Route path="" element={<App />} />
          <Route path="pro" element={<User />} />
        </Routes>
      </BrowserRouter>
      {/* <App /> */}
    </Theme>
  </React.StrictMode>
);
