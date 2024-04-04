import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants"; //  named import is done like this

const Header = () => {
  const [btnName, setbtnName] = useState("Login");

  // if no dependency array => useffect called on every render
  // if dependency array is empty => useEffect called on initial render
  // if dependency array is [btnName] => called everyTime btnName is updated
  
  useEffect(()=>{
console.log("useEffect called");
  },[])
  return (
    <div className="header">
      <div className="logo container">
        <img src={LOGO_URL} className="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
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
