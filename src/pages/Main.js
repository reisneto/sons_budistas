import React, { createContext, useState, useRef } from 'react';
import songs from '../data/songs.json';
import SongPage from './SongPage';
import AppShell from '../components/AppShell';
import SongsListPage from './SongListPage';

export const CurrentTrackContext = createContext(null);

function CurrentTrackProvider(props) {
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
  const [songPage, setSongPage] = useState({ isActive: false, item: { ...songs.data[0] } });

  return <CurrentTrackProvider>
    <AppShell />
    <SongsListPage setSongPage={setSongPage} songs={songs} />
    <SongPage songPage={songPage} setSongPage={setSongPage} />
  </CurrentTrackProvider>
}