import React, { Component } from 'react';
import CarouselLeftNav from './components/CarouselLeftNav';
import CarouselRightNav from './components/CarouselRightNav';
import CarouselSlide from './components/CarouselSlide';
import CarouselIndicator from './components/CarouselIndicator';
import './img/hero.svg';


// Wrapper
class Carousel extends Component {
  constructor(props) {
    super(props);

    this.goToSlide = this.goToSlide.bind(this);
    this.goToPrevSlide = this.goToPrevSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
    this.stopCarousel = this.stopCarousel.bind(this);
    this.startCarousel = this.startCarousel.bind(this);

    this.state = {
      activeIndex: 0
    };

    this.startCarousel();
  }

  startCarousel() {
    this.timer = setInterval(this.goToNextSlide.bind(this), 3000)
  }

  stopCarousel() {
    clearInterval(this.timer);
  }

  goToSlide(index) {
    this.setState({
      activeIndex: index
    });
  }

  goToPrevSlide() {
    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length;

    if (index < 1) {
      index = slidesLength;
    }

    --index;

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide() {
    let index = this.state.activeIndex;
    let { slides } = this.props;
    let slidesLength = slides.length - 1;

    if (index === slidesLength) {
      index = -1;
    }

    ++index;

    this.setState({
      activeIndex: index
    });
  }
  
  render() {
    return (
      <div>
        <div className="image-container">
          <section className="background">
            <div className="content-wrapper">
              <h1>Encourage​ ​meaningful​ ​conversation​ ​with​ ​your​ ​audience</h1>
              <p>Questions from audience is a powerful Q&A tool that enables your audience to engage with you,
the presenter. Your audience can now ask questions directly to you, with their smartphones
which you can answer at any point during your presentation. This gives you full control over
your presentations whilst making sure your audience’s voices are heard.
              </p>
            </div>
          </section>
        </div>
      <div 
        className="carousel-container"
        onMouseEnter={this.stopCarousel}
        onMouseLeave={this.startCarousel}
      >
        <div className="carousel">
          <CarouselLeftNav onClick={e => this.goToPrevSlide(e)} />

          <ul className="carousel-slides">
            {this.props.slides.map((slide, index) =>
              <CarouselSlide
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                slide={slide}
              />
            )}
          </ul> 

          <CarouselRightNav onClick={e => this.goToNextSlide(e)} />

          <ul className="carousel-indicators">
            {this.props.slides.map((slide, index) =>
              <CarouselIndicator
                key={index}
                index={index}
                activeIndex={this.state.activeIndex}
                isActive={this.state.activeIndex===index} 
                onClick={e => this.goToSlide(index)}
              />
            )}
          </ul>
        </div>
      </div>
      </div>
    );
  }
}

export default Carousel;