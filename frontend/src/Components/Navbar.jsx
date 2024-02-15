import { useState } from "react";
import "./Navbar.css";
// import downloadIcon from './../assets/Borcell.png';

function Navbar() {
  const [active, setActive] = useState(false);

  const navToggle = () => {
    setActive(!active);
  };

  return (
    <nav className={`nav ${active ? "nav__active" : ""}`}>
      <div className="nav__brand">
        <div className="na">
          CheckCraft
        </div>
        {/* <img src={downloadIcon} alt="Download Icon" className="download-icon" /> */}
      </div>
      <div onClick={navToggle} className={`nav__toggler ${active ? "toggle" : ""}`}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <ul className={`nav__menu ${active ? "show" : ""}`}>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            Add Events
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            All Events
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            MyBooking
          </a>
        </li>
        <li className="nav__item">
          <a href="#" className="nav__link">
            My Payments
          </a>
        </li>
        <li className="log">
          <a href="/" className="nav__link">
            <button type="button">Logout</button>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
