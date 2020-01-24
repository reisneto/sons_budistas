import styled, { css } from 'styled-components';

const iconSize = css`
  width: ${props => props.medium ? `6rem` : `4.5rem`};
  height: ${props => props.medium ? `6rem` : `4.5rem`};
`;

const getIconSrc = css`
${({ name }) => {
    return `background-image: url(./assets/${name}.svg);`
  }}
`;

export default styled.span`
  ${iconSize}
  display: inline-block;
  background-size: cover;
  ${getIconSrc}
`;