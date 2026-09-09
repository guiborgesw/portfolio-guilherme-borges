import styled from 'styled-components'

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 5rem 5.625rem;
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

export const WrapperSkill = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 960px;
`

export const SkillItem = styled.article`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 1.25rem;
  background: rgba(10, 15, 28, 0.6);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(37, 99, 235, 0.25);
  border-radius: 0.75rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    border-color: rgba(37, 99, 235, 0.6);
    box-shadow: 0 0 24px rgba(37, 99, 235, 0.15);
  }
`

export const SkillImg = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`

export const SkillRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
`

export const SkillTitle = styled.h3`
  font-family: 'Fira Code', monospace;
  font-size: 1rem;
  font-weight: 600;
  color: ${props => props.theme['white']};
`

export const ProgressBar = styled.progress`
  width: 100%;
  height: 8px;
  border: none;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.08);
  overflow: hidden;

  &::-webkit-progress-bar {
    background: rgba(255, 255, 255, 0.08);
    border-radius: 999px;
  }

  &::-webkit-progress-value {
    background: linear-gradient(to right, ${props => props.theme['blue-300']}, ${props => props.theme['blue-200']});
    border-radius: 999px;
  }

  &::-moz-progress-bar {
    background: linear-gradient(to right, ${props => props.theme['blue-300']}, ${props => props.theme['blue-200']});
    border-radius: 999px;
  }
`
export const Pipeline = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  max-width: 520px;

  @media (max-width: 1100px) {
    flex: none;
  }
`

export const PipelineTitle = styled.p`
  font-size: 0.75rem;
  color: ${props => props.theme['blue-500']};
  margin-bottom: 18px;
  letter-spacing: 0.05em;

  span {
    color: #3f4d6b;
  }
`

export const Node = styled.div<{ $deploy?: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 250px;
  padding: 13px 20px;
  background: rgba(10, 15, 28, 0.55);
  border: 1px solid ${({ $deploy }) => ($deploy ? 'rgba(76, 175, 125, 0.4)' : 'rgba(91, 140, 255, 0.28)')};
  border-radius: 9px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    border-color: ${({ $deploy }) => ($deploy ? 'rgba(76, 175, 125, 0.6)' : 'rgba(91, 140, 255, 0.6)')};
    box-shadow: 0 0 22px ${({ $deploy }) => ($deploy ? 'rgba(76, 175, 125, 0.15)' : 'rgba(37, 99, 235, 0.15)')};
  }
`

export const NodeIcon = styled.div<{ $deploy?: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 7px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ $deploy }) => ($deploy ? 'rgba(76, 175, 125, 0.12)' : 'rgba(70, 128, 219, 0.15)')};
  border: 1px solid ${({ $deploy }) => ($deploy ? 'rgba(76, 175, 125, 0.35)' : 'rgba(91, 140, 255, 0.25)')};
  color: ${({ $deploy, theme }) => ($deploy ? '#4caf7d' : theme['blue-200'])};
`

export const NodeLabel = styled.span`
  font-weight: 500;
  color: ${props => props.theme['white']};
`

export const NodeSub = styled.span<{ $deploy?: boolean }>`
  margin-left: auto;
  font-size: 0.72rem;
  color: ${({ $deploy, theme }) => ($deploy ? '#4caf7d' : theme['blue-500'])};
`

export const Arrow = styled.div`
  position: relative;
  width: 100%;
  height: 34px;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 8px;
    left: 50%;
    width: 1px;
    background: rgba(91, 140, 255, 0.4);
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 6px solid rgba(91, 140, 255, 0.6);
  }
`
