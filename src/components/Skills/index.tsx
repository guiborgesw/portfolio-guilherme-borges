import { skills } from '../../data/skills'
import * as S from './Skills.styles'

export function Skills() {
  return (
    <S.Section id="skills">
      <S.Title>Skills</S.Title>
      <S.WrapperSkill>
        {skills.map((skill) => (
          <S.SkillItem key={skill.name}>
            <S.SkillImg>
              <img src={skill.icon} alt={skill.name} />
            </S.SkillImg>
            <S.SkillRight>
              <S.SkillTitle>{skill.name}</S.SkillTitle>
              <S.ProgressBar value={skill.value} max={100}>
                {skill.value}%
              </S.ProgressBar>
            </S.SkillRight>
          </S.SkillItem>
        ))}
      </S.WrapperSkill>
    </S.Section>
  )
}