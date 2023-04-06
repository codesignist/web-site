import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    --primary: #029fed;
    --basic: #ffa629;
    --javascript: #ffcd29;
    --common: #14ae5c;
    --react: #0d99ff;
    --next: #757575;
    --lesson: #9747ff;
  }
  html,
  body {
    color: #fff;
    padding: 0;
    margin: 0;
    height: 100%;
    background-color: #0C091D;
    font-family: Inter, sans-serif;
  }
  #__next {
    height: 100%;
  }
  a {
    color: var(--primary);
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
