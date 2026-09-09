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

export const WrapperCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 28px;
  width: 100%;
  max-width: 960px;
`

export const Card = styled.article`
  background: rgba(10, 15, 28, 0.6);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(37, 99, 235, 0.3);
  border-radius: 1rem;
  overflow: hidden;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(37, 99, 235, 0.7);
    box-shadow: 0 0 32px rgba(37, 99, 235, 0.2);
  }
`

export const CardThumb = styled.div<{ $bg?: string }>`
  width: 100%;
  height: 200px;
  background: ${({ $bg }) => $bg ?? '#1a1f2e'};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
`

export const CardInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CardTitle = styled.h3`
  font-family: 'Fira Code', monospace;
  font-size: 1.1rem;
  font-weight: 700;
  color: ${props => props.theme['white']};
`

export const CardDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  line-height: 1.6;
  color: ${props => props.theme['gray-200']};
`

export const StackList = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const StackTag = styled.span`
  font-family: 'Fira Code', monospace;
  font-size: 0.72rem;
  color: ${props => props.theme['blue-200']};
  background: rgba(59, 130, 246, 0.12);
  border: 1px solid rgba(91, 140, 255, 0.3);
  padding: 0.25rem 0.65rem;
  border-radius: 999px;
`

export const CardButtons = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 4px;
`

export const Button = styled.a<{ $variant?: 'demo' | 'github' }>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 18px;
  border-radius: 6px;
  font-family: 'Fira Code', monospace;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s ease;

  ${({ $variant, theme }) =>
    $variant === 'github'
      ? `
    background: transparent;
    color: ${theme['white']};
    border: 1px solid rgba(91, 140, 255, 0.4);

    &:hover {
      border-color: #5b8cff;
      background: rgba(91, 140, 255, 0.08);
    }
  `
      : `
    background: ${theme['blue-600']};
    color: white;
    border: 1px solid ${theme['blue-600']};

    &:hover {
      background: #3b82f6;
    }
  `}
`