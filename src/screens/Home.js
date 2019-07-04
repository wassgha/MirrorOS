import React from 'react';
import { view } from 'react-easy-state';
import '../styles/Home.scss';
import { mdiBug } from '@mdi/js';

import spaces from '../stores/spaces';

import Button from '../components/Button';
import Layer from '../components/Layer';
import BasicInfo from '../components/BasicInfo';

function Home({ active }) {
  return (
    <Layer className="home" active={active}>
      <div className="wallpaper" />
      <div className="mesh" />
      <div className="desktop">
        <div className="top right">
          <Button
            action={() => spaces.open('recent')}
            icon={mdiBug}
            text={'Debug'}
          />
        </div>
        <div className="center">
          <BasicInfo position="center" />
        </div>
        <div className="bottom right" />
      </div>
    </Layer>
  );
}

export default view(Home);
