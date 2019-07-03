import React from 'react';
import '../styles/SpeechListener.scss';
import { mdiMicrophone } from '@mdi/js';
import SpeechRecognition from 'react-speech-recognition';
import _ from 'lodash';
import Typist from 'react-typist';

import spaces from '../stores/spaces';

import Icon from '@mdi/react';

class SpeechListener extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lastTranscript: '',
      lastBotMsg: '',
      voice: null
    };
  }

  componentDidMount() {
    window.speechSynthesis.getVoices();
  }

  componentDidUpdate(prevProps) {
    const finalTranscript_old = prevProps.finalTranscript;
    const { finalTranscript, transcript } = this.props;
    if (finalTranscript_old == finalTranscript) return;
    const tentativeTranscript = _.upperFirst(
      _.trim(transcript.replace(finalTranscript_old, ''))
    );
    if (tentativeTranscript != '') {
      this.setState({
        lastTranscript: tentativeTranscript
      });
      console.log('Sending speech', tentativeTranscript);
      const sanitizedCommand = tentativeTranscript.toLowerCase().trim();
      if (sanitizedCommand.startsWith('open')) {
        spaces.open(sanitizedCommand.replace('open', '').trim());
      } else if (sanitizedCommand.startsWith('close')) {
        spaces.close();
      }
    }
  }

  render() {
    const { interimTranscript } = this.props;

    const { lastTranscript, lastBotMsg } = this.state;

    return (
      <div className="speech">
        {interimTranscript ? (
          <span className={'interim'}>
            {_.upperFirst(_.trim(interimTranscript))} |
          </span>
        ) : lastTranscript ? (
          <span className={'final'}>{lastTranscript}</span>
        ) : lastBotMsg ? (
          <span className={'bot'}>
            <Typist
              key={lastBotMsg}
              className={'typist'}
              cursor={{ show: false }}
            >
              {lastBotMsg}
            </Typist>
          </span>
        ) : (
          <Icon className="icon" path={mdiMicrophone} color={'white'} />
        )}
      </div>
    );
  }
}

export default SpeechRecognition(SpeechListener);
