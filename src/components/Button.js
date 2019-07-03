import React from 'react';
import '../styles/Button.scss';
import { mdiEmail } from '@mdi/js';

import Icon from '@mdi/react';

function Button({
  color = '#333',
  icon = mdiEmail,
  text = 'Button',
  action = () => {}
}) {
  return (
    <div className="button" onClick={action}>
      <Icon className="icon" path={icon} color={color} />

      <span className="text">{text}</span>
    </div>
  );
}

export default Button;
