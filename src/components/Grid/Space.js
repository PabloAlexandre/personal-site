import styled from 'styled-components';

const properties = {
  mt: (size) => `margin-top: ${size}px;`,
  mb: (size) => `margin-bottom: ${size}px;`,
  mv: (size) => [properties.mt(size), properties.mb(size)].join(''),
  ml: (size) => `margin-left: ${size}px;`,
  mr: (size) => `margin-right: ${size}px;`,
  mh: (size) => [properties.ml(size), properties.mr(size)].join(''),
  ma: (size) => [properties.mv(size), properties.mh(size)].join(''),
  pt: (size) => `padding-top: ${size}px;`,
  pb: (size) => `padding-bottom: ${size}px;`,
  pv: (size) => [properties.pt(size), properties.pb(size)].join(''),
  pl: (size) => `padding-left: ${size}px;`,
  pr: (size) => `padding-right: ${size}px;`,
  ph: (size) => [properties.pl(size), properties.pr(size)].join(''),
  pa: (size) => [properties.pv(size), properties.ph(size)].join(''),
};

const spaceStyle = (props) => {
  const { theme } = props;

  return Object
    .keys(properties)
    .filter(key => !!props[key])
    .map(key => properties[key](theme.spacing[props[key]]))
    .join('');
};

const Space = styled.div`
  ${spaceStyle}
`;

export default Space;