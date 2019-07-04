import React from 'react';
import { view } from 'react-easy-state';
import '../styles/Home.scss';
import { mdiBug } from '@mdi/js';

import spaces from '../stores/spaces';

import Button from '../components/Button';
import Layer from '../components/Layer';
import BasicInfo from '../components/BasicInfo';

const appleBg = false;

function Home({ active }) {
  return (
    <Layer className="home" active={active}>
      {appleBg ? (
        <video
          className="wallpaper"
          src={
            'https://sylvan.apple.com/Videos/comp_DB_D001_C005_COMP_PSNK_v12_SDR_PS_20180912_SDR_2K_AVC.mov'
          }
          autoPlay
          mute
        />
      ) : (
        <div className="wallpaper" />
      )}
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
