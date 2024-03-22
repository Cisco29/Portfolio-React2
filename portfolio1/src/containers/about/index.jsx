// Import des modules React et des icônes
import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeaderContent from "../../components/PageHeaderContent"; // Import du composant PageHeaderContent
import { Animate } from "react-simple-animate"; // Import de la bibliothèque d'animations
import "./styles.scss"; // Import du fichier de styles CSS
import { DiApple, DiAndroid } from "react-icons/di"; // Import des icônes Di (DiApple, DiAndroid)
import { FaDev, FaDatabase } from "react-icons/fa"; // Import des icônes Fa (FaDev, FaDatabase)

// Définition des détails personnels
const personalDetails = [
  {
    label: " Name",
    value: " Francisco Castro",
  },
  {
    label: "Age",
    value: " 44",
  },
  {
    label: "adress",
    value: " Paris",
  },
  {
    label: "Email",
    value: " castro.francisco@live.fr",
  },
  {
    label: "Phone",
    value: "+33 6 10 08 22 10",
  },
];

// Résumé du travail
const jobSummary =
  "En reconversion professionnelle dans le développement web et mobile, après avoir suivi deux formations intensives, l'une d'une durée de 9 mois et l'autre de 3 mois. Passionné par le domaine, je suis désormais à la recherche d'un premier emploi qui me permettra d'acquérir et de développer mes compétences tout en contribuant aux projets innovants de votre entreprise.";

// Composant pour la section "About Me"
const About = () => {
  return (
    // Section "About Me"
    <section id="about" className="about">
      {/* En-tête de la section */}
      <PageHeaderContent
        headerText="About Me" // Texte de l'en-tête
        icon={<BsInfoCircleFill size={40} />} // Icône de l'en-tête
      />
      {/* Contenu principal de la section */}
      <div className="about__content">
        {/* Wrapper pour les informations personnelles et professionnelles */}
        <div className="about__content__personnalWrapper">
          {/* Section du développeur front-end */}
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(-900px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3>Front End Developper</h3> {/* Titre de la section */}
            <p>{jobSummary}</p> {/* Résumé du travail */}
          </Animate>

          {/* Section des informations personnelles */}
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(500px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            <h3 className="personnalInformationHeaderText">
              Personal Information
            </h3> {/* Titre de la section */}
            {/* Liste des informations personnelles */}
            <ul>
              {personalDetails.map((item, i) => (
                <li key={i}>
                  {/* Label de l'information */}
                  <span className="title">{item.label}</span>
                  {/* Valeur de l'information */}
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        {/* Wrapper pour les icônes des services */}
        <div className="about__content__servicesWrapper">
          {/* Animation pour les icônes des services */}
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{ transform: "translateX(600px)" }}
            end={{ transform: "translateX(0px)" }}
          >
            {/* Contenu des icônes des services */}
            <div className="about__content__servicesWrapper__innerContent">
              {/* Icône de développement */}
              <div>
                <FaDev size={25} color="var(--yellow-theme-main-color)" />
              </div>
              {/* Icône Android */}
              <div>
                <DiAndroid
                  size={25}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              {/* Icône de base de données */}
              <div>
                <FaDatabase
                  size={25}
                  color="var(--yellow-theme-main-color)"
                />
              </div>
              {/* Icône Apple */}
              <div>
                <DiApple size={25} color="var(--yellow-theme-main-color)" />
              </div>
            </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
