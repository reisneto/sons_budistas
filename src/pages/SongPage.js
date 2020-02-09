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
    <p className='paragraph'>{songPage.item.description}</p>
    <SoundPlayer />
  </SongStyle>
}

const SongStyle = styled.div`
  background-color: #4D0202;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-flow: column nowrap;
  left: 0;
  top: 0;
  z-index: 10;
  transition: transform .4s;
  transform: translateX(${ props => props.isActive ? '0' : '100%'});
  .paragraph {
    width: 450px;
    font-size: 2rem;
    align-self: center;
  }
`;

