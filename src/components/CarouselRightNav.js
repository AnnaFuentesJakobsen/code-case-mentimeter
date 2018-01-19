import React, { Component } from 'react';

// Right navigation
class CarouselRightNav extends Component {
  render() {
    return (
      <button 
        className="carousel-nav carousel-nav--right"
        onClick={this.props.onClick}>
         &#62;
      </button>
    );
  }
}

export default CarouselRightNav;