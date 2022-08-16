import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Page from "./components/Page";
import { config } from "./config";
import { routes } from "./routes";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Page config={config} />}>
        {Object.entries(routes).map(([key, route]) => (
          <Route key={key} path={route.path} element={route.component} />
        ))}
      </Route>
    </Routes>
  </BrowserRouter>
);
