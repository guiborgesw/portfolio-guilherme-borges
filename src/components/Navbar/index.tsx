import favicon from '../../assets/favicon.ico'
import { CvButton, Header, Logo, Nav, NavLink } from './Navbar.styles'

export function Navbar() {
  return (
    <Header>
      <Logo src={favicon} alt="Logo Guilherme Borges" />
      <Nav>
        <NavLink href="#">Home</NavLink>
        <NavLink href="#sobre">Sobre</NavLink>
        <NavLink href="#projetos">Projetos</NavLink>
        <NavLink href="#contatos">Contatos</NavLink>
        <CvButton
          href="/src/assets/img/Guilherme-Borges-CV.pdf"
          download="Guilherme-Borges-CV.pdf"
        >
          Download CV
        </CvButton>
      </Nav>
    </Header>
  )
}