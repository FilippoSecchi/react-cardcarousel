import React from "react";
import ReactDOM from "react-dom";

import CardCarousel from "./CardCarousel";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <CardCarousel />
  </React.StrictMode>,
  rootElement
);
