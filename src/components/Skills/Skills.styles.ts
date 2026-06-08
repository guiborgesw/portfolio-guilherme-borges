import styled from 'styled-components'

export const Section = styled.section`
  background-color: ${props => props.theme['blue-500']};
  padding-top: 3rem;
  padding-bottom: 60px;
`

export const Title = styled.h2`
  font-family: 'Press Start 2P', sans-serif;
  color: ${props => props.theme['white']};
  text-align: center;
  margin-bottom: 2.5rem;
`

export const WrapperSkill = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;
`

export const SkillItem = styled.article`
  display: flex;
  align-items: center;
  font-family: 'Press Start 2P', sans-serif;
  font-size: 1.563rem;
  color: ${props => props.theme['white']};
  width: 26.875rem;
  margin-bottom: 2.5rem;

  &:nth-child(odd) {
    margin-right: 6.25rem;
  }
`

export const SkillImg = styled.div`
  align-content: center;
  width: 5.625rem;
  height: 5.625rem;
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
  justify-content: space-around;
  padding-left: 0.5rem;
`

export const SkillTitle = styled.h3`
  font-family: 'Press Start 2P', sans-serif;
  margin-bottom: 0.813rem;
  padding-left: 0.625rem;
  font-size: 1.25rem;
`

export const ProgressBar = styled.progress`
  background-color: ${props => props.theme['white']};
  border: 5px solid ${props => props.theme['black']};
  height: 1.875rem;
  width: 20rem;
  box-sizing: border-box;

  &::-webkit-progress-bar {
    background-color: ${props => props.theme['white']};
  }

  &::-webkit-progress-value {
    background-color: ${props => props.theme['blue-700']};
  }

  &::-moz-progress-bar {
    background-color: ${props => props.theme['blue-700']};
  }
`