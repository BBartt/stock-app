import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

  body{
    font-family: Roboto, sans-serif;
    margin: 0px;
  }

  #root{
    min-height: 100vh;
  }
`;

export default GlobalStyle;
