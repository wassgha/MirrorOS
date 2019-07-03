import React from 'react';
import '../styles/Space.scss';

import Layer from '../components/Layer';
import BasicInfo from '../components/BasicInfo';

function Space({ active }) {
  return (
    <Layer className="space" active={active}>
      <div className="wallpaper" />
      <div className="mesh" />
      <div className="desktop">
        <div className="top right">
          <BasicInfo position="top right" />
        </div>
      </div>
    </Layer>
  );
}

export default Space;
