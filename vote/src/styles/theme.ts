import { css, DefaultTheme } from "styled-components";

const colors = {
  main_blue: "#384084",
  white: "#fff",
  light_blue: "rgba(56, 64, 132, 0.50)",
};

const fonts = {
  Headline1: css`
    color: #242957;

    font-family: Inter;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,

  SignBtnText: css`
    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  `,

  Name: css`
    color: #000;

    font-family: Inter;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 8rem; /* 200% */
  `,

  TeamName_Big: css`
    color: #000;

    font-family: Inter;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 8rem; /* 166.667% */
  `,

  TeamName_Mid: css`
    color: #000;

    font-family: Inter;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 6rem; /* 200% */
  `,

  TeamName_Small: css`
    color: #000;

    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,

  TeamDetail: css`
    color: #000;

    font-family: Inter;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,

  BigBtnText: css`
    color: #000;

    font-family: Inter;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 8rem; /* 166.667% */
  `,

  MidBtnText: css`
    font-family: Inter;
    font-size: 3rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,

  Rank: css`
    color: #fff;

    font-family: Inter;
    font-size: 3rem;
    font-style: normal;
    font-weight: 600;
    line-height: 8rem; /* 266.667% */
  `,

  Count: css`
    color: #384084;

    font-family: Inter;
    font-size: 4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 8rem; /* 200% */
  `,
};

const theme: Pick<DefaultTheme, "colors" | "fonts"> = {
  colors,
  fonts,
};
export default theme;
