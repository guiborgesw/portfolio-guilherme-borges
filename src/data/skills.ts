export type Skill = {
  name: string
  icon: string
  value: number
}

export const skills: Skill[] = [
  { name: 'HTML',       icon: '/src/assets/ico_html5.png',      value: 95 },
  { name: 'TypeScript', icon: '/src/assets/ico_typescript.png',  value: 80 },
  { name: 'CSS',        icon: '/src/assets/ico_css3.png',        value: 94 },
  { name: 'NodeJS',     icon: '/src/assets/ico_nodejs.png',      value: 73 },
  { name: 'JavaScript', icon: '/src/assets/ico_js.png',          value: 84 },
  { name: 'UX',         icon: '/src/assets/ico_ux.png',          value: 72 },
  { name: 'React',      icon: '/src/assets/ico_react.png',       value: 86 },
  { name: 'Rest API',   icon: '/src/assets/ico_restapi.png',     value: 81 },
  { name: 'Git',        icon: '/src/assets/ico_git.png',         value: 89 },
]