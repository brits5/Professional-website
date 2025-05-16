import React, { useState } from "react";
import "./Navbar.css";
import Logo from "../../assets/Logo.png"; // Asegúrate de tener esta imagen

const navbarlinks = [
    { id: 1, title: "Inicio", link: "/" },
    { id: 2, title: "Nosotros", link: "/" },
    { id: 3, title: "Contacto", link: "/" },
    { id: 4, title: "Soporte", link: "/" },
];

const navbarRedes = [
    { id: 1, title: "Instagram", link: "/", icon: 'bi bi-instagram' },
    { id: 2, title: "TikTok", link: "/", icon: 'bi bi-tiktok'},
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <img src={Logo} alt="Magic Quest" />
        </div>

        {/* Enlaces de navegación */}
        <div className="navbar-menu">
          {navbarlinks.map((link, index) => (
            <React.Fragment key={link.id}>
              <a href={link.link} className="navbar-link">
                {link.title}
              </a>
              {index < navbarlinks.length - 1 && (
                <span className="navbar-divider">|</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Iconos de redes sociales */}
        <div className="navbar-social">
          {navbarRedes.map((link, index) => (
            <React.Fragment key={link.id}>
              <a href={link.link} className="social-icon" title={link.title}>
                <i className={link.icon}></i>
              </a>
              {index < navbarRedes.length - 1 && (
                <span className="navbar-divider">•</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Botón menú móvil */}
        <button className="mobile-menu-button" onClick={toggleMobileMenu}>
          <i className={mobileMenuOpen ? "bi bi-x" : "bi bi-list"}></i>
        </button>
      </div>

      {/* Menú móvil */}
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-links">
            {navbarlinks.map((link) => (
              <a key={link.id} href={link.link} className="mobile-menu-link">
                {link.title}
              </a>
            ))}
            <div className="mobile-social">
              {navbarRedes.map((link) => (
                <a key={link.id} href={link.link} className="mobile-social-icon" title={link.title}>
                  <i className={link.icon}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;