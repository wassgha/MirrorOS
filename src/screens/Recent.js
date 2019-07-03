import React, { useRef, useState } from 'react';
import '../styles/Recent.scss';
import {
  mdiEmail,
  mdiSpotify,
  mdiFacebookMessenger,
  mdiYoutube,
  mdiNetflix,
  mdiGestureSwipeRight,
  mdiGestureSwipeLeft,
  mdiGestureSwipeUp,
  mdiGestureSwipeDown,
  mdiGesturePinch
} from '@mdi/js';

import Layer from '../components/Layer';
import Card from '../components/Card';
import CardPreview from '../components/CardPreview';
import Swiper from '../components/Swiper';
import Button from '../components/Button';

const dummyCards = [
  {
    title: 'We’re meeting with the new customer',
    app: 'Email',
    icon: mdiEmail,
    children: (
      <span>
        <p>Hey Wassim,</p>
        <p>
          Just wanted to remind you that we’re meeting with the new customers
          today at 2pm in the lobby. I’ll meet you there.
        </p>
        <p>
          Please remember to bring the updated designs for the four new concepts
          that you were working on yesterday.
        </p>
        <p>
          Best regards,
          <br />
          John.
        </p>
      </span>
    )
  },
  {
    title: 'Now Playing',
    app: 'Spotify',
    icon: mdiSpotify,
    color: '#1DB954',
    children: <span>1</span>
  },
  {
    title: 'Zura, Trisha and 1 other',
    app: 'Messenger',
    icon: mdiFacebookMessenger,
    color: '#0078FF',
    children: <span>2</span>
  },
  {
    title: 'Erik Laucks',
    app: 'Messenger',
    icon: mdiFacebookMessenger,
    color: '#0078FF',
    children: <span>2</span>
  },
  {
    title: 'Hello - Adele',
    app: 'Youtube',
    icon: mdiYoutube,
    color: '#c4302b',
    noPadding: true,
    children: (
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/YQHsXMglC9A?controls=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    )
  },
  {
    title: 'Stranger Things',
    app: 'Netflix',
    icon: mdiNetflix,
    color: '#E50914',
    children: <span>4</span>
  }
];

function Recent({ active }) {
  const swiper = useRef({});
  const [current, setCurrent] = useState(0);
  console.log(dummyCards.slice(current));
  return (
    <Layer className="recent" active={active}>
      <div className="topControls">
        <Button icon={mdiGesturePinch} text="Quit" />
      </div>
      <div className="cards">
        <div className="swiper">
          <Swiper ref={swiper} onChange={setCurrent}>
            {dummyCards.map((card, index) => (
              <Card key={index} {...card} />
            ))}
          </Swiper>
          <div className="bottomControls">
            <Button icon={mdiGestureSwipeUp} text="Mark as read" />
            <Button icon={mdiGestureSwipeDown} text="Reply" />
            <Button
              icon={mdiGestureSwipeLeft}
              text="Previous"
              action={() => swiper.current.previous()}
            />
            <Button
              icon={mdiGestureSwipeRight}
              text="Next"
              action={() => swiper.current.next()}
            />
          </div>
        </div>
      </div>
      <div className="preview">
        <div className="previewCardContainer">
          <div
            className="previewCardContent"
            style={{
              transform: `translateY(-${current * (56 + 8)}px)`,
              transition: '0.2s linear transform'
            }}
          >
            {dummyCards.map((card, index) => (
              <CardPreview
                far={Math.abs(index - current)}
                key={index}
                {...card}
                active={index == current}
              />
            ))}
          </div>
        </div>
      </div>
    </Layer>
  );
}

export default Recent;
