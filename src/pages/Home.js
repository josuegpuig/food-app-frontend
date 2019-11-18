import React, { Component } from "react";
import Slider from '../components/Slider';

class Home extends Component {
    render() {
        const testButton = () => {
            alert('HOLA');
        }
      return (
        <section>
            <section>
                <div className="search-section container">
                    <p className="search-title">Encuentra tu restaurante ideal</p>
                    <div className="search-list-inputs">
                        <div className="search-box">
                            <i className="fas fa-search search-icon"></i>
                            <i className="fas fa-utensils search-icon-restaurant"></i>
                            <input className="search-input" type="text" placeholder="Nombre" />
                        </div>
                        <div className="search-type">
                            <span className="search-anchor">Tipo <i className="fas fa-angle-down search-down-icon"></i></span>
                            <select className="search-select" name="searchType" id="searchType">
                                <option value="1">Prueba</option>
                            </select>
                        </div>
                        <div className="search-price">
                            <span className="search-anchor">Precio <i className="fas fa-angle-down search-down-icon"></i></span>
                            <select className="search-select" name="searchType" id="searchType">
                                <option value="1">Prueba</option>
                            </select>
                        </div>
                        <button className="search-button" onClick={testButton}><span>Buscar</span></button>
                    </div>
                </div>
            </section>
            <section className="section-padding">
                <div className="container">
                    <Slider />
                </div>
            </section>
        </section>
      );
    }
  }
   
  export default Home;