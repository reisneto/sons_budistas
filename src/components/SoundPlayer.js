import React, { useRef, useContext } from 'react';
import { CurrentTrackContext } from '../pages/Main';
import styled from 'styled-components';
import Icon from './Icon';

export default function () {
  const { paused, togglePaused, src } = useContext(CurrentTrackContext);
  const soundTrackRef = useRef(new Audio(src));

  function playSoundTrack(soundTrackRefCurrent) {
    if (soundTrackRefCurrent) {
      soundTrackRefCurrent.ended && soundTrackRefCurrent.load();
      soundTrackRefCurrent.play();
      togglePaused(paused => !paused);
    }
  }
  function pauseSoundTrack(soundTrackRefCurrent) {
    if (soundTrackRefCurrent) {
      soundTrackRefCurrent.pause();
      togglePaused(paused => !paused);
    }
  }

  function toggleSoundTrack(soundTrackRefCurrent) {
    if (soundTrackRefCurrent)
      soundTrackRefCurrent.paused ? playSoundTrack(soundTrackRefCurrent) : pauseSoundTrack(soundTrackRefCurrent);
  }

  return <SoundPlayer>
    <Icon onClick={() => toggleSoundTrack(soundTrackRef.current)} name={paused ? 'iconPlay--white' : 'iconPause'} />
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