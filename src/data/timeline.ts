import logoLuft from '../assets/Logo-LuftLogistics.png'
import logoCamp from '../assets/Logo-Camp.png'
import logoGRSA from '../assets/Logo-GRSA.png'
import logoGPS from '../assets/Logo-GrupoGPS.png'

export type TimelineItem = {
  year: string
  logo: string
  alt: string
}

export const timeline: TimelineItem[] = [
  { year: '2023', logo: logoLuft, alt: 'Logo Luft Logistics' },
  { year: '2024', logo: logoCamp, alt: 'Logo CAMP Pinheiros' },
  { year: '2024-2025', logo: logoGRSA, alt: 'Logo GRSA' },
  { year: '2025-2026', logo: logoGPS, alt: 'Logo Grupo GPS' },
]