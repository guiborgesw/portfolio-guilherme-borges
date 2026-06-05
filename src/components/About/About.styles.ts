import styled from 'styled-components'

export const Section = styled.section`
  background-color: ${({ theme }) => theme.colors.blue700};
  padding-top: 3.125rem;
  padding-bottom: 6.25rem;
  border-bottom: 10px solid ${({ theme }) => theme.colors.black};
`

export const Title = styled.h2`
  font-family: 'Press Start 2P', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  text-align: center;
  margin-bottom: 3.75rem;
`

export const Carousel = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  padding-left: 5.313rem;
  padding-right: 5.313rem;

  &::after {
    content: '';
    position: absolute;
    left: 3.125rem;
    top: 2.375rem;
    display: block;
    height: 0.375rem;
    width: calc(100% - 100px);
    background-color: ${({ theme }) => theme.colors.black};
  }

  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    left: 0;
    top: 2.375rem;
    display: block;
    border: 3px dashed ${({ theme }) => theme.colors.black};
    width: 100%;
  }
`

export const Items = styled.div`
  width: 100%;
  overflow: hidden;
`

export const Elements = styled.div<{ $offset: number }>`
  display: flex;
  justify-content: space-evenly;
  transition: transform 100ms ease-in-out;
  transform: translateX(${({ $offset }) => $offset}px);
`

export const NodeCard = styled.figure`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  flex-shrink: 0;
  width: 25%;

  &::before {
    content: '';
    position: absolute;
    box-sizing: border-box;
    width: 2.5rem;
    border: 2.5px dashed ${({ theme }) => theme.colors.black};
    transform: rotate(90deg) translateX(-62%);
    bottom: 8.75rem;
  }
`

export const NodeYear = styled.figcaption`
  font-family: 'Press Start 2P', sans-serif;
  font-size: 1.563rem;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 3.125rem;
`

export const NodeLogo = styled.div`
  display: flex;
  align-items: center;
  height: 8.75rem;
  border: 5px solid ${({ theme }) => theme.colors.black};
  padding-left: 1.25rem;
  padding-right: 1.25rem;
  background-color: ${({ theme }) => theme.colors.white};

  img {
    max-height: 100%;
    max-width: 9rem;
    object-fit: contain;
  }
`

export const ButtonArrow = styled.button<{ $direction: 'left' | 'right' }>`
  width: 3.125rem;
  height: 3.125rem;
  background-color: ${({ theme }) => theme.colors.blue300};
  box-shadow: 5px 5px 0px ${({ theme }) => theme.colors.black};
  cursor: pointer;
  border: none;
  position: absolute;
  bottom: 4.375rem;
  transform: translateY(50%);
  ${({ $direction }) => $direction === 'left' ? 'left: 0.938rem;' : 'right: 0.938rem;'}

  &::before {
    content: '';
    display: block;
    box-sizing: border-box;
    width: 0.938rem;
    height: 0.938rem;
    border: 15px solid transparent;
    border-left: 28px solid ${({ theme }) => theme.colors.white};
    transform: ${({ $direction }) =>
      $direction === 'left'
        ? 'rotate(180deg) translateX(12px)'
        : 'translateX(5px)'};
  }
`

export const Description = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.438rem;
  font-weight: 300;
  line-height: 1.3;
  padding: 3.125rem 3.125rem 0;
`