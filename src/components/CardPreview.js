import React from 'react';
import '../styles/CardPreview.scss';
import { mdiEmail } from '@mdi/js';
import posed from 'react-pose';

import Icon from '@mdi/react';

const CardPreviewBox = posed.div({
  enter: { opacity: ({ active }) => (active ? 1 : 0.5) },
  exit: { opacity: 0 }
});

function CardPreview({
  color = '#333',
  icon = mdiEmail,
  app = 'App name',
  title = 'Card title',
  far = 0,
  active = false,
  ...props
}) {
  return (
    <CardPreviewBox
      className="cardPreview"
      style={{
        filter: 'blur(' + 0.75 * far + 'px)',
        opacity: active ? 1 : 0.5
      }}
      active={active}
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
