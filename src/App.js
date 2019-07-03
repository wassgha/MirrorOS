import React, { useState } from 'react';
import './styles/App.scss';

import Recent from './screens/Recent';
import Space from './screens/Space';

function App() {
  const [activeScreen, setActiveScren] = useState('space');
  return (
    <div className="app">
      <Space active={activeScreen == 'space'} />
      <Recent active={activeScreen == 'recent'} />
    </div>
  );
}

export default App;
