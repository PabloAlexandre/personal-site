import styled from 'styled-components';
import property from 'lodash/property';

const Container = styled.div`
  position: relative;
  // max-width: ${property('theme.breakpoints.desktop')};
  max-width: 1024px;
  margin: 0 auto;

  @media(min-width: ${property('theme.breakpoints.tablet')}) {
    width: 95%;
  }

  @media(min-width: ${property('theme.breakpoints.mobile')}) {
    width: 90%;
  }
`;

export default Container;
