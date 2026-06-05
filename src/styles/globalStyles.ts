import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.fonts.primary};
  }

  body, h1, h2, h3, figure {
    margin: 0;
    padding: 0;
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