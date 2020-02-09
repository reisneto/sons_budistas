import React, { createContext, useState, useRef } from 'react';
import Header from '../components/Header';
import PlayButton from '../components/PlayButton';
import SoundPlayer from '../components/SoundPlayer';

export const CurrentTrackContext = createContext(null);

function CurrentTrackProvider(props) {
  // const [paused, togglePaused] = useState(true);
  const defaultSrc = './assets/audios/prece7linhas20min.mp3';
  const soundPlayerRef = useRef(new Audio(defaultSrc));

  const [currentTrackMetadata, setCurrentTrackMetadata] = useState({
    activeItem: { id: 1, src: 'prece7linhas20min.mp3', title: 'Prece das 7 linhas' },
    ended: false,
    paused: true,
    soundPlayerRef
  });

  return <CurrentTrackContext.Provider value={{ currentTrackMetadata, setCurrentTrackMetadata }} {...props}></CurrentTrackContext.Provider>
}

export default function Main() {
  return <>
    <Header>Sons Budistas</Header>
    <CurrentTrackProvider>
      <div>
        <PlayButton item={{ id: 1, src: 'prece7linhas20min.mp3', title: 'Prece das 7 linhas' }}>Prece das 7 Linhas</PlayButton>
        <PlayButton item={{ id: 2, src: 'bensound-summer.mp3', title: 'song 1' }}>Song 1</PlayButton>
        <PlayButton item={{ id: 3, src: 'bensound-summer.mp3', title: 'song 2' }}>Song 2</PlayButton>
        <PlayButton item={{ id: 4, src: 'bensound-summer.mp3', title: 'song 3' }}>Song 3</PlayButton>
      </div>
      <SoundPlayer />
    </CurrentTrackProvider>
  </>;
}