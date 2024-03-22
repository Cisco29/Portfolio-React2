import React, { useRef, useEffect } from "react"; // Importation de React et de hooks
import { useNavigate } from "react-router-dom"; // Importation de hook pour la navigation
import { Animate } from "react-simple-animate"; // Importation de l'animation
import "./styles.scss"; // Importation des styles spécifiques
import "../../App"; // Importation du fichier principal de l'application

const Home = () => {
  const navigate = useNavigate(); // Hook pour la navigation
  const containerRef = useRef(null); // Référence à l'élément DOM de la section
  const canvasRef = useRef(null); // Référence au canvas pour l'effet de traînée

  // Fonction pour naviguer vers la page de contact
  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  // Effet exécuté une seule fois après le premier rendu
  useEffect(() => {
    const canvas = canvasRef.current; // Récupération de l'élément canvas
    const ctx = canvas.getContext("2d"); // Récupération du contexte 2D du canvas

    // Votre logique de dessin sur le canvas
    let mouseMoved = false; // Variable pour suivre le mouvement de la souris

    // Position initiale de la souris
    const pointer = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight,
    };

    // Paramètres pour l'effet de traînée
    const params = {
      pointsNumber: 40,
      widthFactor: 10,
      mouseThreshold: 0.5,
      spring: 0.25,
      friction: 0.5,
    };

    // Tableau pour stocker les points de traînée
    const trail = new Array(params.pointsNumber);
    for (let i = 0; i < params.pointsNumber; i++) {
      trail[i] = {
        x: pointer.x,
        y: pointer.y,
        dx: 0,
        dy: 0,
      };
    }

    // Logique de mise à jour de la position de la souris
    const updateMousePosition = (eX, eY) => {
      pointer.x = eX;
      pointer.y = eY;
    };

    // Fonction pour initialiser le canvas
    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      window.requestAnimationFrame(update);
    };

    // Fonction pour mettre à jour le dessin sur le canvas
    const update = (t) => {
      if (!mouseMoved) {
        pointer.x =
          (0.5 +
            0.3 * Math.cos(0.002 * t) * Math.sin(0.005 * t)) *
          window.innerWidth;
        pointer.y =
          (0.5 +
            0.2 * Math.sin(0.005 * t) * Math.cos(0.01 * t)) *
          window.innerHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height); // Effacer le canvas
      trail.forEach((p, pIdx) => {
        const prev = pIdx === 0 ? pointer : trail[pIdx - 1];
        const spring = pIdx === 0 ? 0.4 * params.spring : params.spring;
        p.dx += (prev.x - p.x) * spring;
        p.dy += (prev.y - p.y) * spring;
        p.dx *= params.friction;
        p.dy *= params.friction;
        p.x += p.dx;
        p.y += p.dy;
      });

      const gradient = ctx.createLinearGradient(
        0,
        0,
        canvas.width,
        canvas.height
      );
      gradient.addColorStop(0, "rgba(160, 93, 134,1)");
      gradient.addColorStop(1, "rgba(57, 34, 115,1)");

      ctx.strokeStyle = gradient;
      ctx.lineCap = "round";
      ctx.beginPath();
      ctx.moveTo(trail[0].x, trail[0].y);

      for (let i = 1; i < trail.length - 1; i++) {
        const xc = 0.5 * (trail[i].x + trail[i + 1].x);
        const yc = 0.5 * (trail[i].y + trail[i + 1].y);
        ctx.quadraticCurveTo(trail[i].x, trail[i].y, xc, yc);
        ctx.lineWidth = params.widthFactor * (params.pointsNumber - i);
        ctx.stroke();
      }
      ctx.lineTo(trail[trail.length - 1].x, trail[trail.length - 1].y);
      ctx.stroke();
      window.requestAnimationFrame(update);
    };

    // Gestion des événements et nettoyage des ressources
    window.addEventListener("click", (e) => {
      mouseMoved = true;
      updateMousePosition(e.pageX, e.pageY);
    });
    window.addEventListener("mousemove", (e) => {
      mouseMoved = true;
      updateMousePosition(e.pageX, e.pageY);
    });
    window.addEventListener("touchmove", (e) => {
      mouseMoved = true;
      updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
    });
    window.addEventListener("resize", setupCanvas);

    // Initialisation du canvas
    setupCanvas();

    // Nettoyage des événements à la suppression du composant
    return () => {
      window.removeEventListener("click", (e) => {
        mouseMoved = true;
        updateMousePosition(e.pageX, e.pageY);
      });
      window.removeEventListener("mousemove", (e) => {
        mouseMoved = true;
        updateMousePosition(e.pageX, e.pageY);
      });
      window.removeEventListener("touchmove", (e) => {
        mouseMoved = true;
        updateMousePosition(e.targetTouches[0].pageX, e.targetTouches[0].pageY);
      });
      window.removeEventListener("resize", setupCanvas);
    };
  }, []);

  return (
    // Définition de la section avec l'ID "home" et la classe "home", avec une référence au conteneur
    <section id="home" className="home" ref={containerRef}>
       
      {/* Ajout du div avec la classe "glassy-overlay" pour l'effet de superposition */}
      <div className="glassy-overlay"></div>
      {/* Division contenant le texte d'accueil */}
      <div className="home__text-wrapper">
        <h1>
          Bonjour, je suis Francisco
          <br />
          Développeur full-stack Junior
        </h1>
      </div>
      {/* Animation pour le bouton "Hire Me" et le lien de téléchargement du CV */}
      <Animate
        play // Propriété pour démarrer l'animation
        duration={1.5} // Durée de l'animation en secondes
        delay={1} // Délai avant le démarrage de l'animation en secondes
        start={{ transform: "translateY(550px)" }} // Début de l'animation avec une translation en Y de 550px
        end={{ transform: "translateX(0px)" }} // Fin de l'animation avec une translation en X de 0px
      >
        {/* Division contenant le bouton "Hire Me" et le lien de téléchargement du CV */}
        <div className="home__contact-me">
          {/* Bouton "Hire Me" avec gestionnaire d'événement onClick */}
          <button onClick={handleNavigateToContactMePage} style={{ marginRight: "30px" }}>Hire Me</button>
          {/* Lien pour télécharger le CV */}
          <a href="../../../cv.pdf" download><button >Download Resume</button></a>
        </div>
      </Animate>
      {/* Ajout du canvas pour l'effet de traînée */}
      <canvas ref={canvasRef} className="canvas"></canvas>
    </section>
  );
};

export default Home;

