import React, { cloneElement } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Page from "./components/Page";
import { config } from "./config";
import { routes } from "./routes";

import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route exact path="/" element={<Page config={config} />}>
        {Object.entries(routes).map(([key, route]) => (
          <Route
            key={key}
            path={route.path}
            element={cloneElement(route.component, { config: config })}
          />
        ))}
      </Route>
    </Routes>
  </Router>
);
