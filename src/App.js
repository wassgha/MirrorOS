import React from 'react';
import { view } from 'react-easy-state';
import './styles/App.scss';
import { PoseGroup } from 'react-pose';

import Home from './screens/Home';

import SpeechListener from './components/SpeechListener';
import { ThemeProvider } from './components/ThemeProvider';

import spaces from './stores/spaces';

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <Home active={!spaces.all.length} />
        <PoseGroup>{spaces.render}</PoseGroup>
        <SpeechListener />
      </div>
    </ThemeProvider>
  );
}

export default view(App);
