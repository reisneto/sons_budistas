import React, { useContext } from 'react';
import { CurrentTrackContext } from '../pages/Main';
import soundPlayerManager from '../utils/soundPlayerManager';
import styled from 'styled-components';
import Icon from './Icon';

export default function PlayButton({ setSongPage, item, children }) {
  const { currentTrackMetadata, setCurrentTrackMetadata } = useContext(CurrentTrackContext);
  const { activeItem, soundPlayerRef } = currentTrackMetadata;
  return <PlayButtonStyle
    onClick={() => setSongPage(prev => ({ item: item, isActive: !prev.isActive }))}>
    <Icon onClick={() => soundPlayerManager.toggleSoundTrack(currentTrackMetadata, setCurrentTrackMetadata, item)}
      name={soundPlayerManager.isPlayIcon(activeItem.id, soundPlayerRef.current.paused, item.id) ? 'playIcon' : 'iconPause'}
    />
    {children}
  </PlayButtonStyle>
}

const PlayButtonStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #F2B731;
  font-size: 2rem;
  text-align: center;
  margin: 3rem 2rem;
  margin-bottom: 0;
  padding: 1.5rem 0;
  border: .1rem solid;

  span {
    margin-right: 1rem;
  }
`;