import React from 'react';
import { view } from 'react-easy-state';
import './styles/App.scss';

import SpeechListener from './components/SpeechListener';

import spaces from './stores/spaces';

function App() {
  return (
    <div className="app">
      {spaces.render}
      <SpeechListener />
    </div>
  );
}

export default view(App);
