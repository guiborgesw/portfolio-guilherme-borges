import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  html {
    scroll-padding-top: 100px;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Fira Code", Arial, Helvetica, sans-serif;
  }

  body, h1, h2, h3, figure {
    margin: 0;
    padding: 0;
    font-family: "Fira Code", Arial, Helvetica, sans-serif;
  }

  section {
    min-height: calc(100vh - 80px);
  }

  button {
    font-family: inherit;
  }

  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
      scroll-behavior: smooth;
    }

    img, progress {
      max-width: 100%;
    }

    * {
      box-sizing: border-box;
    }
  }
`