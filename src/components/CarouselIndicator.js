import React, { Component } from 'react';

// Icons 
class CarouselIndicator extends Component {
  render() {
    return (
      <li>
        <button
          className={
            this.props.index === this.props.activeIndex
              ? "carousel-indicator carousel-indicator--active"
              : "carousel-indicator"
          }
          onClick={this.props.onClick}
        />
      </li>
    );
  }
}

export default CarouselIndicator;