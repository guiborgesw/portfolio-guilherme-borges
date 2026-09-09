import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 5rem 5.625rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(91, 140, 255, 0.2) 20%,
      rgba(91, 140, 255, 0.2) 80%,
      transparent
    );
  }
`

export const Title = styled.h2`
  font-family: 'Orbitron', sans-serif;
  font-size: 1.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: ${props => props.theme['white']};
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 4rem;

  &::before,
  &::after {
    content: '';
    display: block;
    height: 2px;
    width: 48px;
    flex-shrink: 0;
  }

  &::before {
    background: linear-gradient(to right, transparent, ${props => props.theme['blue-300']});
  }

  &::after {
    background: linear-gradient(to left, transparent, ${props => props.theme['blue-300']});
  }
`

export const TimelineWrapper = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-bottom: 3.75rem;
  position: relative;
`

export const TimelineLine = styled.div`
  position: absolute;
  top: 37px;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(
    to right,
    transparent,
    rgba(91, 140, 255, 0.5) 10%,
    rgba(91, 140, 255, 0.5) 90%,
    transparent
  );
`

export const TimelineItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`

export const NodeCard = styled.figure`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  /* ponto da linha do tempo (entre o ano e o card) */
  &::before {
    content: '';
    order: 2;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${props => props.theme['blue-300']};
    box-shadow: 0 0 10px rgba(70, 128, 219, 0.8);
    flex-shrink: 0;
  }
`

export const NodeYear = styled.figcaption`
  order: 1;
  font-family: 'Fira Code', monospace;
  font-size: 0.9rem;
  font-weight: 500;
  color: ${props => props.theme['blue-200']};
  letter-spacing: 0.05em;
`

export const NodeLogo = styled.div`
  order: 3;
  background: rgba(10, 15, 28, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(37, 99, 235, 0.25);
  border-radius: 0.75rem;
  padding: 1rem;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  aspect-ratio: 16 / 9;
  transition: border-color 0.3s ease;

  &:hover {
    border-color: rgba(70, 128, 219, 0.6);
  }

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
    filter: brightness(0.9);
  }
`

export const Description = styled.div`
  max-width: 1100px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Paragraph = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: ${props => props.theme['gray-200']};

  strong {
    font-family: 'Fira Code', monospace;
    color: #c7cbd8;
    font-weight: 600;
  }
`

export const Highlight = styled.span`
  color: ${props => props.theme['blue-200']};
`
