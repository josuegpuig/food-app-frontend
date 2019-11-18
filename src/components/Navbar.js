import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from '../assets/img/logo-test.png';

class NavBar extends Component {
    render() {
      return (
        <nav className="navbar container">
            <div className="nabvar-section-logo">
                <Link to="/">
                    <img src={logo} height="60" alt="Logo Food App" />
                </Link>
                <span>/</span>
                <span>CDMX</span>
            </div>
            <div className="nabvar-section-navigation">
                <Link className="show-md-up" to="/register">Registrarse</Link>
                <Link className="login-link" to="/login">Iniciar Sesión</Link>
            </div>
        </nav>
      );
    }
  }
   
  export default NavBar;