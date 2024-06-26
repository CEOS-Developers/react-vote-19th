import { createGlobalStyle } from "styled-components"
import reset from "styled-reset";
import backgroundImage from "../assets/banner-graphic-ceos.png"

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
        background-color: ${({theme}) => theme.colors.main};
        background-color: ${({ theme }) => theme.colors.main};
        background-image: url(${backgroundImage});
        background-size: cover; /* 이미지를 화면에 꽉 채우도록 설정 */
        background-position: center; /* 이미지를 가운데 정렬 */
        line-height: 1.6; /* 줄 간격 설정 */
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

    h2{
        font-size: 3rem;
        font-weight: 530;
        color: white
    }

`;

export default GlobalStyle;