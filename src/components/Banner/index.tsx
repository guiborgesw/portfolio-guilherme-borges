import { Navbar } from '../Navbar'
import cvPdf from '../../assets/Guilherme-Borges-CV.pdf'
import { 
  Section, 
  StarsFar, 
  StarsNear, 
  OrbitSystem, 
  OrbitRing, 
  OrbitPlanet, 
  OrbitNode, 
  ContentWrapper, 
  Left, 
  Overline, 
  Name, 
  NameLast,
  Intro, 
  Actions, 
  PrimaryButton, 
  GhostButton,
  Carousel,
  CarouselScroll
} from './Banner.styles'

export type PipelineStep = {
  name: string
  icon: string
}

export function Banner() {

  const Pipeline: PipelineStep[] = [
    { name: 'React', icon: '/src/assets/ico_react.png' },
    { name: 'TypeScript', icon: '/src/assets/ico_typescript.png' },
    { name: 'NodeJS',     icon: '/src/assets/ico_nodejs.png' },
    { name: 'Rest API',   icon: '/src/assets/ico_restapi.png' },
    { name: 'Git',        icon: '/src/assets/ico_git.png' },
    { name: 'UX',         icon: '/src/assets/ico_ux.png' },
    { name: 'HTML',       icon: '/src/assets/ico_html5.png' },
    { name: 'CSS',        icon: '/src/assets/ico_css3.png' },
  ]

  return (
    <Section>
      <StarsFar />
      <StarsNear />

      <OrbitSystem>
        <OrbitRing />
        <OrbitRing $inner />
        <OrbitPlanet />
        <OrbitNode $top="8%" $left="50%" />
        <OrbitNode $top="50%" $left="100%" $size={6} $opacity={0.7} />
        <OrbitNode $top="85%" $left="25%" $size={5} $opacity={0.5} />
      </OrbitSystem>

      <Navbar />

      <ContentWrapper>
        <Left>
          <Overline>guilherme borges · software developer</Overline>

          <Name>
            GUILHERME
            <NameLast>BORGES</NameLast>
          </Name>

          <Intro>
            Construo sistemas web com <strong>TypeScript, React e Node.js</strong>.
            Foco em performance, arquitetura e código simples.
          </Intro>

          <Carousel aria-hidden="true">
            <CarouselScroll>
              {Pipeline.map((stack) => {
                return (
                  <li><img src={stack.icon} alt={stack.name} /></li>
                )
              })}
              {Pipeline.map((stack) => {
                return (
                  <li><img src={stack.icon} alt={stack.name} /></li>
                )
              })}
            </CarouselScroll>
          </Carousel>

          <Actions>
            <PrimaryButton href="#projetos">Ver Projetos</PrimaryButton>
            <GhostButton href={cvPdf} download="Guilherme-Borges-CV.pdf">
              Download CV
            </GhostButton>
          </Actions>
        </Left>
      </ContentWrapper>
    </Section>
  )
}