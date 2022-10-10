import { createGlobalStyle } from 'styled-components';

import theme from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: ${theme.spaces[0]};
    padding: ${theme.spaces[0]};
    box-sizing: border-box;
    font-family: ${theme.font};
  }

  html, body {
    width: ${theme.percentageSizes[15]}%;
    height: ${theme.percentageSizes[15]}%;
  }

  body {  
    & > #root {
      width: ${theme.percentageSizes[15]}%;
      height: ${theme.percentageSizes[15]}%;
    }
  }

  body {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }

  #root {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
