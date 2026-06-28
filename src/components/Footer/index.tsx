import linkedinIcon from '../../assets/ico_linkedin.png'
import * as S from './Footer.styles'

export function Footer() {
  return (
    <S.FooterWrapper>
      <S.FooterLink
        href="https://www.linkedin.com/in/guiborgesw/"
        target="_blank"
        rel="noreferrer"
      >
        <S.FooterIcon src={linkedinIcon} alt="Logo do LinkedIn em pixel art" />
      </S.FooterLink>
    </S.FooterWrapper>
  )
}