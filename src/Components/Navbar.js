import React from "react";
import './Navbar.css';
import Logo from './logo.png';
import {Link} from 'react-router-dom';


const Navbar = () => {
    return (
      <div>
        <header>
          <img className=" logos " src={Logo} alt="logos" />
          <nav className="navbars">
            <ul className="nav_links">
              <li>
                <Link to="/">
                  <p
                   
                    className="f3 link dim black pa3 pointer"
                  >
                    Home
                  </p>
                </Link>
              </li>

              <li>
                <Link to="/about">
                  <p
                   
                    className="f3 link dim black pa3 pointer"
                  >
                    About
                  </p>
                </Link>
              </li>
              <li>
                <Link to='/contact'>
                  <button
                    className="cta butcon">
                    Contact
                  </button>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    );

}

export default Navbar;