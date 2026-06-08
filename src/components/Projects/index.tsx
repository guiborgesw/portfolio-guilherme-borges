import { projects } from '../../data/projects'
import * as S from './Projects.styles'

export function Projects() {
  return (
    <S.Section id="projetos">
      <S.Title>Projetos</S.Title>
      <S.WrapperCard>
        {projects.map((project) => (
          <S.Card key={project.name}>
            <S.CardThumb $bg={project.thumbBg}>
              <img src={project.image} alt={project.alt} />
            </S.CardThumb>
            <S.CardInfo>
              <S.CardTitle>{project.name}</S.CardTitle>
              <S.CardDescription>{project.description}</S.CardDescription>
              <S.StackList>
                {project.stack.map((tech) => (
                  <S.StackTag key={tech}>{tech}</S.StackTag>
                ))}
              </S.StackList>
              <S.CardButtons>
                <S.Button href={project.demoUrl} target="_blank" $variant="demo">▶ Demo</S.Button>
                <S.Button href={project.githubUrl} target="_blank" $variant="github">GitHub</S.Button>
              </S.CardButtons>
            </S.CardInfo>
          </S.Card>
        ))}
      </S.WrapperCard>
    </S.Section>
  )
}