import React from "react";
import { BsInfoCircleFill } from "react-icons/bs"; // Importation de l'icône d'information
import PageHeaderContent from "../../components/PageHeaderContent"; // Importation du composant d'en-tête de page
import ImageOne from "../../images/flovia.png"; // Importation des images des projets
import ImageTwo from "../../images/plume.png";
import ImageThree from "../../images/iddeos.png";
import ImageFour from "../../images/slide.png";
import ImageFive from "../../images/portfolio.png";
import ImageSix from "../../images/loginFormTransparent.png";
import ImageSeven from "../../images/akiraSliders.png";
import "./styles.scss"; // Importation des styles CSS
import { useState } from "react"; // Importation de useState pour gérer l'état local

// Données des projets du portefeuille
const portfolioData = [
  {
    id: 2,
    name: "Projet Flovia",
    image: ImageOne,
    link: "https://www.youtube.com/watch?v=Xf0VVZC0dDk&t=16s",
  },
  // Autres projets...
];

// Données des filtres
const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "PHP & React",
  },
  {
    filterId: 3,
    label: "Other",
  },
];

// Définition du composant Portfolio
const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1); // État local pour le filtre sélectionné
  const [hoveredValue, setHoveredValue] = useState(null); // État local pour l'élément survolé

  // Fonction pour gérer le changement de filtre
  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  // Fonction pour gérer le survol de la souris sur un élément
  function handleHover(index) {
    setHoveredValue(index);
  }

  // Filtrage des projets en fonction de la valeur du filtre sélectionné
  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  // Rendu de l'interface utilisateur
  return (
    <section id="portfolio" className="portfolio">
      {/* En-tête de la page */}
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />} // Icône d'information
      />
      <div className="portfolio__content">
        {/* Liste des filtres */}
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)} // Gestionnaire de clic pour les filtres
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        {/* Contenu des cartes de projet */}
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)} // Gestionnaire pour le survol de la souris
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                {/* Lien vers le projet */}
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {/* Image du projet */}
                  <img alt="portfolio" src={item.image} />
                </a>
              </div>
              {/* Overlay pour afficher des détails au survol */}
              <div className="overlay">
                {/* Affichage des détails uniquement si survolé */}
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p> {/* Nom du projet */}
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button>Visit</button> {/* Bouton pour visiter le projet */}
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio; // Exportation du composant Portfolio
