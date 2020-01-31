import styled from 'styled-components';
import property from 'lodash/property';

const Container = styled.div`
  max-width: ${property('theme.breakpoints.desktop')};
  margin: 0 auto;

  @media(min-width: ${property('theme.breakpoints.tablet')}) {
    width: 100%;
  }
`;

export default Container;
