import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "../../sass/app.scss";
import "../Header/header.scss";
import logo from "../../Logo/LOGO.JPG";

// Composant Header qui affiche la barre de navigation
function Header() {
  // État pour suivre le lien actif
  const [activeLink, setActiveLink] = useState(null);

  // Utilisation de la fonction useLocation pour obtenir l'URL actuelle
  const location = useLocation();

  // Utilisation de useEffect pour mettre à jour le lien actif en fonction de l'URL
  useEffect(() => {
    if (location.pathname === "/") {
      setActiveLink("accueil");
    } else if (location.pathname === "/propos") {
      setActiveLink("propos");
    } else {
      setActiveLink(null);
    }
  }, [location.pathname]); // Déclenché à chaque changement de l'URL

  return (
    <header>
      <nav className="container header">
       
          <img src={logo}></img>
        
        <div className="header_link">
          {/* Liens de navigation */}
          <Link
            to="/"
            className={`Link ${activeLink === "accueil" ? "active" : ""}`}
          >
            Accueil
          </Link>
          <Link
            to="/propos"
            className={`Link ${activeLink === "propos" ? "active" : ""}`}
          >
            A Propos
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
