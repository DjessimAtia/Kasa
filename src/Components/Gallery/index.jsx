import React from "react";
import vectorLeft from "../../Logo/vectorLeft.svg";
import vectorRight from "../../Logo/vectorRight.svg";
import "./gallery.scss";

// Composant Gallery qui affiche un carrousel
function Gallery({ images, currentPhotoIndex, handleArrowClick }) {
  return (
    <div className="gallery">
      {/* Affichage de la flèche de gauche (si plus d'une image) */}
      {images.length > 1 && (
        <div className="svg-left" onClick={() => handleArrowClick("left")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
          >
            <image xlinkHref={vectorLeft} />{" "}
          </svg>
        </div>
      )}
      {/* Affichage de l'image actuelle */}
      <img src={images[currentPhotoIndex]} alt="" />
      {/* Affichage de la flèche de droite (si plus d'une image) */}
      {images.length > 1 && (
        <div className="svg-right" onClick={() => handleArrowClick("right")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="80"
            viewBox="0 0 48 80"
            fill="none"
          >
            <image xlinkHref={vectorRight} />{" "}
          </svg>
        </div>
      )}
      {/* Affichage du compteur d'images (si plus d'une image) */}
      {images.length > 1 && (
        <p className="image-counter">
          {currentPhotoIndex + 1}/{images.length}
        </p>
      )}
    </div>
  );
}

export default Gallery;
