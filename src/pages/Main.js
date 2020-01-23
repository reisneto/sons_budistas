import React from 'react';
import Header from '../components/Header';
import PlayButton from '../components/PlayButton';
import SoundPlayer from '../components/SoundPlayer';

export default function Main() {
  return <>
    <Header>Sons Budistas</Header>
    <PlayButton>Prece das 7 Linhas</PlayButton>
    <PlayButton>Prece das 7 Linhas</PlayButton>
    <PlayButton>Prece das 7 Linhas</PlayButton>
    <PlayButton>Prece das 7 Linhas</PlayButton>
    <SoundPlayer />
  </>;
}