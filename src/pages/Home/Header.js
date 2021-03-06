import React from 'react';
import styled from 'styled-components';
import shuffle from 'lodash/shuffle';
import property from 'lodash/property';

import logo from '../../assets/logo.png';
import { Image, Text, Grid, Terrain } from '../../components';
import { useTextAnimation } from '../../hooks';

const HeaderWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  height: 100vH;
  min-height: 400px;  
  padding-top: 150px;

  @media(max-width: ${property('theme.breakpoints.desktop')}) {
    padding-top: 200px;
    // height: 600px;
  }
`;

const TerrainWrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;

  canvas {
    display: block;
  }
`

const texts = shuffle([
  'I develop ideas',
  'I develop experiences',
  'I develop apps',
  'I develop games',
]);

const Header = () => {
  const text = useTextAnimation(texts, 2000);

  return (
    <HeaderWrap>
      <Grid.Container>
        <Image src={logo} width="400px" tabletWidth="300px" mobileWidth="200px"/>

        <Grid.Space mv="small" />

        <Text.Secondary type="Bold">
          { text }
        </Text.Secondary>
      </Grid.Container>

      <TerrainWrap>
        <Terrain />
      </TerrainWrap>
    </HeaderWrap>
  );
}

export default Header;