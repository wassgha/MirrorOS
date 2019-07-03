import React from 'react';
import '../styles/Home.scss';

import Layer from '../components/Layer';
import BasicInfo from '../components/BasicInfo';

function Home({ active }) {
  return (
    <Layer className="home" active={active}>
      <div className="wallpaper" />
      <div className="mesh" />
      <div className="desktop">
        <div className="center left">
          <BasicInfo position="center" />
        </div>
      </div>
    </Layer>
  );
}

export default Home;
