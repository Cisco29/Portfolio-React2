// Import des modules React et des icônes
import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importer les icônes de FontAwesome
import PageHeaderContent from "../../components/PageHeaderContent"; // Import du composant PageHeaderContent
import { Animate } from "react-simple-animate"; // Import de la bibliothèque d'animations
import "./styles.scss"; // Import du fichier de styles CSS

// Définition du composant Contact
const Contact = () => {
  // Déclaration de l'état initial du formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: ""
  });

  // Fonction de gestion du changement des valeurs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Fonction de soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, description } = formData;
    const mailtoLink = `mailto:support@example.com?subject=Contact%20Form&body=Name:%20${name}%0D%0AEmail:%20${email}%0D%0ADescription:%20${description}`;
    window.location.href = mailtoLink;
  };

  // Retour du JSX
  return (
    // Section "Contact"
    <section id="contact" className="contact">
      {/* En-tête de la section */}
      <PageHeaderContent
        headerText="My Contact" // Texte de l'en-tête
        icon={<BsInfoCircleFill size={40} />} // Icône de l'en-tête
      />
      {/* Contenu principal de la section */}
      <div className="contact__content">
        {/* Animation pour le texte d'en-tête */}
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(-200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <h3 className="contact__content__header-text">Let's Talk</h3> {/* Texte d'en-tête */}
        </Animate>
        {/* Animation pour le formulaire de contact */}
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform: "translateX(200px)",
          }}
          end={{
            transform: "translateX(0px)",
          }}
        >
          <div className="contact__content__form">
            {/* Formulaire de contact */}
            <form onSubmit={handleSubmit}>
              {/* Wrapper pour les contrôles du formulaire */}
              <div className="contact__content__form__controlswrapper">
                <div>
                  {/* Champ de saisie du nom */}
                  <input
                    required
                    name="name"
                    className="inputName"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  {/* Étiquette du champ de saisie du nom */}
                  <label htmlFor="name" className="nameLabel">
                    Name
                  </label>
                </div>
                <div>
                  {/* Champ de saisie de l'e-mail */}
                  <input
                    required
                    name="email"
                    className="inputEmail"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {/* Étiquette du champ de saisie de l'e-mail */}
                  <label htmlFor="email" className="emailLabel">
                    Email
                  </label>
                </div>
                <div>
                  {/* Champ de saisie de la description */}
                  <textarea
                    required
                    name="description"
                    className="inputDescription"
                    type={"text"}
                    rows="5"
                  />
                  {/* Étiquette du champ de saisie de la description */}
                  <label htmlFor="description" className="descriptionLabel">
                    Description
                  </label>
                  {/* Div pour les icônes de médias sociaux */}
                  <div className="socialLinks">
                    {/* Lien vers GitHub avec icône */}
                    <a href="https://github.com/Cisco29" className="SocialIcon">
                      <FaGithub className="yellow" size={20} />
                    </a>
                    {/* Lien vers LinkedIn avec icône */}
                    <a href="https://www.linkedin.com/in/francisco-castro-47a8a1260/" className="socialIcon">
                      <FaLinkedin className="yellow" size={20} />
                    </a>
                  </div>
                </div>
              </div>
              {/* Bouton de soumission du formulaire */}
              <button type="submit">Submit</button>
            </form>
          </div>
        </Animate>
      </div>
    </section>
  );
};

export default Contact; // Export du composant Contact
