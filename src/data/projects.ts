export type Project = {
  name: string
  image: string
  alt: string
  description: string
  stack: string[]
  demoUrl: string
  githubUrl: string
}

export const projects: Project[] = [
  {
    name: 'Café Chilling',
    image: '/src/assets/img/Café chilling.png',
    alt: 'Logo Café Chilling',
    description: 'Aplicação de gestão de projetos com interface intuitiva e foco em produtividade.',
    stack: ['React', 'TypeScript', 'Node.js'],
    demoUrl: '',
    githubUrl: '',
  },
  {
    name: 'Duck Chest',
    image: '/src/assets/img/Duck Chest.png',
    alt: 'Logo Duck Chest',
    description: 'Plataforma desenvolvida com foco em experiência do usuário e boas práticas de código.',
    stack: ['React', 'TypeScript', 'REST API'],
    demoUrl: '',
    githubUrl: '',
  },
]