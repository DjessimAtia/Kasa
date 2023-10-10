import React from "react";
import './rating.scss'

// Composant Rating qui affiche l'icône de notation (stars) remplie ou non remplie
function Rating({ filled }) {
  // Détermine la classe CSS à appliquer en fonction de la valeur de la prop "filled"
  const ratingClass = filled ? "rating-svg filled" : "rating-svg";

  return (
    <svg xmlns="http://www.w3.org/2000/svg" className={ratingClass}>
      <path d="M12 2l2.4 7.1h7.6l-6 4.7 2.3 7.3-6-4.8-6 4.8 2.3-7.3-6-4.7h7.6z" />
    </svg>
  );
}

export default Rating;
