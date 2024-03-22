import './styles.scss'
import React from 'react'

// Composant PageHeaderContent pour afficher le texte et l'icône dans l'en-tête de la page
const PageHeaderContent = (props) => {
    // Déstructuration des props pour récupérer le texte de l'en-tête et l'icône
    const {headerText, icon} = props

    return (
        <div className="wrapper">
            <h2>{headerText}</h2> {/* Affichage du texte de l'en-tête */}
            <span>{icon}</span> {/* Affichage de l'icône */}
        </div>
    ) ;  
};

export default PageHeaderContent;
