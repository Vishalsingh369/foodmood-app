// const heading = React.createElement("h1", {id: "heading",xyz:"abc"}, "Hello world from react!");
import React, { Component } from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
// const heading=React.createElement("h1",{id: "heading"},"Namaste React");

// Babel is converting JSX code to react code
// Babel is javascript compiler

// jsx= Babel transpiles it to React.createElement => ReactElement JS object => HTMLElement(render)

// const elem=( <h1>namaste world to me</h1>)
// // this is react element {
// const jsxheading = (
//   <h1 className="main" tabIndex="1">
//     {elem}
//     Namaste react heading
//   </h1>
// );
// // }

// // React functional based component
// // and class based Component

// // note: react Component always starts with capital letters

// // const Heading3 = function() { return( <h1>namaste reactjs</h1>)};\

// const number = 100;

// const Heading3 = () => (
//   <div id="head">
//     {jsxheading}
//     {number}
//     <h1>namaste reactjs</h1>
//   </div>
// );

// const Heading1 = () => {
//   return (
//     <div>
//       <h2>{number}</h2>
//       <h1>Namaste React to the world</h1>
//     </div>
//   );
// };

// // this is Component compositon {

// const Heading2 = () => (
//   <div>
//     {/* {
//     {Heading1()}
//     <Heading1></Heading1>               this three things are same thing
//     <Heading1 />
//   } */}
//     <h1>Namaste react DOM </h1>
//     <Heading3 />
//   </div>
// );
// // }

// console.log(jsxheading);

// // react elements rendered like this
// // root.render(jsxheading);

// // react components rendered like this




const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);
