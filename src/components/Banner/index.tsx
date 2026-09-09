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
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiSwagger,
  SiGit,
  SiFigma,
  SiHtml5,
  SiCss,
} from 'react-icons/si'
import type { IconType } from 'react-icons'

export type PipelineStep = {
  name: string
  icon: IconType
  color: string
}

export function Banner() {

  const Pipeline: PipelineStep[] = [
    { name: 'React',      icon: SiReact,      color: '#61DAFB' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    { name: 'NodeJS',     icon: SiNodedotjs,  color: '#5FA04E' },
    { name: 'Rest API',   icon: SiSwagger,    color: '#85EA2D' },
    { name: 'Git',        icon: SiGit,        color: '#F05032' },
    { name: 'UX',         icon: SiFigma,      color: '#F24E1E' },
    { name: 'HTML',       icon: SiHtml5,      color: '#E34F26' },
    { name: 'CSS',        icon: SiCss,        color: '#663399' },
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
                  <li key={stack.name}>
                    <stack.icon size={32} color={stack.color} />
                  </li>
                )
              })}
              {Pipeline.map((stack) => {
                return (
                  <li key={stack.name}>
                    <stack.icon size={32} color={stack.color} />
                  </li>
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