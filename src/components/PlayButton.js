import React, { useContext } from 'react';
import { CurrentTrackContext } from '../pages/Main';
import soundPlayerManager from '../utils/soundPlayerManager';
import styled from 'styled-components';
import Icon from './Icon';

export default function PlayButton({ item, children }) {
  const { id, soundPlayerRef, paused, togglePaused } = useContext(CurrentTrackContext);
  return <PlayButtonStyle onClick={() => console.log(item.id)}><Icon onClick={() => soundPlayerManager.toggleSoundTrack(soundPlayerRef.current, togglePaused, id, item)} name={soundPlayerManager.isPlayIcon(id, paused, item.id) ? 'iconPlay' : 'iconPause'} />{children}</PlayButtonStyle>
}

const PlayButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F2B731;
  font-size: 2rem;
  text-align: center;
  margin: 3rem 2rem;
  margin-bottom: 0;
  padding: 1.5rem 0;
  border: .1rem solid;

  span {
    margin-right: 1rem;
  }
`;