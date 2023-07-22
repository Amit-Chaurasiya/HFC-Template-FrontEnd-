import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/swiper/swiper-bundle";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import Schedule from "./components/schedule";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

reportWebVitals();
