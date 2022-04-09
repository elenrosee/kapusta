import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

 html {
    scroll-behavior: smooth;
  }

  body {
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0.04em;
    background-color: #fff;
    color: #010101;
    transition: background-color 300ms linear;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul,
   ol {
    list-style: none;
  }

  a,
button {
  font-family: inherit;
  font-style: normal;
  text-decoration: none;
  cursor: pointer;
}

input {
  font-family: inherit;
}

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
