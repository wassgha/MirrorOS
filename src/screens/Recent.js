import React, {
  useRef,
  useState,
  useImperativeHandle,
  forwardRef
} from 'react';
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
import { view } from 'react-easy-state';
import posed from 'react-pose';

import spaces from '../stores/spaces';

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
    title: 'Hello - Adele',
    app: 'Youtube',
    icon: mdiYoutube,
    color: '#c4302b',
    noPadding: true,
    children: (
      <iframe
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/9xwazD5SyVg?controls=0"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Adele Hello"
      />
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
    title: 'Stranger Things',
    app: 'Netflix',
    icon: mdiNetflix,
    color: '#E50914',
    children: <span>4</span>
  }
];

const PreviewList = posed.nav({
  enter: { x: '0%', staggerChildren: 100 },
  exit: { x: '-100%' }
});

const BottomControls = posed.nav({
  enter: { y: '0%', opacity: 1, staggerChildren: 100 },
  exit: { y: '100%', opacity: 0 }
});

function Recent({ active, ...props }, ref) {
  const swiper = useRef({});
  const [current, setCurrent] = useState(0);
  useImperativeHandle(ref, () => ({
    handleCommand: (command, data) => {
      switch (command) {
        case 'next':
          swiper.current.next();
          return true;
        case 'previous':
          swiper.current.previous();
          return true;
        default:
          return false;
      }
    }
  }));
  return (
    <Layer className="recent" active={active} {...props}>
      <div className="cards">
        <div className="swiper">
          <Swiper ref={swiper} onChange={setCurrent}>
            {dummyCards.map((card, index) => (
              <Card key={index} {...card} {...props} />
            ))}
          </Swiper>
          <BottomControls className="bottomControls" {...props}>
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
          </BottomControls>
        </div>
      </div>
      <div className="preview">
        <PreviewList className="previewCardContainer" {...props}>
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
                {...props}
                active={index === current}
              />
            ))}
          </div>
        </PreviewList>
      </div>
      <div className="topControls">
        <Button
          icon={mdiGesturePinch}
          text="Quit"
          action={() => spaces.close()}
        />
      </div>
    </Layer>
  );
}

export default view(forwardRef(Recent));
