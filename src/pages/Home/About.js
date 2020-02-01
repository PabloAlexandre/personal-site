import React from 'react';
import styled from 'styled-components';
import property from 'lodash/property';

import image from '../../assets/myself.gif';
import { Text, Image, Grid } from '../../components';

const SectionWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-shadow: 0 14px 28px rgba(0,0,0,0.15), 0 10px 10px rgba(0,0,0,0.15);
  background: #343838;
  color: white;
  
  @media(max-width: ${property('theme.breakpoints.tablet')}) {
    text-align: center;
    justify-content: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  display: inline-block;
  width: 200px;
  height: 250px;

  @media(max-width: ${property('theme.breakpoints.tablet')}) {
    margin: 0 auto ${property('theme.spacing.m-large')}px;
  }

  img {
    z-index: 1;
    left: 25px;
    top: -25px;
    position: absolute;
    width: 100%;
    height: auto;
    display: block;
    border: 7px solid #5b6262
  }

  &:after {
    content: '';
    position: absolute;
    width: 95%;
    height: 95%;
    left: 0;
    top: 0;
    border: 7px solid ${property('theme.colors.box')};
  }
`;

const About = () => {
  return (
    <SectionWrap>
      <Grid.Space pv="large">
        <Grid.Container>
          <Text.Secondary type="SpacedTitle">About me</Text.Secondary>
          <Grid.Space mv="m-large" />

          <Grid.Row align="top">
            <Grid.Column size={4} sizeSmall={12}>
              <ImageContainer>
                <Image src={image} width="200px"/>
              </ImageContainer>
            </Grid.Column>
            
            <Grid.Column size={8} sizeSmall={12}>
              <Text.Secondary type="Regular">
                Hi! I'm Pablo, a FullStack developer at Kenoby, design enthusiast and music lover. 
                Addicted in NBA <span role="img" aria-label="Basket ball">🏀</span> and Bundesliga <span role="img" aria-label="Basket ball">⚽️</span>. 
                <br /><br />
                Life is so complicated, let’s simplify everything. 
              </Text.Secondary>
            </Grid.Column>
          </Grid.Row>
          
        </Grid.Container>
      </Grid.Space>
    </SectionWrap>
  );
}

export default About;