import styled from 'styled-components';
import property from 'lodash/property';

const Image = styled.img`
  ${props => props.width && `width: ${props.width};`}
  max-height: 100%;

  @media(max-width: ${property('theme.breakpoints.desktop')}) {
    ${props => props.tabletWidth && `width: ${props.tabletWidth}`}
  }

  @media(max-width: ${property('theme.breakpoints.tablet')}) {
    ${props => props.mobileWidth && `width: ${props.mobileWidth}`}
  }

`;

export default Image;
