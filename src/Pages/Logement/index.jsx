import "../../sass/app.scss";
import "./logement.scss";
import React, { useState, useEffect } from "react";
import data from "../../data/data.json";
import { useParams, useNavigate } from "react-router-dom";
import Collapse from "../../Components/Collapse/index";
import Rating from "../../Components/Rating/index";
import Gallery from "../../Components/Gallery/index";

function Logement() {
  const { logementId } = useParams();
  const [currentLogement, setCurrentLogement] = useState(null);
  
  const navigate = useNavigate();

  useEffect(() => {
    const logement = data.find((logement) => logement.id === logementId);

    if (logement) {
      setCurrentLogement(logement);
    } else {
      navigate("/error");
    }
  }, [logementId, navigate]);

  if (!currentLogement) {
    return null;
  }

  return (
    <div className="container">
      <Gallery
        images={currentLogement["pictures"]}
       // Passer setCurrentPhotoIndex en tant que prop
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