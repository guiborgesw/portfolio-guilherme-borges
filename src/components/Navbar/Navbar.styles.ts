import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.blue900};
  border-bottom: 10px solid ${({ theme }) => theme.colors.black};
  padding: 0.625rem 1.25rem;
  position: sticky;
  top: 0;
  z-index: 100;
`

export const Logo = styled.img`
  width: 36px;
  height: 36px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.25rem;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-weight: 500;
  text-decoration: none;
  margin-right: 1.875rem;

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.colors.blue300};
    width: 0.625rem;
    height: 0.625rem;
    margin-right: 0.625rem;
    display: inline-block;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.blue300};
    transform: scale(1.08);
  }
`

export const CvButton = styled.a`
  display: inline-flex;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.primary};
  font-size: 1.25rem;
  font-weight: 500;
  background: ${({ theme }) => theme.colors.blue300};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.5rem 1rem;
  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.blue500};
  }
`