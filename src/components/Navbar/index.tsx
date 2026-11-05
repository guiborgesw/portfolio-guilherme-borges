import favicon from '../../assets/favicon.ico'
import cvPdf from '../../assets/Guilherme-Borges-CV.pdf'
import { CV_FILENAME, handleCvDownload } from '../../utils/cvDownload'
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
          href={cvPdf}
          download={CV_FILENAME}
          onClick={handleCvDownload}
        >
          Download CV
        </CvButton>
      </Nav>
    </Header>
  )
}