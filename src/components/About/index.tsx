import { timeline } from '../../data/timeline'
import { 
  Section, 
  Title, 
  TimelineWrapper, 
  TimelineLine, 
  TimelineItems, 
  NodeCard, 
  NodeYear, 
  NodeLogo, 
  Description,
  Paragraph, 
  Highlight,
 } from './About.styles'

export function About() {
  return (
    <Section id="sobre">
      <Title>Sobre</Title>

      <TimelineWrapper>
        <TimelineLine />
        <TimelineItems>
          {timeline.map((item) => (
            <NodeCard key={item.alt}>
              <NodeYear>{item.year}</NodeYear>
              <NodeLogo>
                <img src={item.logo} alt={item.alt} />
              </NodeLogo>
            </NodeCard>
          ))}
        </TimelineItems>
      </TimelineWrapper>

      <Description>
        <Paragraph>
          Sou <strong>Guilherme Borges, Software Developer</strong> com experiência prática em{' '}
          <Highlight>JavaScript, TypeScript, React.js e Node.js</Highlight>, atuando no
          desenvolvimento de aplicações modernas, performáticas e bem estruturadas. Tenho também
          experiência com <Highlight>REST APIs, Azure DevOps e Docker</Highlight>, além de
          conhecimentos em UX/UI Design, criando interfaces intuitivas, acessíveis e centradas na
          experiência do usuário.
        </Paragraph>
        <Paragraph>
          Ao longo da minha trajetória, participei de projetos reais aplicando lógica de
          programação, integração com APIs, desenvolvimento responsivo e boas práticas de
          versionamento com Git e GitHub. Busco constantemente aprimorar minhas{' '}
          <strong>hard skills e soft skills</strong>, com foco em resolução de problemas, trabalho
          em equipe e entrega de resultados de alto impacto.
        </Paragraph>
      </Description>
    </Section>
  )
}
