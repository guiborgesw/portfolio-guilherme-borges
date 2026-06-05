import styled from 'styled-components'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.black};
  padding-top: 3.125rem;
  padding-bottom: 6.25rem;
  border-bottom: 10px solid ${({ theme }) => theme.colors.blue300};
`

export const Title = styled.h2`
  font-family: 'Press Start 2P', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 3.75rem;
`

export const WrapperCard = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 2rem;
`

export const Card = styled.article`
  background-color: ${({ theme }) => theme.colors.blue500};
  width: 17.5rem;
  box-shadow: 10px 10px 0px ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column;
`

export const CardThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 17.5rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const CardInfo = styled.div`
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const CardTitle = styled.h3`
  font-family: 'Press Start 2P', sans-serif;
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.white};
`

export const CardDescription = styled.p`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.white};
  line-height: 1.8;
  opacity: 0.85;
`

export const StackList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`

export const StackTag = styled.span`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.5rem;
  color: ${({ theme }) => theme.colors.white};
  border: 2px solid ${({ theme }) => theme.colors.blue300};
  padding: 0.25rem 0.5rem;
`

export const CardButtons = styled.div`
  display: flex;
  gap: 0.75rem;
  margin-top: 0.5rem;
`

export const Button = styled.a`
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 0.5rem;
  padding: 0.625rem 0.875rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 100ms linear;
  background-color: ${({ theme }) => theme.colors.blue300};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 3px 3px 0px rgba(0, 0, 0, 0.829);

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue900};
    transform: scale(1.05);
  }
`