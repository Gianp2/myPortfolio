import { MouseEvent, useState } from 'react';
import { Button } from '../Button/Button'; 
import arrow from '../../assets/right-arrow.svg';
import './style.css';

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  // Alterna estado del menú hamburguesa
  const toggleMenu = () => setOpen(prev => !prev);

  // Desplaza suavemente al hacer click en enlaces
  const handleScroll = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false); // Cierra menú
  };

  return (
    <>
      {/* Overlay de fondo */}
      <div
        className={`nav-overlay ${open ? 'active' : ''}`}
        onClick={() => setOpen(false)}
      ></div>

      <header className="container layout" role="banner">
        {/* Nombre */}
        <span className="my-name">Portfolio Gianluca</span>

        {/* Botón hamburguesa */}
        <button
          onClick={toggleMenu}
          className={`hamburger-menu ${open ? 'open' : ''}`}
          aria-expanded={open}
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          type="button"
        >
          <span />
        </button>

        {/* Menú lateral */}
        <nav className={open ? 'open' : ''}>
          <ul>
            <li>
              <a href="#about-me" onClick={(e) => handleScroll(e, 'about-me')}>
                Sobre mí
              </a>
            </li>
            <li>
              <a href="#my-work" onClick={(e) => handleScroll(e, 'my-work')}>
                Proyectos
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>
                Contacto
              </a>
            </li>
            <li>
              <Button
                as="a"
                href="https://drive.google.com/file/d/1fuHRh6BwtGcjSmwTRluIas7WagPN4sSi/view?usp=sharing"
                className="cv-cat"
                onClick={() => setOpen(false)}
              >
                Curriculum <img src={arrow} alt="" aria-hidden="true" />
              </Button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};
