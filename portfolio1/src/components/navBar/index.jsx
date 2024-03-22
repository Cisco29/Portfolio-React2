// Importer les modules nécessaires depuis React
import React, { useState } from "react";

// Importer les icônes de réact
import { FaBars, FaReact } from "react-icons/fa";
import { HiX } from "react-icons/hi";

// Importer le composant Link de react-router-dom pour la navigation
import { Link } from "react-router-dom";

// Importer le fichier de styles pour le composant NavBar
import "./styles.scss";

// Données pour les éléments de la barre de navigation
const data = [
  {
    label: "HOME",
    to: "/",
  },
  {
    label: "ABOUT ME",
    to: "/about",
  },
  {
    label: "SKILLS",
    to: "/skills",
  },
  {
    label: "RESUME",
    to: "/resume",
  },
  {
    label: "PORTFOLIO",
    to: "/portfolio",
  },
  {
    label: "CONTACT",
    to: "/contact",
  },
];

// Définition du composant NavBar
const NavBar = () => {
  // Déclaration d'un état pour gérer l'affichage de l'icône de menu
  const [toggleIcon, setToggleIcon] = useState(false);

  // Fonction pour basculer l'état de l'icône de menu
  const handleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };

  // Rendu du composant NavBar
  return (
    <div>
      {/* Barre de navigation */}
      <nav className="navbar">
        <div className="navbar__container">
          {/* Lien vers la page d'accueil avec l'icône React */}
          <Link to={"/"} className="navbar__container__menu__logo">
            <FaReact size={25} />
          </Link>
        </div>
        {/* Liste des éléments de la barre de navigation */}
        <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""}`}>
          {
            // Parcours des données pour générer les éléments de navigation
            data.map((item, key) => (
              <li key={key} className="navbar__container__menu__item">
                {/* Lien de navigation */}
                <Link
                  className="navbar__container__menu__item__links"
                  to={item.to}
                >
                  {item.label}
                </Link>
              </li>
            ))
          }
        </ul>
        {/* Icône de menu pour le mode mobile */}
        <div className="nav-icon" onClick={handleToggleIcon}>
          {toggleIcon ? <HiX size={25} /> : <FaBars size={25} />}
        </div>
      </nav>
    </div>
  );
};

// Exporter le composant NavBar
export default NavBar;
