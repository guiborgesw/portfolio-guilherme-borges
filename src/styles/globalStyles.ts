import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    scroll-padding-top: 100px;
    scroll-behavior: smooth;
  }

  body {
    font-family: "Fira Code", Arial, Helvetica, sans-serif;
    background-color: ${props => props.theme['black']};
    color: ${props => props.theme['white']};
  }

  body, h1, h2, h3, figure {
    margin: 0;
    padding: 0;
    font-family: "Fira Code", Arial, Helvetica, sans-serif;
  }

  /* ===== Fundo de estrelas compartilhado (fixo, atrás de todas as seções) ===== */
  body::before {
    content: '';
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    background-image:
      radial-gradient(1px 1px at 10% 20%, rgba(255,255,255,0.4), transparent),
      radial-gradient(1px 1px at 80% 10%, rgba(255,255,255,0.3), transparent),
      radial-gradient(1px 1px at 60% 70%, rgba(255,255,255,0.3), transparent),
      radial-gradient(1px 1px at 30% 85%, rgba(255,255,255,0.3), transparent),
      radial-gradient(1px 1px at 90% 40%, rgba(255,255,255,0.4), transparent),
      radial-gradient(1px 1px at 45% 55%, rgba(255,255,255,0.3), transparent),
      radial-gradient(1.5px 1.5px at 25% 30%, rgba(255,255,255,0.5), transparent),
      radial-gradient(1.5px 1.5px at 75% 65%, rgba(255,255,255,0.4), transparent),
      radial-gradient(1.5px 1.5px at 15% 75%, rgba(255,255,255,0.5), transparent);
    background-size: 600px 600px;
  }

  section {
    position: relative;
    z-index: 1;
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
  }
`