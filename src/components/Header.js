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
    <div className="header">
      <div className="logo container">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status : {onlinestatus ? "✅" : "🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <button
            className="login"
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
