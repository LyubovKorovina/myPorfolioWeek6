import React from "react";
import { NavLink } from 'react-router-dom';

function Header()
{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <NavLink to={"/home"} className="navbar-brand">ANORGEOUS</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <NavLink to={"/home"} className="nav-link" aria-current="page"><i className="fa-solid fa-house fa-lg"></i>Home<span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to={"/about"} className="nav-link" aria-current="page"><i className="fa-solid fa-circle-info fa-lg"></i>About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={"/apps"} className="nav-link" aria-current="page"><i className="fa-solid fa-mobile-button fa-lg"></i>Apps</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/services"} className="nav-link" aria-current="page"><i className="fa-solid fa-signs-post fa-lg"></i>Services</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink to={"/contact"} className="nav-link" aria-current="page"><i className="fa-solid fa-paper-plane fa-lg"></i>Contact Us</NavLink>
                  </li>
              </ul>
            </div>
          </nav>

        </div>
    );
}

export default Header;