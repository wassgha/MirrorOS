import React from 'react';
import '../styles/CardPreview.scss';
import { mdiEmail } from '@mdi/js';

import Icon from '@mdi/react';

function App({
  color = '#333',
  icon = mdiEmail,
  app = 'App name',
  title = 'Card title',
  active = false,
  far = 0
}) {
  return (
    <div
      className="cardPreview"
      style={{
        opacity: active ? 1 : 0.8,
        filter: 'blur(' + 0.75 * far + 'px)'
      }}
    >
      <Icon className="icon" path={icon} color={color} />
      <span className="appname" style={{ color: color }}>
        {app}
      </span>
      <span className="title">{title}</span>
    </div>
  );
}

export default App;
