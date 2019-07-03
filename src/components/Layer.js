import React from 'react';
import '../styles/Layer.scss';

function Layer({ children, className, active = false }) {
  return (
    <div
      className={'layer ' + className}
      style={
        active
          ? { background: 'rgba(210,210,210,0.4)' }
          : {
              filter: 'url(\'#blur\')',
              width: '120%',
              height: '120%',
              marginTop: '-5%',
              marginLeft: '-10%'
            }
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
