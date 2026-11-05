import previewSparta from '../assets/preview-sparta.png'
import previewTimer from '../assets/preview-timer.png'
import previewDtMoney from '../assets/preview-dt-money.png'

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
    image: previewSparta,
    alt: 'Logo Projeto Sparta',
    description: 'Aplicação de gestão de hábitos com interface intuitiva e foco em produtividade e desenvolvimento pessoal.',
    stack: ['React', 'Typescript', 'CSS Modules'],
    demoUrl: 'https://guiborgesw.github.io/Sparta/',
    githubUrl: 'https://github.com/guiborgesw/Sparta',
    thumbBg: '#f0f0f0',
  },
  {
    name: 'Ignite Timer',
    image: previewTimer,
    alt: 'Logo Projeto Ignite Timer',
    description: 'Aplicação de cronômetro inteligente com interface intuitiva e foco em gestão do tempo, foco e produtividade pessoal.',
    stack: ['React', 'TypeScript', 'Styled Components'],
    demoUrl: 'https://ignite-timer-eta-lilac.vercel.app/',
    githubUrl: 'https://github.com/guiborgesw/Ignite-Timer',
    thumbBg: '#f0f0f0',
  },
  {
    name: 'DT Money',
    image: previewDtMoney,
    alt: 'Interface do projeto DT Money',
    description: 'Aplicação de controle financeiro para registrar entradas e saídas, com cálculo de saldo em tempo real, busca e histórico de transações.',
    stack: ['React', 'TypeScript', 'Styled Components'],
    demoUrl: 'https://guiborgesw.github.io/DT-Money/',
    githubUrl: 'https://github.com/guiborgesw/DT-Money',
    thumbBg: '#202024',
  },
]