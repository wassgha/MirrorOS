import React, { Component } from 'react';
import '../styles/Swiper.scss';

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      current: 0
    };

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  previous() {
    const { children, onChange = () => {} } = this.props;
    const { current } = this.state;
    if (current <= 0) return;

    this.setState(
      {
        current: (current - 1 + children.length) % children.length
      },
      () => {
        onChange(this.state.current);
      }
    );
  }

  next() {
    const { children, onChange = () => {} } = this.props;
    const { current } = this.state;
    if (current >= children.length - 1) return;

    this.setState(
      {
        current: (current + 1) % children.length
      },
      () => {
        onChange(this.state.current);
      }
    );
  }

  render() {
    const { children } = this.props;
    const { current } = this.state;
    return (
      <div className="carousel">
        <div
          className="wrapper"
          style={{
            transition: '0.3s linear transform',
            transform: `translate3d(-${current * 100}%, 0, 0 )`
          }}
        >
          {children.map((child, index) => (
            <div className="slot">{child}</div>
          ))}
        </div>
      </div>
    );
  }
}

export default Carousel;
