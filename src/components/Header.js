import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants"; //  named import is done like this
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  // if no dependency array => useffect called on every render
  // if dependency array is empty => useEffect called on initial render
  // if dependency array is [btnName] => called everyTime btnName is updated

  useEffect(() => {
    // console.log("useEffect called");
  }, []);
  const onlinestatus = useOnlineStatus();
  return (
    <div className="flex justify-between bg-gray-400 shadow-lg sm:bg-green-50 lg:bg-yellow-50">
      <div className="logo container">
        <img src={LOGO_URL} className="w-56" />
      </div>
      <div className="flex items-center">
        <ul className="flex p-8 m-8">
          <li className="px-4 font-medium text-2xl">
            Online Status : {onlinestatus ? "✅" : "🔴"}
          </li>
          <li className="px-4 font-medium text-2xl">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 font-medium text-2xl">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4 font-medium text-2xl">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4 font-medium text-2xl">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-medium text-2xl">Cart</li>
          <button
            className="px-4 font-extrabold text-2xl items-center"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
