import "../../sass/app.scss";
import "./logement.scss";
import React, { useState, useEffect } from "react";
import data from "../../data/data.json";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../../Components/Collapse/index";
import Rating from "../../Components/Rating/index";
import Gallery from "../../Components/Gallery/index";

// Composant Logement qui affiche les détails d'un logement
function Logement() {
  // Extraction de l'ID du logement à partir de l'URL
  const { logementId } = useParams();

  // État pour stocker les détails du logement actuel
  const [currentLogement, setCurrentLogement] = useState(null);

  // État pour suivre l'index de la photo actuellement affichée
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // Utilisation de la fonction useNavigate pour gérer la navigation
  const navigate = useNavigate();

  useEffect(() => {
    // Recherche du logement correspondant à l'ID dans le tableau de données "data"
    const logement = data.find(
      (logement) => logement.id === logementId
    );

    if (logement) {
      setCurrentLogement(logement); // Met à jour les détails du logement actuel
    } else {
      // Redirige l'utilisateur vers la page d'erreur s'il n'y a pas de logement correspondant
      navigate("/error");
    }
  }, [logementId, navigate]);

  // Fonction pour gérer le clic sur les flèches gauche et droite pour naviguer entre les photos du logement
  const handleArrowClick = (direction) => {
    let newIndex;
    if (direction === "left") {
      newIndex =
        currentPhotoIndex === 0
          ? currentLogement["pictures"].length - 1
          : currentPhotoIndex - 1;
    } else if (direction === "right") {
      newIndex =
        currentPhotoIndex === currentLogement["pictures"].length - 1
          ? 0
          : currentPhotoIndex + 1;
    }
    setCurrentPhotoIndex(newIndex); // Met à jour l'index de la photo actuellement affichée
  };

  // Si aucun logement correspondant n'a été trouvé, ne rien afficher
  if (!currentLogement) {
    return null;
  }

  return (
    <div className="container">
      <Gallery
        images={currentLogement["pictures"]}
        currentPhotoIndex={currentPhotoIndex}
        handleArrowClick={handleArrowClick}
      />
      <div className="logement_container">
        <div className="texte">
          <div className="logement_texte">
            <h1>{currentLogement.title}</h1>
            <div className="hote-section">
              <div className="hote-details">
                <h3>{currentLogement.host.name.split(" ")[0]}</h3>{" "}
                {/* Affiche le prénom */}
                <h3 className="margin">
                  {currentLogement.host.name.split(" ")[1]}
                </h3>{" "}
                {/* Affiche le nom */}
              </div>
              <div className="hote-image">
                <img
                  src={currentLogement.host.picture}
                  alt="Hôte"
                  className="svg-rond"
                />
              </div>
            </div>
          </div>
          <h2>{currentLogement.location}</h2>
        </div>
        <div className="logement_place">
          <div className="logement_mini">
            {currentLogement["tags"].map((motCle, index) => (
              <p className="logement_minibox" key={index}>
                {motCle}
              </p>
            ))}
          </div>
          <div className="note">
            {Array.from({ length: 5 }).map((_, index) => (
              <Rating key={index} filled={index < currentLogement.rating} />
            ))}
          </div>
        </div>

        <div className="hidd">
          <div className="rating">
            {Array.from({ length: 5 }).map((_, index) => (
              <Rating key={index} filled={index < currentLogement.rating} />
            ))}
          </div>
          <div className="hote_section">
            <div className="hote-details">
              <h3>{currentLogement.host.name.split(" ")[0]}</h3>{" "}
              {/* Affiche le prénom */}
              <h3 className="margin">
                {currentLogement.host.name.split(" ")[1]}
              </h3>{" "}
              {/* Affiche le nom */}
            </div>
            <div className="hote-image">
              <img
                src={currentLogement.host.picture}
                alt="Hôte"
                className="svg-rond"
              />
            </div>
          </div>
        </div>

        <div className="collapse">
          <div className="menu menu_item">
            <Collapse title="Description" text={currentLogement.description} />
          </div>
          <div className="menu menu_item ">
            <Collapse
              title="Equipements"
              text={currentLogement.equipments.map((équipement) => (
                <div key={équipement}>{équipement}</div>
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logement;
