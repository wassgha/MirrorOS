import React from 'react';
import '../styles/CardPreview.scss';
import { mdiEmail } from '@mdi/js';
import posed from 'react-pose';

import Icon from '@mdi/react';

const CardPreviewBox = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 }
});

function CardPreview({
  color = '#333',
  icon = mdiEmail,
  app = 'App name',
  title = 'Card title',
  active = false,
  far = 0,
  ...props
}) {
  return (
    <CardPreviewBox
      className="cardPreview"
      style={{
        opacity: active ? 1 : 0.8,
        filter: 'blur(' + 0.75 * far + 'px)'
      }}
      {...props}
    >
      <Icon className="icon" path={icon} color={color} />
      <span className="appname" style={{ color: color }}>
        {app}
      </span>
      <span className="title">{title}</span>
    </CardPreviewBox>
  );
}

export default CardPreview;
