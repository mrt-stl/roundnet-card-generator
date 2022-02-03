import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

/* FONTS */
@font-face {
    font-family: "Open Sans";
    src: url("/font/OpenSans-Regular.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("/font/OpenSans-Light.ttf");
    font-style: normal;
    font-weight: 300;
    font-display: swap;
  }
  @font-face {
    font-family: "Open Sans";
    src: url("/font/OpenSans-Bold.ttf");
    font-style: normal;
    font-weight: 700;
    font-display: swap;
  }

/* CSS Reset from https://www.joshwcomeau.com/css/custom-css-reset/ */
/* START */
*, *::before, *::after {
  box-sizing: border-box;
}
* {
  margin: 0;
}
html, body {
  height: 100%;
}
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
input, button, textarea, select {
  font: inherit;
}
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
#root, #__next {
  isolation: isolate;
}
/* END */

/* CUSTOM STYLES */
* {
  font-family: "Open Sans", sans-serif
}

h1, h2, h3, h4, h5, h6 {
  font-weight: 400;
}

h3 {
  font-size: ${props => props.theme.fontSize.xl}
}

p, a {
  color: ${(props) => props.theme.color.black};
}

a {
  text-decoration: none;
}

`
