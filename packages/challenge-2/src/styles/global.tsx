import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    box-sizing: border-box;
    margin: 0;
    padding-top: 10px;
    background: linear-gradient(to bottom, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.15) 100%), radial-gradient(at top center, rgba(255,255,255,0.40) 0%, rgba(0,0,0,0.40) 120%) #989898;
    background-blend-mode: multiply,multiply;
    min-height: 100vh;
  }
`;

export default GlobalStyles;
