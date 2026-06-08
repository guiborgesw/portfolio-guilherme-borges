import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-items: center;
  background-color: ${props => props.theme['black']};
`

export const Title = styled.h2`
  font-family: 'Press Start 2P', sans-serif;
  color: ${props => props.theme['white']};
  text-align: center;
  padding: 55px 0 70px;
  letter-spacing: 2px;
`

export const WrapperCard = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 50px;
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 32px;
`

export const Card = styled.article`
  width: 430px;
  background: #111;
  border: 3px solid ${props => props.theme['white']};
  position: relative;
  box-shadow: 6px 6px 0 rgba(255, 255, 255, 0.15);
  transition: transform 0.15s;

  &:hover {
    transform: translateY(-4px);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -9px;
    right: -9px;
    width: 100%;
    height: 100%;
    border: 3px solid rgba(255, 255, 255, 0.2);
    pointer-events: none;
  }
`

export const CardThumb = styled.div<{ $bg?: string }>`
  width: 100%;
  height: 200px;
  background: ${({ $bg }) => $bg ?? '#111'};
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    image-rendering: pixelated;
  }
`

export const CardInfo = styled.div`
  padding: 18px 18px 20px;
`

export const CardTitle = styled.h3`
  font-family: 'Press Start 2P', sans-serif;
  font-size: 0.825rem;
  color: ${props => props.theme['white']};
  padding-top: 0.5rem;
  margin-bottom: 1rem;
  letter-spacing: 1px;
`

export const CardDescription = styled.p`
  font-family: "Fira Code", Arial, Helvetica, sans-serif;
  font-size: 1rem;
  color: ${props => props.theme['gray-300']};
  line-height: 1.3;
  padding-top: 10px;
  margin-bottom: 1rem;
  letter-spacing: 0.5px;
`

export const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 6px;
  margin-bottom: 18px;
  gap: 10px;
`

export const StackTag = styled.span`
  font-family: "Fira Code", Arial, Helvetica, sans-serif;
  font-size: 0.825rem;
  padding: 5px 8px;
  border: 2px solid ${props => props.theme['blue-300']};
  color: ${props => props.theme['blue-300']};
  background: transparent;
  letter-spacing: 0.5px;
`

export const CardButtons = styled.div`
  display: flex;
  padding-top: 10px;
  gap: 10px;
`

export const Button = styled.a<{ $variant?: 'demo' | 'github' }>`
  font-family: "Fira Code", Arial, Helvetica, sans-serif;
  font-size: 0.825rem;
  padding: 8px 12px;
  border: 2px solid;
  cursor: pointer;
  letter-spacing: 0.5px;
  transition: all 0.15s;
  text-decoration: none;

  ${({ $variant, theme }) =>
  $variant === 'github'
    ? `
  border-color: ${theme['gray-500']};
  color: ${theme['gray-100']};
  background: transparent;
  &:hover { border-color: #aaa; color: white; }
`
    : `
  border-color: ${theme['blue-300']};
  background: ${theme['blue-300']};
  color: white;
  &:hover { background: ${theme['blue-400']}; }
`}
`