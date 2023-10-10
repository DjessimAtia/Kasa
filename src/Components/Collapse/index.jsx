import logoSvgTop from "../../Logo/arrowTop.svg";
import React, { useState } from "react";
import "../Collapse/collapse.scss";

// Composant Collapse qui affiche un titre cliquable pour montrer/cacher du texte
function Collapse({ title, text }) {
  // État pour contrôler l'affichage du texte et la rotation de l'icône
  const [showText, setShowText] = useState(false);
  const [isRotated, setIsRotated] = useState(false);

  // Fonction pour basculer l'affichage du texte et la rotation de l'icône
  const toggleText = () => {
    setShowText(!showText);
    setIsRotated(!isRotated);
  };

  return (
    <div>
      <h3 className="menu menu_box">
        {title}
        <div onClick={toggleText}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            id="monSVG"
            className={`rotate ${isRotated ? "rotate-180" : ""}`}
          >
            <image xlinkHref={logoSvgTop} />
          </svg>
        </div>
      </h3>
      <div
        className={`menu_animation ${
          showText ? "menu_visible" : "menu_hidden"
        }`}
      >
        {text}
      </div>
    </div>
  );
}
export default Collapse;
