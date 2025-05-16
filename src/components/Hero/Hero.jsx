import React from "react";
import "./Hero.css"; // Importaremos un archivo CSS separado
import Fondo from "../../assets/Fondo.png"; // Asegúrate de tener esta imagen
import Personaje from "../../assets/Personaje.png"; // Importar la imagen

const Hero = () => {
  return (
    <div className="hero-container">
      {/* Fondo */}
      <div className="hero-background">
        <img src={Fondo} alt="Fondo mágico" className="background-image" />
      </div>

      <div className="hero-content">
        {/* Lado izquierdo - Texto */}
        <div className="hero-text">
          <h1 className="hero-title">Portafolio<br />profesional</h1>
          
          <h2>Sobre mi</h2>
          
          <p className="hero-description">
            Estudiante de Ingeniería en Software con enfoque en desarrollo web y arquitectura de sistemas. Me motiva resolver problemas reales con soluciones funcionales y creativas. Creo que la tecnología es una herramienta para mejorar vidas, y estoy en constante aprendizaje para aportar con impacto.
          </p>
          
          <div className="hero-buttons">
            <button className="button primary-button">
              <span>Jugar ahora</span>
              <i className="bi bi-controller"></i>
            </button>
            
            <button className="button secondary-button">
              <span>Ver GamePlay</span>
              <i className="bi bi-youtube"></i>
            </button>
          </div>
        </div>
        
        {/* Lado derecho - Imagen */}
        <div className="hero-image-container">
          {/* Reemplaza con tu imagen de personaje */}
          <div className="character-wrapper">
            <img 
              src={Personaje} // Usar la variable importada
              alt="Hechicera de Magic Quest" 
              className="character-image"
            />
            
            {/* Efectos mágicos */}
            <div className="magic-effect effect-1"></div>
            <div className="magic-effect effect-2"></div>
            <div className="magic-effect effect-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;