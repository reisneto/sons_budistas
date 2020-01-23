import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

export default function ({ soundTrackInfo }) {
  const soundTrackRef = useRef(new Audio('./assets/audios/prece7linhas20min.mp3'));

  const [soundPlayerMetadata, setSoundPlayerMetadata] = useState({
    ended: false,
    paused: true
  });

  function playSoundTrack(soundTrackRefCurrent) {
    if (soundTrackRefCurrent) {
      soundTrackRefCurrent.ended && soundTrackRefCurrent.load();
      soundTrackRefCurrent.play();
      setSoundPlayerMetadata(prev => ({ ...prev, paused: false }));
    }
  }
  function pauseSoundTrack(soundTrackRefCurrent) {
    if (soundTrackRefCurrent) {
      soundTrackRefCurrent.pause();
      setSoundPlayerMetadata(prev => ({ ...prev, paused: true }));
    }
  }

  function toggleSoundTrack(soundTrackRefCurrent) {
    if (soundTrackRefCurrent)
      soundTrackRefCurrent.paused ? playSoundTrack(soundTrackRefCurrent) : pauseSoundTrack(soundTrackRefCurrent);
  }

  return <SoundPlayer>
    <Icon onClick={() => toggleSoundTrack(soundTrackRef.current)} name={soundPlayerMetadata.paused ? 'iconPlay--white' : 'iconPause'} />
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