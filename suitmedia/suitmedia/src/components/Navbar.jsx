import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import suitmediaLogo from "../assets/images/suitmediaLogo.png";

function Navbar() {
  const [show, setShow] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      setIsScrolled(current > 50);
      if (current > lastScroll.current && current > 60) {
        setShow(false);
      } else {
        setShow(true);
      }
      lastScroll.current = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed-navbar${isScrolled ? " scrolled" : ""}${
        show ? "" : " hide"
      }`}
    >
      <img src={suitmediaLogo} alt="Suitmedia Logo" />
      <ul>
        <li>
          <NavLink to="/Work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/About">About</NavLink>
        </li>
        <li>
          <NavLink to="/Services">Services</NavLink>
        </li>
        <li>
          <NavLink to="/Ideas">Ideas</NavLink>
        </li>
        <li>
          <NavLink to="/Careers">Careers</NavLink>
        </li>
        <li>
          <NavLink to="/Contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
