import React from "react";
import { NavLink } from "react-router-dom";
import "../../sass/app.scss";
import "../Header/header.scss";
import logo from "../../Logo/LOGO.JPG";

function Header (){


  return(
    <header>
      <nav className="container header">
    <img src={logo} />
    <div className="header_link">
    <NavLink to='/' className={(link) => (link.isActive ? 'active Link' : '')}> Accueil</NavLink>
    <NavLink to='propos' className={(link) => (link.isActive ? 'active Link' : '')}> Propos</NavLink>


    </div>
      </nav>
    </header>
  )
}
export default Header;