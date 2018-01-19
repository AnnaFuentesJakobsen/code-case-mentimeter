import React, { Component } from 'react';

// Slide 
class CarouselSlide extends Component {
  render() {
    return (
      <li
        className={
          this.props.index === this.props.activeIndex
            ? "slide slide--active"
            : "slide"
        }
      >
        <div className="indicator-container">
        <img className="icon" src={this.props.slide.icon} alt="icons"/>
        <h1 className="slide-title">{this.props.slide.title}</h1>
        <p className="slide-description">{this.props.slide.description}</p>
        </div>
      </li>
    );
  }
}

export default CarouselSlide;