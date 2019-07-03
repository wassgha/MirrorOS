import React from 'react';
import '../styles/Space.scss';

import Layer from '../components/Layer';

function Space({ active }) {
  return (
    <Layer className="space" active={active}>
      <div className="background">Hello, Wassim.</div>
    </Layer>
  );
}

export default Space;
