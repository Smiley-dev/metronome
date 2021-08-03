import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`


* {
      box-sizing: border-box;
      font-family: 'Abel', sans-serif;
}

body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: cyan;
}
`;

export default GlobalStyle;
