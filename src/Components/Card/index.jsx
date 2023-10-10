import React from "react";
import { Link } from "react-router-dom";

// Composant Card
function Card({ item }) {
  return (
    <div className="card">
      {/* Utilisation du composant Link pour créer un lien */}
      <Link to={`/logement/${item.id}`}>
        <div className="card_container">
          {/* Image de l'article */}
          <img src={item.cover} alt={item.title} />
          <div className="card_text">
            {/* Titre de l'article */}
            <p>{item.title}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Card;
