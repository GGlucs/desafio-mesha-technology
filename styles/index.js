import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,
  body {
    scroll-behavior: smooth;
    background-color: #E0E0E0;
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
  .container {
    width: 90%;
    max-width: 1110px;
    margin: 0 auto;
  }
  ul{
    list-style-type:none ;
  }
  h1, h2{
    margin:0;
    padding:0;
    text-align: center;
  }
  h1{
    font-size: 40px;
  }
  h2{
    font-size: 28px;
  }
  p{
    font-size: 16px;
    font-weight: bold;
  }

`;
