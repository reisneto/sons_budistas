import React, { useContext, useState, useEffect } from 'react';
import { CurrentTrackContext } from '../pages/Main';
import soundPlayerManager from '../utils/soundPlayerManager';
import timeFormatter from '../utils/timeFormatter';
import styled from 'styled-components';
import Icon from './Icon';

export default function () {
  const { currentTrackMetadata, setCurrentTrackMetadata } = useContext(CurrentTrackContext);
  const [currentTime, setCurrentTime] = useState(currentTrackMetadata.soundPlayerRef.current.currentTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(timeFormatter(currentTrackMetadata.soundPlayerRef.current.duration, currentTrackMetadata.soundPlayerRef.current.currentTime));
    }, 1000);
    return () => clearInterval(interval);
  }, [currentTrackMetadata.soundPlayerRef]);

  return <SoundPlayer>
    <Icon onClick={() => soundPlayerManager.toggleSoundTrack(currentTrackMetadata, setCurrentTrackMetadata)} name={currentTrackMetadata.soundPlayerRef.current.paused ? 'playIcon--white' : 'iconPause--white'} />
    <span>{currentTrackMetadata.activeItem.title}</span>
    <span>{currentTime}</span>
  </SoundPlayer>
}

const SoundPlayer = styled.div`
  display: flex;
  flex-flow: row no-wrap;
  position: fixed;
  bottom: 0;
  width: 100%;

  background-color: #690101;
  color: #F2F2F2;
  justify-content: space-between;
  padding: 3% 5%;
  font-size: 2.4rem;
`;