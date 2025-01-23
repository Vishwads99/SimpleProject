/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-scroll"; //to get animated effect.
import { GiHamburgerMenu } from "react-icons/gi";
import { data } from "../restApi.json";
//import { useNavigate } from "react-router-dom";
import Menu from "./Menu";

const Navbar = () => {
  const [show, setShow] = useState(false);
  

  return (
    <nav>
      <div className="logo">FOOD</div>
      <div className={show ? "navLinks showmenu" : "navLinks"}>
        <div className="links">
          {data[0].navbarLinks.map((element) => {
            return (
              <Link
                to={element.link}
                key={element.id}
                spy={true}
                smooth={true}
                duration={500}
              >
                {element.title}
              </Link>
            );
          })}
        </div>
        <button className="menuBtn">
        <Link
            to="menu" 
            spy={true}
            smooth={true}
            duration={500}
            offset={-70}
          >
          OUR MENU
          </Link>
          </button>
      </div>
      <div className="hamburger" onClick={() => setShow(!show)}>
        <GiHamburgerMenu></GiHamburgerMenu>
      </div>
    </nav>
  );
};

export default Navbar;
