import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <section>
        <form className="login" action="/suscripcion/" >
          <div className="login-email">
            <label htmlFor="email">Correo electrónico</label>
            <input className="login-input" type="datetime" placeholder="example@gmail.com" id="email" />
          </div>
          <div className="login-email">
            <label htmlFor="email">Contraseña</label>
            <input className="login-input" type="password" placeholder="password" id="password" />
          </div>
          <div className="login-error">
            <a href="#"><p>¿Olvidaste tu contraseña?</p></a>
          </div>
        </form>
      </section>
    );
  }
}

export default Login;