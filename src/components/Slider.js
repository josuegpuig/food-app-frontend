import React, { Component } from "react";

import restaurant from '../assets/img/test-restaurant.jpg';

class Slider extends Component {
  render() {
    const restaurant_types = ['Saludables', 'Comida rápida']
    return (
      <div>
        {restaurant_types.map((value, index) => {
          return (
            <div key={index}>
              <div className="restaurant-list-title">
                <h4>{value}</h4>
                <h5> <a href={"/restaurants/" + value}>Ver todos</a></h5>
              </div>
              <div className="restaurant-list">
                {[1, 2, 3, 4].map((value_item, index_item) => {
                  return (
                    <div className="restaurant-card" key={index_item}>
                      <img src={restaurant} alt="" />
                      <div className="restaurant-info">
                        <h3>Restaurante {value_item}</h3>
                        <p>
                          <span>
                            <i className="fas fa-star star-review"></i>
                            <i className="fas fa-star star-review"></i>
                            <i className="fas fa-star star-review"></i>
                            <i className="fas fa-star star-review"></i>
                            <i className="fas fa-star star-review"></i>
                          </span>
                          <span> | 43 reseñas</span>
                        </p>
                        <p>$$$$</p>
                        <p></p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    );
  }
}

export default Slider;