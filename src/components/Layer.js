import React from 'react';
import posed from 'react-pose';
import '../styles/Layer.scss';

const Box = posed.div({
  exit: { opacity: 0 },
  enter: { opacity: 1 },
  active: { backgroundColor: 'rgba(220,220,220,0.4)' }
});

function Layer({ children, className, active = false, ...props }) {
  return (
    <Box
      className={'layer ' + className}
      pose={active ? 'active' : ''}
      style={
        active
          ? {}
          : {
              filter: 'url(\'#blur\')',
              width: '120%',
              height: '120%',
              marginTop: '-5%',
              marginLeft: '-10%'
            }
      }
      {...props}
    >
      <svg className={'svgFilter'}>
        <filter id="blur">
          <feGaussianBlur stdDeviation="200" />
        </filter>
      </svg>
      {children}
    </Box>
  );
}

export default Layer;
