import { createGlobalStyle, css } from "styled-components";
import reset from "styled-reset";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GlobalStyle = createGlobalStyle`
  ${reset}

  html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  width: 100%;
  }

  body {
    padding: 2.5rem;
    margin: 0 auto;
    letter-spacing: normal;
    font-family: "Inter", sans-serif
  }

  button{
    cursor: pointer;
  }
`;

export default GlobalStyle;
