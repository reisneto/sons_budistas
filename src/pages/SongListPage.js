import React from 'react';
import Header from '../components/Header';
import PlayButton from '../components/PlayButton';
import SoundPlayer from '../components/SoundPlayer';

export default function SongListPage({ setSongPage, songs }) {

  return <>
    <Header>Sons Budistas</Header>
    <div>
      {songs.data.map(song =>
        <PlayButton setSongPage={setSongPage} key={song.id} item={song}>{song.title}</PlayButton>
      )}
    </div>
    <SoundPlayer />
  </>
}

