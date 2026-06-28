export type Project = {
  name: string
  image: string
  alt: string
  description: string
  stack: string[]
  demoUrl: string
  githubUrl: string
  thumbBg: string
}

export const projects: Project[] = [
  {
    name: 'Café Chilling',
    image: '/src/assets/Café chilling.png',
    alt: 'Logo Café Chilling',
    description: 'Aplicação de gestão de projetos com interface intuitiva e foco em produtividade.',
    stack: ['React', 'TypeScript', 'Node.js'],
    demoUrl: '',
    githubUrl: 'https://github.com/guiborgesw',
    thumbBg: '#f0f0f0',
  },
  {
    name: 'Duck Chest',
    image: '/src/assets/Duck Chest.png',
    alt: 'Logo Duck Chest',
    description: 'Plataforma desenvolvida com foco em experiência do usuário e boas práticas de código.',
    stack: ['React', 'TypeScript', 'REST API'],
    demoUrl: '',
    githubUrl: 'https://github.com/guiborgesw',
    thumbBg: '#f0f0f0',
  },
]