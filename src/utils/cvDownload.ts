import type { MouseEvent } from 'react'
import cvPdf from '../assets/Guilherme-Borges-CV.pdf'
import { isIosDevice } from './device'

export const CV_FILENAME = 'Guilherme-Borges-CV.pdf'

/**
 * O Safari do iOS ignora o atributo `download` em links same-origin:
 * o clique não baixa nada. 
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
