import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

export default function PlayButton({ children }) {
  return <PlayButtonStyle><Icon name='iconPlay' />{children}</PlayButtonStyle>
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