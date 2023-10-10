import React from "react";
import "../Banner/banner.scss";

// BannerPages props imagePath, className et text
const BannerPages = ({ imagePath, className, text }) => {
  return (
    // Création d'un conteneur div pour la bannière avec des classes CSS
    <div className={`banner `}>
      <div>
        {/* Affichage de l'image */}
        <img
          className="banner_image"
          src={imagePath} // Chemin de l'image fourni par la prop imagePath
          alt={text || "bannierePhoto"} // Texte alternatif de l'image (si text est vide)
        />
        {/* Affichage du texte  */}
        {text && <div className="banner_text">{text}</div>}
      </div>
    </div>
  );
};

export default BannerPages;
