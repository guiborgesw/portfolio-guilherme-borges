import { useState } from 'react'
import { timeline } from '../../data/timeline'
import * as S from './About.styles'

export function About() {
  const [pixels, setPixels] = useState(0)

  function handlePrev() {
    setPixels((prev) => prev + 50)
  }

  function handleNext() {
    setPixels((prev) => prev - 50)
  }

  return (
    <S.Section id="sobre">
      <S.Title>Sobre</S.Title>

      <S.Carousel>
        <S.ButtonArrow $direction="left" onClick={handlePrev}>
          <span style={{ display: 'none' }}>Voltar</span>
        </S.ButtonArrow>

        <S.Items>
          <S.Elements $offset={pixels}>
            {timeline.map((item) => (
              <S.NodeCard key={item.alt}>
                <S.NodeYear>{item.year}</S.NodeYear>
                <S.NodeLogo>
                  <img src={item.logo} alt={item.alt} />
                </S.NodeLogo>
              </S.NodeCard>
            ))}
          </S.Elements>
        </S.Items>

        <S.ButtonArrow $direction="right" onClick={handleNext}>
          <span style={{ display: 'none' }}>Avançar</span>
        </S.ButtonArrow>
      </S.Carousel>

      <S.Description>
        Sou <strong>Guilherme Borges</strong>, <strong>Software Developer</strong> com{' '}
        <strong>experiência prática em JavaScript, TypeScript, React.js e Node.js</strong>,
        atuando no desenvolvimento de aplicações modernas, performáticas e bem estruturadas.
        Tenho também <strong>experiência com REST APIs, Azure DevOps e Docker</strong>, além
        de conhecimentos em <strong>UX/UI Design</strong>, criando interfaces intuitivas,
        acessíveis e centradas na experiência do usuário.
        <br /><br />
        Ao longo da minha trajetória, participei de projetos reais aplicando lógica de
        programação, integração com APIs, desenvolvimento responsivo e boas práticas de
        versionamento com Git e GitHub. Busco constantemente aprimorar minhas{' '}
        <strong>hard skills e soft skills</strong>, com foco em resolução de problemas,
        trabalho em equipe e entrega de resultados de alto impacto.
      </S.Description>
    </S.Section>
  )
}