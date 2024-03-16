import  {LOGO_URL} from "../utils/constants"   //  named import is done like this

const Header = () => {
    return (
      <div className="header">
        <div className="logo container">
          <img
            src={LOGO_URL}
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

  export default Header;