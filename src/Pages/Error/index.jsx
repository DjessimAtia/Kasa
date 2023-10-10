import React from "react";
import { Link } from "react-router-dom";
import "../Error/error.scss";
import "../../sass/app.scss";

function Error() {
  return (
    <div className="container error">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="Link">
        Retourner a la page d'acceuil
      </Link>
    </div>
  );
}

export default Error;
