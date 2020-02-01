import styled from 'styled-components';

import Column from './Column';

const Row = styled.div`
  flex-direction: row;
  ${Column} {
    ${props => props.align && `vertical-align: ${props.align};`}
  }
`;

export default Row;