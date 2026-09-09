import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: min(90%, 980px);
  border-radius: 999px;
  padding: 1rem 1.25rem;  
  background: #0a0f1c5d;
  backdrop-filter: blur(15px);
  border: 1px solid rgba(91, 140, 255, 0.25);
  box-shadow: 0px 0px 23px #2563EB;
  position: sticky;
  top: 20px;
  margin: 0 auto;
  z-index: 100;
`

export const Logo = styled.img`
  width: 48px;
  height: 48px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  padding: 0 10px 0 10px;
`

export const NavLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: ${props => props.theme['white']};
  font-size: 1.25rem;
  font-weight: 500;
  text-decoration: none;
  margin-right: 1.875rem;

  &:hover {
    color: ${props => props.theme['blue-100']};
    transform: scale(1.06);
  }
`

export const CvButton = styled.a`
  display: inline-flex;
  align-items: center;
  font-size: 1rem;
  font-weight: 600;
  background: ${props => props.theme['blue-300']};
  color: ${props => props.theme['white']};
  padding: 0.625rem 1.25rem;
  border-radius: 999px;
  text-decoration: none;
  white-space: nowrap;
  transition: background 0.2s ease, transform 0.15s ease;

  &:hover {
    background: ${props => props.theme['blue-100']};
    transform: translateY(-1px);
  }
`