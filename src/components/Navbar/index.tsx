import favicon from '../../assets/img/favicon.ico'

import * as S from './Navbar.styles'

export function Navbar() {
  return (
    <S.Header>
      <S.Logo src={favicon} alt="Logo Guilherme Borges" />
      <S.Nav>
        <S.NavLink href="#sobre">Sobre</S.NavLink>
        <S.NavLink href="#contatos">Contatos</S.NavLink>
        <S.NavLink href="#projetos">Projetos</S.NavLink>
        <S.CvButton
          href="/src/assets/img/Guilherme-Borges-CV.pdf"
          download="Guilherme-Borges-CV.pdf"
        >
          Download CV
        </S.CvButton>
      </S.Nav>
    </S.Header>
  )
}