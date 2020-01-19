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
  color: #ffffff;
  box-sizing: border-box;
}

#root {
  display: flex;
  flex-direction: column;
}
`;