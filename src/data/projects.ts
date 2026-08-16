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
    name: 'Sparta',
    image: '/src/assets/preview-sparta.png',
    alt: 'Logo Projeto Sparta',
    description: 'Aplicação de gestão de hábitos com interface intuitiva e foco em produtividade e desenvolvimento pessoal.',
    stack: ['React', 'JavaScript', 'CSS Modules'],
    demoUrl: 'https://guiborgesw.github.io/Sparta/',
    githubUrl: 'https://github.com/guiborgesw/Sparta',
    thumbBg: '#f0f0f0',
  },
  {
    name: 'Ignite Timer',
    image: '/src/assets/preview-timer.png',
    alt: 'Logo Projeto Ignite Timer',
    description: 'Aplicação de cronômetro inteligente com interface intuitiva e foco em gestão do tempo, foco e produtividade pessoal.',
    stack: ['React', 'TypeScript', 'Styled Components'],
    demoUrl: '',
    githubUrl: 'https://github.com/guiborgesw/Ignite-Timer',
    thumbBg: '#f0f0f0',
  },
]