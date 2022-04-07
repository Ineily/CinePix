import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
:root {
    --color-illustration-tertiary: hsl(360, 68%, 63%);
    --color-illustration-highlight: hsl(36, 93%, 68%);
    --color-illustration-secondary: hsl(163, 29%, 75%);
    --color-element-background: hsl(177, 100%, 14%);
    --color-element-headline: hsl(60, 100%, 100%);
    --color-element-paragraph: hsl(163, 29%, 75%);
    --color-element-button: hsl(36, 93%, 68%);
    --color-element-buttontext: hsl(178, 100%, 6%);
}

html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      box-sizing: border-box;
      font-size: 100%;
      vertical-align: baseline;
      font-family: 'Poppins', sans-serif;
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

  a {
      text-decoration: none;
      cursor: pointer;
  }
`;
