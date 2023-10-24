
import vectorLeft from "../../Logo/vectorLeft.svg";
import vectorRight from "../../Logo/vectorRight.svg";
import "./gallery.scss";
import React, { useState,  } from "react";
function Gallery({ images }) {


  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0); // Initialisé à 0
  const onLeftArrowClick = () => {
    const newIndex =
      currentPhotoIndex === 0 ? images.length - 1 : currentPhotoIndex - 1;
    setCurrentPhotoIndex(newIndex);
  };

  const onRightArrowClick = () => {
    const newIndex =
      currentPhotoIndex === images.length - 1 ? 0 : currentPhotoIndex + 1;
    setCurrentPhotoIndex(newIndex);
  };

  return (
    <div className="gallery">
      {images.length > 1 && (
        <div className="svg-left" onClick={onLeftArrowClick}>
          <img
            src={vectorLeft}
            alt="Flèche gauche"
          />
        </div>
      )}
      <img src={images[currentPhotoIndex]} alt="" />
      {images.length > 1 && (
        <div className="svg-right" onClick={onRightArrowClick}>
          <img
            src={vectorRight}
            alt="Flèche droite"
          />
        </div>
      )}
      {images.length > 1 && (
        <p className="image-counter">
          {currentPhotoIndex + 1}/{images.length}
        </p>
      )}
    </div>
  );
}

export default Gallery;