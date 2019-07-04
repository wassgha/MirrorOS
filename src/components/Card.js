import React from 'react';
import '../styles/Card.scss';
import { mdiEmail } from '@mdi/js';
import posed from 'react-pose';

import Icon from '@mdi/react';

const CardBox = posed.div({
  enter: { scale: 1 },
  exit: { scale: 0 }
});

function App({
  color = '#333',
  icon = mdiEmail,
  app = 'App name',
  title = 'Card title',
  children = 'There was an error rendering this app.',
  noPadding = false,
  ...props
}) {
  return (
    <CardBox className="card" {...props}>
      <header className="header">
        <Icon className="icon" path={icon} color={color} />
        <span className="appname" style={{ color: color }}>
          {app}
        </span>
        <span className="title">{title}</span>
      </header>
      <div className="body" style={{ padding: noPadding ? 0 : 16 }}>
        {children}
      </div>
    </CardBox>
  );
}

export default App;
