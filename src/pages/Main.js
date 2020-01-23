import React, { createContext, useState, useRef } from 'react';
import Header from '../components/Header';
import PlayButton from '../components/PlayButton';
import SoundPlayer from '../components/SoundPlayer';

export const CurrentTrackContext = createContext(null);

function CurrentTrackProvider(props) {
  const [paused, togglePaused] = useState(true);
  const defaultSrc = './assets/audios/prece7linhas20min.mp3';
  const soundPlayerRef = useRef(new Audio(defaultSrc));

  const currentTrackMetadata = {
    ended: false,
    src: defaultSrc,
    paused,
    togglePaused,
    soundPlayerRef
  };

  return <CurrentTrackContext.Provider value={currentTrackMetadata} {...props}></CurrentTrackContext.Provider>
}

export default function Main() {
  return <>
    <Header>Sons Budistas</Header>
    <CurrentTrackProvider>
      <PlayButton item='1'>Prece das 7 Linhas</PlayButton>
      <PlayButton>Prece das 7 Linhas</PlayButton>
      <PlayButton>Prece das 7 Linhas</PlayButton>
      <PlayButton>Prece das 7 Linhas</PlayButton>
      <SoundPlayer />
    </CurrentTrackProvider>
  </>;
}