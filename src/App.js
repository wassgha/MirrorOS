import React from 'react';
import { view } from 'react-easy-state';
import './styles/App.scss';
import { PoseGroup } from 'react-pose';

import SpeechListener from './components/SpeechListener';

import spaces from './stores/spaces';

function App() {
  return (
    <div className="app">
      <PoseGroup>{spaces.render}</PoseGroup>
      <SpeechListener />
    </div>
  );
}

export default view(App);
