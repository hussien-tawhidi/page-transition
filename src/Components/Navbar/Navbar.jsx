import { Link } from "react-router-dom";
import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <h1>avenus</h1>
      </div>
      <div className="menu">
        <Link to={"/"} className="menu-item">Home</Link>
        <Link to={"/about"} className="menu-item">About</Link>
        <Link to={"/products"} className="menu-item">Products</Link>
        <Link to={"/contacts"} className="menu-item">Contacts</Link>
      </div>
    </div>
  );
};

export default Navbar;
