import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, button, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    color: #000;
    text-decoration: none;
  }

  label{
    cursor: pointer;
  }

  button {
    background: none;
    cursor: pointer;
  }
  
  *{
    font-family: 'Noto Sans KR', sans-serif;
  }

  :root {
    --color-main: #ff9900;
    --color-sub: #ffaa42;
    --color-sub-2: #ffcb8f;

    --color-gray: #bfbfbf;
    --color-gray-2: #9fa1a7;

    --color-gray-light: #f8f9fa;
    --color-gray-light-2: #ffffff99;
    --color-gray-light-3: #d1d1d1;

    --color-black-light: #222426;

    --color-blue: #8dbdeb;
    --color-blue-light: #bdd7f0;
    
    --color-red: #f03738;

  }
`;

export default GlobalStyle;
