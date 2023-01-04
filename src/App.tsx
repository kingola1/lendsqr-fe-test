import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./config/routes";
import "./scss/App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((_, i) => (
          <Route key={i} {..._} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
