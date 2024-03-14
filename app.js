// const heading = React.createElement("h1", {id: "heading",xyz:"abc"}, "Hello world from react!");
import React from "react";
import ReactDOM from "react-dom/client";

// const heading=React.createElement("h1",{id: "heading"},"Namaste React");

// Babel is converting JSX code to react code
// Babel is javascript compiler

// jsx= Babel transpiles it to React.createElement => ReactElement JS object => HTMLElement(render)

const jsxheading = (
  <h1 className="main" tabIndex="1">
    Namaste react heading
  </h1>
);
console.log(jsxheading);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
