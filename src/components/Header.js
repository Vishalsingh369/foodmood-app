import { useEffect, useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants"; //  named import is done like this
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import img from "../utils/foodmood-high-resolution-logo-transparent.png";

const Header = () => {
  const { loggedInUser } = useContext(UserContext);
  const [btnName, setbtnName] = useState("Login");

  // if no dependency array => useffect called on every render
  // if dependency array is empty => useEffect called on initial render
  // if dependency array is [btnName] => called everyTime btnName is updated

  // Subscribing to the store using a selector

  const cartItems = useSelector((store) => store.cart.items.length);

  useEffect(() => {
    // console.log("useEffect called");
  }, []);
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-gray-400 shadow-lg sm:bg-green-50 lg:bg-yellow-50">
      <div className="logo container">

     <Link to="/"> <img src={img} className="w-40 m-6 p-4" /></Link>


        {/* <img src={LOGO_URL} className="w-56" /> */}


      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-8">
          <li className="px-4 text-nowrap font-medium text-2xl">
            Online Status : {onlinestatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 font-medium text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 text-center text-nowrap font-medium text-2xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-medium text-center text-nowrap text-2xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-medium text-2xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-2xl text-nowrap">
            <Link to="/cart">Cart ({cartItems} Items)</Link>
          </li>
          <button
            className="mb-16 font-bold text-2xl "
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-extrabold text-nowrap text-2xl">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
