import React, { Component } from "react";

import facebook from '../assets/img/facebook.png';
import instagram from '../assets/img/instagram.png';
import twitter from '../assets/img/twitter.png';
import youtube from '../assets/img/youtube.png';

class Footer extends Component {
  render() {
    return (
      <footer className="footer container">
        <div className="footer-links">
          <div className="footer-links-list">
            <a href="/us">Nosotros</a>
            <a href="/contact">Contáctanos</a>
            <a href="/pages">Páginas</a>
          </div>
          <div className="footer-links-list">
            <a href="/register">Crear Cuenta</a>
            <a href="/login">Iniciar Sesión</a>
          </div>
          <div className="footer-links-social">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
          </div>
        </div>
        <hr />
        <div className="footer-copyrights">
          <p>Todos los derechos reservados</p>
        </div>
      </footer>
    );
  }
}

export default Footer;