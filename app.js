// const heading = React.createElement("h1", {id: "heading",xyz:"abc"}, "Hello world from react!");
import React, { Component, lazy, Suspense } from "react";
// import { render } from "react-dom";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
// import About from "./src/components/AboutUs";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Error from "./src/components/Error";
import Shimmer from "./src/components/Shimmer";

// import Grocery from "./src/components/Grocery";
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

const Grocery = lazy(() => import("./src/components/Grocery"));

const About =lazy(() => import("./src/components/AboutUs"))

const Applayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Applayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <Suspense fallback={<Shimmer/>}><About /></Suspense>,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId", // : means dynamic routing/ dynamic api calls
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery", // : means dynamic routing/ dynamic api calls
        element: (
          <Suspense fallback={<Shimmer />}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
