import React, { Component } from 'react';
import '../styles/Swiper.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
  }

  previousSlide() {
    const { children } = this.props;
    const { current } = this.state;
    if (current <= 0) return;

    this.setState({
      current: (current - 1 + children.length) % children.length
    });
  }

  nextSlide() {
    const { children } = this.props;
    const { current } = this.state;
    if (current >= children.length - 1) return;

    this.setState({
      current: (current + 1) % children.length
    });
  }

  render() {
    const { children } = this.props;
    const { current } = this.state;
    return (
      <div className="carousel">
        <div
          className="wrapper"
          style={{
            transition: '0.2s linear transform',
            transform: `translateX(-${current * 100}%)`
          }}
        >
          {children.map(child => (
            <div className="slot">{child}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
