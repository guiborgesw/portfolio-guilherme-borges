import * as S from './Banner.styles'

export function Banner() {
  return (
    <S.Section>
      <S.Wrapper>
        <S.ContainerBox>
          <S.Title>Guilherme Borges</S.Title>
          <S.Subtitle>Software Developer</S.Subtitle>
        </S.ContainerBox>
        <S.Navigation>
          <S.Button
            href="/src/assets/img/Guilherme-Borges-CV.pdf"
            download="Guilherme-Borges-CV.pdf"
          >
            Download CV
          </S.Button>
          <S.Button href="#contatos">Contatos</S.Button>
        </S.Navigation>
      </S.Wrapper>
    </S.Section>
  )
}