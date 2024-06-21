import { createGlobalStyle } from "styled-components"
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`
    ${reset}
    @font-face {
        font-family: 'Noto Sans';
        src: url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
    }

    @font-face {
        font-family: 'Open Sans';
        src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
    }

    #root, body, html {
        font-family: 'Open Sans', sans-serif;
        width:100%;
        height: 100vh;
        margin: 0 auto; 
    }

    body *:lang(ko) {
        font-family: 'Noto Sans', sans-serif;
    }

    * {
        box-sizing: border-box;
    }

    button{
        cursor: pointer;
        &:hover {
            }
    }
`;

export default GlobalStyle;