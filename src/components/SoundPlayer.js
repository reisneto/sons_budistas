import React, { useContext } from 'react';
import { CurrentTrackContext } from '../pages/Main';
import styled from 'styled-components';
import Icon from './Icon';

export default function () {
  const { paused, togglePaused, src, soundPlayerRef } = useContext(CurrentTrackContext);

  function playSoundTrack(soundPlayerRefCurrent) {
    if (soundPlayerRefCurrent) {
      soundPlayerRefCurrent.ended && soundPlayerRefCurrent.load();
      soundPlayerRefCurrent.play();
      togglePaused(paused => !paused);
    }
  }
  function pauseSoundTrack(soundPlayerRefCurrent) {
    if (soundPlayerRefCurrent) {
      soundPlayerRefCurrent.pause();
      togglePaused(paused => !paused);
    }
  }

  function toggleSoundTrack(soundPlayerRefCurrent) {
    if (soundPlayerRefCurrent)
      soundPlayerRefCurrent.paused ? playSoundTrack(soundPlayerRefCurrent) : pauseSoundTrack(soundPlayerRefCurrent);
  }

  return <SoundPlayer>
    <Icon onClick={() => toggleSoundTrack(soundPlayerRef.current)} name={paused ? 'iconPlay--white' : 'iconPause'} />
    <span>Prece das 7 linhas</span>
    <span>01:23</span>
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