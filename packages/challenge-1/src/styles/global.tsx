import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
    display: grid;
    height: 100vh;
    margin: 0;
    place-content: center;
  }
`;

export default GlobalStyles;
