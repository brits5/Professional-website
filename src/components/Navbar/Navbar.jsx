import React from "react";
import Logo from "../../assets/Logo.png";

const navbarlinks = [
    { id: 1, title: "Inicio", link: "/" },
    { id: 2, title: "Sobre mi", link: "/" },
    { id: 3, title: "Contacto", link: "/" },
    { id: 4, title: "Soporte", link: "/" },
];

const navbarRedes = [
    { id: 1, title: "GitHub", link: "/", icon: 'bi bi-github' },
    { id: 2, title: "LinkedIn", link: "/", icon: 'bi bi-linkedin'},
    { id: 3, title: "Instagram", link: "/", icon: 'bi bi-instagram'},
];

// Estilos en línea que no dependen de Tailwind
const styles = {
  navbar: {
    backgroundColor: '#1F2937',
    color: 'white',
    padding: '0.75rem 1rem'
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  logo: {
    width: '100px'
  },
  navLinks: {
    display: 'flex'
  },
  navLink: {
    color: 'white',
    padding: '0 1rem',
    textDecoration: 'none',
    fontSize: '1rem',
    transition: 'color 0.2s, transform 0.2s'
  },
  navLinkHover: {
    color: '#D1D5DB',
    transform: 'scale(1.1)'
  },
  divider: {
    color: '#6B7280',
    margin: '0 0.5rem'
  },
  socialIcons: {
    display: 'flex'
  },
  socialIcon: {
    color: 'white',
    padding: '0 0.75rem',
    fontSize: '1.25rem',
    transition: 'color 0.2s'
  },
  socialIconHover: {
    color: '#D1D5DB'
  }
};

const Navbar = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        {/* Logo */}
        <div>
          <img src={Logo} alt="Logo del sitio" style={styles.logo} />
        </div>

        {/* Enlaces de navegación */}
        <div>
          <div style={styles.navLinks}>
            {navbarlinks.map((link, index) => (
              <React.Fragment key={link.id}>
                <a 
                  href={link.link} 
                  style={styles.navLink}
                  onMouseOver={(e) => {
                    e.target.style.color = '#D1D5DB';
                    e.target.style.transform = 'scale(1.1)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = 'white';
                    e.target.style.transform = 'scale(1)';
                  }}
                >
                  {link.title}
                </a>
                {index < navbarlinks.length - 1 && (
                  <span style={styles.divider}>|</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Iconos de redes sociales */}
        <div>
          <div style={styles.socialIcons}>
            {navbarRedes.map((link, index) => (
              <React.Fragment key={link.id}>
                <a 
                  href={link.link} 
                  style={styles.socialIcon}
                  title={link.title}
                  onMouseOver={(e) => e.target.style.color = '#D1D5DB'}
                  onMouseOut={(e) => e.target.style.color = 'white'}
                >
                  <i className={link.icon}></i>
                </a>
                {index < navbarRedes.length - 1 && (
                  <span style={styles.divider}>•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;