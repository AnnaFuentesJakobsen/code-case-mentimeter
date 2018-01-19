import React, { Component } from 'react';

// Left nav
class CarouselLeftNav extends Component {
  render() {
    return (
      <button
        className="carousel-nav carousel-nav--left"
        onClick={this.props.onClick}>
          &#60;
      </button>
    );
  }
}

export default CarouselLeftNav;