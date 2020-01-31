import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import property from 'lodash/property';

import image from '../../assets/pattern.png';
import { Text, Grid } from '../../components';
import { useIntersectObserver } from '../../hooks';

const SectionWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${property('theme.colors.white')};
  height: 300px;
  text-align: center;
  @media(max-width: ${property('theme.breakpoints.tablet')}) {
    h2 {
      font-size: 2rem;
      letter-spacing: initial;
      line-height: initial;
    }
    
  } 
`;

const Space = styled(Grid.Space)`
  position: relative;
`;

const backgroundAnimation = keyframes`
  from {
    background-position-x: 0px;
    background-position-y: 0px;
  }

  to {
    background-position-x: -40px;
    background-position-y: -40px;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: -2;
  opacity: 0.6;
  background-image: url('${image}');
  background-repeat: repeat;
  animation: ${backgroundAnimation} 2s linear infinite;
  
`;

const Box = styled.div`
  position: absolute;
  width: 80%;
  height: 100%;
  z-index: -1;
  background: ${property('theme.colors.pink')};
`;

const textPerPercentage = [{
  min: 0,
  max: 0.35,
  text: 'tecnologies'
}, {
  min: 0.35,
  max: 0.5,
  text: 'ego'
}, {
  min: 0.5,
  max: 1,
  text: 'topdown'
}];

function getTextFromPercentage(percentage = 0) {
  return textPerPercentage.find(it => {
    return it.min <= percentage && it.max >= percentage;
  });
}

const InteractiveExperiences = () => {
  const ref = useRef(null);
  const [ currentRef, setCurrentRef ] = React.useState(null);
  const percentageInScreen = useIntersectObserver(currentRef);

  const [ text, setText ] = React.useState(getTextFromPercentage(percentageInScreen || 0).text);
  
  React.useEffect(() => {
    const textItem = getTextFromPercentage(percentageInScreen);
    if(textItem) {
      setText(textItem.text);
    }
  }, [percentageInScreen]);

  React.useEffect(() => {
    setCurrentRef(ref.current);
  }, [ ref ]);

  return (
    <Space pv="large" ref={ref} >
      <Background/>
      <SectionWrap>
        <Box />
        <Space pv="large">
          <Text.Secondary type="SpacedTitle">
            Users over<br/>{ text }
          </Text.Secondary>
        </Space>
      </SectionWrap>
    </Space>
  );
}

export default InteractiveExperiences;