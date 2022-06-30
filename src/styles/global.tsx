import { createGlobalStyle } from "styled-components";

const theme = {
  breakpoints: {
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
  colors: {
    primary: "#2b6099",
    secondary: "#134376",
    tertiary: "#0d335b",
    quaternary: "#c4c4c4",
    quinary: "#000000",
  },
  colorsNegative: {
    primary: "#ffffff",
  },
};

export default theme;


export const GlobalStyle = createGlobalStyle`
body {
  font-family: 'Raleway', sans-serif;
  font-size: 62.5%;
  margin: 0;
}
`;
