import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import "../../App"



const Home = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Votre logique de dessin sur le canvas
    let mouseMoved = false;

    const pointer = {
      x: 0.5 * window.innerWidth,
      y: 0.5 * window.innerHeight,
    };

    const params = {
      pointsNumber: 40,
      widthFactor: 10,
      mouseThreshold: 0.5,
      spring: 0.25,
      friction: 0.5,
    };

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

    const setupCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      window.requestAnimationFrame(update);
    };

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

      ctx.clearRect(0, 0, canvas.width, canvas.height);
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
    <section id="home" className="home" ref={containerRef}>
       
      {/* Ajout du div avec la classe "glassy-overlay" */}
      <div className="glassy-overlay"></div>
      <div className="home__text-wrapper">
        <h1>
          Bonjour, je suis Francisco
          <br />
          Développeur full-stack Junior
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{ transform: "translateY(550px)" }}
        end={{ transform: "translateX(0px)" }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage} style={{ marginRight: "30px" }}>Hire Me</button>
          <a href="../../../cv.pdf" download><button >Download Resume</button></a>
        </div>
      </Animate>
      {/* Ajout du canvas */}
      <canvas ref={canvasRef} className="canvas"></canvas>
    </section>
  );
};

export default Home;
