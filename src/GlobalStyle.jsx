import { Breakpoints } from 'common';
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  --bg-color: rgba(245, 246, 251, 1);
  --bg-text-color: rgba(255, 255, 255, 1);
  --text-color: rgba(0, 0, 0, 1);
  --text-color-1: rgba(82, 85, 95, 0.4);
  --text-color-2: rgba(82, 85, 95, 0.7);
  --text-color-3: rgba(82, 85, 95, 1);
  --accent-color: rgba(255, 117, 29, 1);
  --accent-color-2: rgba(255, 218, 192, 1);
  --accent-color-3: rgba(231, 25, 46, 1);
  --accent-color-4: rgba(64, 121, 70, 1);
  --modal-bg: rgba(29, 52, 106, 1);
  --bg-tab-selected: rgba(254, 254, 254, 1);
  --bg-tab: rgba(250, 251, 253, 1);
  --box-shadow-tab-wrrap: 0px 10px 60px rgba(170, 178, 197, 0.2);
  --box-shadow-mob-wrrap: 5px 10px 20px rgba(170, 178, 197, 0.4);
  --color-placeholder: rgba(199, 204, 220, 1);
  --color-icon: rgba(7, 31, 65, 1);
}

 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

 html {
  scroll-behavior: smooth;
  }

  body {
min-width: ${Breakpoints.sm}px;
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
letter-spacing: 0.04em;
/*  */
// background-color: var(--bg-color);
/*  */
font-size: 12px;
line-height: 14px;
color: var(--text-color-2);
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
  color: inherit;
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
