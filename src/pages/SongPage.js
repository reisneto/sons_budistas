import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import SoundPlayer from '../components/SoundPlayer';
import Icon from '../components/Icon';

export default function Song({ songPage, setSongPage }) {
  return <SongStyle isActive={songPage.isActive}>
    <Header> {songPage.item.title} </Header>
    <Icon close={true} className='topRight'
      onClick={() => setSongPage(prev => ({ ...prev, isActive: !prev.isActive }))}
      name={'iconClose--white'}
    />
    <pre className='paragraph'>{songPage.item.description}</pre>
    <SoundPlayer />
  </SongStyle>
}

const SongStyle = styled.div`
  background-color: #4D0202;
  width: 100%;
  height: 100vh;
  position: absolute;
  display: flex;
  flex-flow: column wrap;
  left: 0;
  top: 0;
  z-index: 10;
  transition: transform .4s;
  transform: translateX(${ props => props.isActive ? '0' : '200vw'});
  .paragraph {
    max-width: 500px;
    width: 100%;
    font-size: 1.2rem;
    align-self: center;
    justify-self: center;
    font-family: fantasy;
    line-height: 3rem;
    padding: 10px;
    letter-spacing: 1px;
  }
`;

