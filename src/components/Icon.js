import styled, { css } from 'styled-components';

const widthSize = css`
  width: ${props => props.medium ? `6rem` : `4.5rem`};
`;

export default styled.img.attrs(props => ({
  src: props.src,
}))`
  ${widthSize}
`;