// const heading = React.createElement("h1", {id: "heading",xyz:"abc"}, "Hello world from react!");
import React, { Component } from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom/client";

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

const Header = () => {
  return (
    <div className="header">
      <div className="logo container">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdrQ7Ly9pqZ6F06bzC5H8hu1Bl7scJF-1IGw&usqp=CAU"
          className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


const ResCard = () => {
  return (
    <div className="res-card" style={{
      backgroundColor:"#f0f0f0"
    }}>
      <img className="res-img"
      src="https://cdn.britannica.com/35/225835-050-A5CC289A/Indian-one-pot-meal-for-party.jpg" alt="res-logo"/>
      <h3>Meghana Foods</h3>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search Bar</div>
      <div className="res-container">
        <ResCard />
      </div>
    </div>
  );
};

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
