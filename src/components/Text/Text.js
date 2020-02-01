import styled from 'styled-components';

function textStyle(props) {
  const { type, theme : { textStyle } } = props;
  const {
    fontSize,
    fontWeight,
    textTransform,
    letterSpacing,
    lineHeight
  } = textStyle[type] || textStyle.Regular;

  return `
    margin: 0;
    font-size: ${fontSize};
    text-transform: ${textTransform};
    font-weight: ${fontWeight};
    ${letterSpacing ? `letter-spacing: ${letterSpacing};` : ''}
    ${lineHeight ? `line-height: ${lineHeight};` : ''}
  `;
}

export const Primary = styled.h1`
  ${textStyle}
`;

export const Secondary = styled.h2`
  ${textStyle}
`;

export const Tertiary = styled.h3`
  ${textStyle}
`;