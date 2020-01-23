import React, { createContext, useState } from 'react';
import Header from '../components/Header';
import PlayButton from '../components/PlayButton';
import SoundPlayer from '../components/SoundPlayer';

export const CurrentTrackContext = createContext(null);

function CurrentTrackProvider(props) {
  const [paused, togglePaused] = useState(true);

  const currentTrackMetadata = {
    ended: false,
    src: './assets/audios/prece7linhas20min.mp3',
    paused,
    togglePaused
  };

  return <CurrentTrackContext.Provider value={currentTrackMetadata} {...props}></CurrentTrackContext.Provider>
}

export default function Main() {
  return <>
    <Header>Sons Budistas</Header>
    <CurrentTrackProvider>
      <PlayButton>Prece das 7 Linhas</PlayButton>
      <PlayButton>Prece das 7 Linhas</PlayButton>
      <PlayButton>Prece das 7 Linhas</PlayButton>
      <PlayButton>Prece das 7 Linhas</PlayButton>
      <SoundPlayer />
    </CurrentTrackProvider>
  </>;
}