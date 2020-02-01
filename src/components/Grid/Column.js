import styled from 'styled-components';
import property from 'lodash/property';

const Column = styled.div`
  display: inline-flex;
  width: ${props => (props.size / 12) * 100}%;

  @media(max-width: ${property('theme.breakpoints.tablet')}) {
    width: ${props => (props.sizeSmall / 12) * 100}%;
  }
`;

export default Column;