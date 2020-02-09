import React, { createContext, useState, useRef } from 'react';
import Header from '../components/Header';
import PlayButton from '../components/PlayButton';
import SoundPlayer from '../components/SoundPlayer';
import songs from '../data/songs.json';

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
        {songs.data.map(song =>
          <PlayButton key={song.id} item={{ id: song.id, src: song.src, title: song.title }}>{song.title}</PlayButton>
        )}
      </div>
      <SoundPlayer />
    </CurrentTrackProvider>
  </>;
}