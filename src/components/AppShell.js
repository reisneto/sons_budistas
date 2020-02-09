import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
}
body {
  font-family: "Lato", sans-serif;
  font-weight: 400;
  /* font-size: 16px; */
  line-height: 1.7;
  color: #F2F2F2;
  box-sizing: border-box;
  background-color: #4D0202;
}

#root {
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
`;