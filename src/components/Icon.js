import styled, { css } from 'styled-components';
import { black } from 'ansi-colors';

const iconSize = css`
  width: ${props => props.medium ? `6rem` : `4.5rem`};
  height: ${props => props.medium ? `6rem` : `4.5rem`};
`;

const getIconSrc = css`
${({ name }) => {
    if (name === 'iconPlay')
      return `background-image: url(/assets/playIcon.svg);`
    else if (name === 'iconPlay--white')
      return `background-image: url(/assets/playIcon--white.svg);`
    else
      return `background-color: black`;
  }}
`;

export default styled.span`
  ${iconSize}
  display: inline-block;
  background-size: cover;
  ${getIconSrc}
`;