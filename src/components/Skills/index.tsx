import { skills } from '../../data/skills'
import { 
  Arrow, 
  Node, 
  NodeIcon, 
  NodeLabel, 
  NodeSub, 
  Pipeline, 
  PipelineTitle, 
  ProgressBar, 
  Section, 
  SkillImg, 
  SkillItem, 
  SkillRight, 
  SkillTitle, 
  Title, 
  WrapperSkill,
} from './Skills.styles'

import { Fragment } from 'react'
import {
  CodeIcon,
  AtomIcon,
  HexagonIcon,
  DatabaseIcon,
  CloudCheckIcon,
} from '@phosphor-icons/react'
import type { Icon } from '@phosphor-icons/react'

export type PipelineStep = {
  icon: Icon
  label: string
  sub: string
  deploy?: boolean
}

const pipeline: PipelineStep[] = [
  { icon: CodeIcon, label: 'typescript', sub: 'tipagem' },
  { icon: AtomIcon, label: 'react', sub: 'interface' },
  { icon: HexagonIcon, label: 'node', sub: 'api' },
  { icon: DatabaseIcon, label: 'postgresql', sub: 'dados' },
  { icon: CloudCheckIcon, label: 'deploy', sub: 'docker · azure', deploy: true },
]

export function Skills() {
  return (
    <Section id="skills">
      <Title>Skills</Title>

      <Pipeline>
          <PipelineTitle>
            <span>//</span> como eu construo
          </PipelineTitle>

          {pipeline.map((step, index) => (
            <Fragment key={step.label}>
              {index > 0 && <Arrow />}
              <Node $deploy={step.deploy}>
                <NodeIcon $deploy={step.deploy}>
                  <step.icon size={17} weight="bold" />
                </NodeIcon>
                <NodeLabel>{step.label}</NodeLabel>
                <NodeSub $deploy={step.deploy}>{step.sub}</NodeSub>
              </Node>
            </Fragment>
          ))}
        </Pipeline>
      <WrapperSkill>
        {skills.map((skill) => (
          <SkillItem key={skill.name}>
            <SkillImg>
              <img src={skill.icon} alt={skill.name} />
            </SkillImg>
            <SkillRight>
              <SkillTitle>{skill.name}</SkillTitle>
              <ProgressBar value={skill.value} max={100}>
                {skill.value}%
              </ProgressBar>
            </SkillRight>
          </SkillItem>
        ))}
      </WrapperSkill>
    </Section>
  )
}