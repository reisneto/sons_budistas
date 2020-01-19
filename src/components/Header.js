import React from 'react';
import styled from 'styled-components';

export default function ({ children }) {
  return <Header>{children}</Header>;
}

const Header = styled.h1`
  text-align: center;
  background-color: #730202;
`;