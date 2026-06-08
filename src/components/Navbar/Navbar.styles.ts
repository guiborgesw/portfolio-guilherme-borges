import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${props => props.theme['blue-900']};
  border-bottom: 10px solid ${props => props.theme['black']};
  padding: 1.25rem 1.25rem;
  position: sticky;
  top: 0;
  z-index: 100;
`

export const Logo = styled.img`
  width: 48px;
  height: 48px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme['white']};
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  margin-right: 1.875rem;

  &::before {
    content: '';
    background-color: ${props => props.theme['blue-300']};
    width: 0.625rem;
    height: 0.625rem;
    margin-right: 0.625rem;
    display: inline-block;
  }

  &:hover {
    color: ${props => props.theme['blue-300']};
    transform: scale(1.08);
  }
`

export const CvButton = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 500;
  background: ${props => props.theme['blue-300']};
  color: ${props => props.theme['white']};
  padding: 1.125rem 1.25rem;
  text-decoration: none;

  &:hover {
    background: ${props => props.theme['blue-500']};
  }
`