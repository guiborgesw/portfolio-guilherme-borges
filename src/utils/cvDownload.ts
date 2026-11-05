import type { MouseEvent } from 'react'
import cvPdf from '../assets/Guilherme-Borges-CV.pdf'
import { isIosDevice } from './device'

export const CV_FILENAME = 'Guilherme-Borges-CV.pdf'

/**
 * O Safari do iOS ignora o atributo `download` em links same-origin:
 * o clique não baixa nada. Lá, abrimos o PDF no visualizador do próprio
 * Safari — de lá o usuário usa "Compartilhar → Salvar em Arquivos".
 * Nos outros navegadores (desktop, Android) o `download` nativo funciona,
 * então a função não interfere.
 */
export function handleCvDownload(event: MouseEvent<HTMLAnchorElement>) {
  const isIos = isIosDevice(
    navigator.userAgent,
    navigator.platform,
    navigator.maxTouchPoints ?? 0,
  )

  if (!isIos) return

  event.preventDefault()
  window.open(cvPdf, '_blank', 'noopener,noreferrer')
}
