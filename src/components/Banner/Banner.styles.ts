import styled, { keyframes } from 'styled-components'

const drift = keyframes`
  0%, 100% { transform: translateY(-50%) rotate(0deg); }
  50% { transform: translateY(-50%) rotate(1.5deg); }
`

const twinkle = keyframes`
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
`

const scroll = keyframes`
  to {
    transform: translateX(calc(-50% - (var(--gap) / 2)));
  }
` 

export const Section = styled.section`
  box-sizing: border-box;
  position: relative;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 1.25rem 5.625rem 0;
  background: ${props => props.theme['black']};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 10rem;
    background: linear-gradient(
      to bottom,
      transparent,
      ${props => props.theme['black']} 95%
    );
    pointer-events: none;
    z-index: 3;
  }
`

export const StarsFar = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  opacity: 0.6;
  background-image:
    radial-gradient(1px 1px at 10% 20%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1px 1px at 80% 10%, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(1px 1px at 60% 70%, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(1px 1px at 30% 85%, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(1px 1px at 90% 60%, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(1px 1px at 45% 40%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1px 1px at 15% 55%, rgba(255, 255, 255, 0.3), transparent),
    radial-gradient(1px 1px at 70% 90%, rgba(255, 255, 255, 0.4), transparent);
  background-size: 600px 600px;
`

export const StarsNear = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  background-image:
    radial-gradient(1.5px 1.5px at 25% 30%, rgba(255, 255, 255, 0.7), transparent),
    radial-gradient(1.5px 1.5px at 75% 50%, rgba(255, 255, 255, 0.6), transparent),
    radial-gradient(1.5px 1.5px at 50% 80%, rgba(255, 255, 255, 0.6), transparent),
    radial-gradient(1.5px 1.5px at 85% 25%, rgba(255, 255, 255, 0.5), transparent),
    radial-gradient(1.5px 1.5px at 10% 70%, rgba(255, 255, 255, 0.7), transparent);
  background-size: 500px 500px;
  animation: ${twinkle} 4s ease-in-out infinite;
`

export const OrbitSystem = styled.div`
  position: absolute;
  top: 50%;
  right: -180px;
  transform: translateY(-50%);
  width: 900px;
  height: 900px;
  z-index: 1;
  pointer-events: none;
  animation: ${drift} 10s ease-in-out infinite;

  @media (max-width: 1280px) {
    right: -320px;
    opacity: 0.7;
  }
`

export const OrbitRing = styled.div<{ $inner?: boolean }>`
  position: absolute;
  inset: ${({ $inner }) => ($inner ? '120px' : '0')};
  border: 1px solid rgba(91, 140, 255, ${({ $inner }) => ($inner ? 0.1 : 0.15)});
  border-radius: 50%;
`

export const OrbitNode = styled.div<{
  $top: string
  $left: string
  $size?: number
  $opacity?: number
}>`
  position: absolute;
  top: ${({ $top }) => $top};
  left: ${({ $left }) => $left};
  transform: translate(-50%, -50%);
  width: ${({ $size }) => $size ?? 8}px;
  height: ${({ $size }) => $size ?? 8}px;
  border-radius: 50%;
  background: #5b8cff;
  opacity: ${({ $opacity }) => $opacity ?? 1};
  box-shadow: 0 0 12px 2px rgba(91, 140, 255, 0.8);
`

export const OrbitPlanet = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle at 35% 30%, #2a3a6e, #0a0f1c 70%);
  box-shadow:
    inset -20px -20px 40px rgba(0, 0, 0, 0.5),
    0 0 60px rgba(91, 140, 255, 0.15);
`

export const ContentWrapper = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  width: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 1100px) {
    flex-direction: column;
    justify-content: center;
    gap: 48px;
    padding-bottom: 4rem;
  }
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 460px;

  @media (max-width: 1100px) {
    align-items: center;
    text-align: center;
  }
`

export const Overline = styled.p`
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: ${props => props.theme['blue-200']};
  margin-bottom: 20px;
`

export const Name = styled.h1`
  font-family: 'Orbitron', sans-serif;
  font-weight: 900;
  font-size: 4.3rem;
  line-height: 1.05;
  color: ${props => props.theme['white']};
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    font-size: 3.2rem;
  }
`

export const NameLast = styled.span`
  color: ${props => props.theme['blue-200']};
`

export const Intro = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.98rem;
  line-height: 1.75;
  color: ${props => props.theme['gray-200']};
  margin-top: 22px;
  max-width: 440px;

  strong {
    color: ${props => props.theme['white']};
    font-weight: 600;
  }
`

export const Actions = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 34px;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`

export const PrimaryButton = styled.a`
  padding: 10px 20px;
  border-radius: 7px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease;
  background: ${props => props.theme['blue-600']};
  border: 1px solid ${props => props.theme['blue-600']};
  color: ${props => props.theme['white']};

  &:hover {
    background: #3b82f6;
  }
`

export const GhostButton = styled.a`
  padding: 10px 20px;
  border-radius: 7px;
  font-size: 0.85rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease;
  background: transparent;
  border: 1px solid rgba(91, 140, 255, 0.35);
  color: ${props => props.theme['white']};

  &:hover {
    border-color: #5b8cff;
    background: rgba(91, 140, 255, 0.08);
  }
`

export const Carousel = styled.div`
  display: flex;
  align-items: center;
  padding-block: 0.5rem;
  overflow: hidden;
  user-select: none;
  --gap: 2rem;
`

export const CarouselScroll = styled.ul`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  list-style: none;
  width: max-content;
  gap: var(--gap);
  padding: 0;

  animation: ${scroll} 20s linear infinite;

  &:hover {
    animation-play-state: paused;
  }
`