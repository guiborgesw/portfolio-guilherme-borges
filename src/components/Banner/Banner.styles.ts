import styled from 'styled-components'
import background from '../../assets/img/main-background.gif'

export const Section = styled.section`
  box-sizing: border-box;
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  height: 52rem;
  border-bottom: 10px solid ${({ theme }) => theme.colors.black};
  padding-top: 7.188rem;
  padding-left: 5.625rem;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 40rem;
  min-width: 21rem;
`

export const Box = styled.div`
  margin-bottom: 2.5rem;
`

export const Title = styled.h1`
  font-family: 'Press Start 2P', sans-serif;
  font-size: 1.875rem;
  color: ${({ theme }) => theme.colors.blue300};
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.719);
  margin-bottom: 0.5rem;
`

export const Subtitle = styled.h2`
  font-family: 'Press Start 2P', sans-serif;
  font-size: 1.563rem;
  text-shadow: 4px 4px 0px rgba(0, 0, 0, 0.815);
  color: ${({ theme }) => theme.colors.white};
`

export const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
`

export const Button = styled.a`
  display: inline-block;
  background-color: ${({ theme }) => theme.colors.blue300};
  color: ${({ theme }) => theme.colors.white};
  box-shadow: 5px 5px 0px rgba(0, 0, 0, 0.829);
  padding: 1.125rem 1.25rem;
  text-decoration: none;
  cursor: pointer;
  transition: transform 100ms linear;
  font-family: ${({ theme }) => theme.fonts.primary};

  &:hover {
    background-color: ${({ theme }) => theme.colors.blue900};
    box-shadow: 0 5px ${({ theme }) => theme.colors.gray300};
    transform: scale(1.08);
  }
`