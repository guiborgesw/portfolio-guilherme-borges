import { projects } from '../../data/projects'
import { 
  Button, 
  Card, 
  CardButtons, 
  CardDescription, 
  CardInfo, 
  CardThumb, 
  CardTitle, 
  Section, 
  StackList, 
  StackTag, 
  Title, 
  WrapperCard,
} from './Projects.styles'

export function Projects() {
  return (
    <Section id="projetos">
      <Title>Projetos</Title>
      <WrapperCard>
        {projects.map((project) => (
          <Card key={project.name}>
            <CardThumb $bg={project.thumbBg}>
              <img src={project.image} alt={project.alt} />
            </CardThumb>
            <CardInfo>
              <CardTitle>{project.name}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
              <StackList>
                {project.stack.map((tech) => (
                  <StackTag key={tech}>{tech}</StackTag>
                ))}
              </StackList>
              <CardButtons>
                <Button href={project.demoUrl} target="_blank" $variant="demo">▶ Demo</Button>
                <Button href={project.githubUrl} target="_blank" $variant="github">GitHub</Button>
              </CardButtons>
            </CardInfo>
          </Card>
        ))}
      </WrapperCard>
    </Section>
  )
}