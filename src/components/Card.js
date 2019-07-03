import React from 'react';
import '../styles/Card.scss';
import { mdiEmail } from '@mdi/js';

import Icon from '@mdi/react';

function App({
  color = '#333',
  icon = mdiEmail,
  app = 'App name',
  title = 'Card title',
  children = 'There was an error rendering this app.'
}) {
  return (
    <div className="card">
      <header className="header">
        <Icon className="icon" path={icon} color={color} />
        <span className="appname" style={{ color: color }}>
          {app}
        </span>
        <span className="title">{title}</span>
      </header>
      <div className="body">{children}</div>
    </div>
  );
}

export default App;
