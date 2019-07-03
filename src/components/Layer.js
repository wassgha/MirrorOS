import React from 'react';
import '../styles/Layer.scss';

function Layer({ children, active = false }) {
  return (
    <div
      className="layer"
      style={
        active
          ? { background: 'rgba(200,200,200,0.8)' }
          : { filter: 'url(\'#blur\')' }
      }
    >
      <svg className={'svgFilter'}>
        <filter id="blur">
          <feGaussianBlur stdDeviation="35" />
        </filter>
      </svg>
      {children}
    </div>
  );
}

export default Layer;
