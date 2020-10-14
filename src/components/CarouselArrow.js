import React, { Component } from "react";
import Arrow from "../img/arrow.png";
export default class CarouselArrow extends Component {
  render() {
    const { direction, onClick } = this.props;
    return (
      <div className="carousel__arrow">
        <img
          src={Arrow}
          className={
            direction == "left"
              ? "carousel__arrow carousel__arrow--left"
              : "carousel__arrow carousel__arrow--right"
          }
          onClick={onClick}
        />
      </div>
    );
  }
}
