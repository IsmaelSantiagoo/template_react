import { MobileHeaderContext } from '@/providers/mobile/MobileHeaderProvider'
import { useContext } from 'react'

export function useMobileHeader() {
  const context = useContext(MobileHeaderContext)

  if (!context) {
    throw new Error('useMobileHeader deve ser usado dentro de HeaderProvider')
  }

  return context
}
