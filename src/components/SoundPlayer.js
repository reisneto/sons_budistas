import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import Icon from './Icon';

export default function ({ soundTrackInfo }) {
  const soundTrack = useRef(new Audio());

  useEffect(() => {
    console.log('assign src...');
    soundTrack.current.src = './assets/audios/prece7linhas20min.mp3';
    soundTrack.current.load();
  }, [])

  useEffect(() => {
    console.log('current changes');
  }, [soundTrack.current])

  function playSoundTrack(soundRef) {
    console.log('playSoundTrack');
    if (soundRef) {
      soundRef.ended && soundRef.load();
      soundRef.play();
    }
  }
  function pauseSoundTrack(soundRef) {
    console.log('pauseSoundTrack');
    if (soundRef)
      soundRef.pause()
  }

  function toggleSoundTrack(soundRef) {
    console.log('toggleSoundTrack');
    if (soundRef)
      soundRef.paused ? playSoundTrack(soundRef) : pauseSoundTrack(soundRef);
  }

  return <SoundPlayer>
    <Icon onClick={() => toggleSoundTrack(soundTrack.current)} name={soundTrack.current.paused ? 'iconPlay--white' : 'iconPause'} />
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