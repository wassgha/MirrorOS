import React from 'react';
import '../styles/Button.scss';
import { mdiEmail } from '@mdi/js';

import Icon from '@mdi/react';

function App({ color = '#333', icon = mdiEmail, text = 'Button' }) {
  return (
    <div className="button">
      <Icon className="icon" path={icon} color={color} />

      <span className="text">{text}</span>
    </div>
  );
}

export default App;
