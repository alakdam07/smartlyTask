import React from "react";
import ReactDom from "react-dom";
import Home from "./Home";

it("Testing the button ", () => {
  const div = document.createElement("div");
  ReactDom.render(<Home />, div);
});
