import { createContext, type ReactNode, useState } from 'react'

type MobileHeaderContextData = {
  pageTitle: string | null
  setPageTitle: (title: string | null) => void
  pageDescription: string
  setPageDescription: (description: string) => void
  showBackButton: boolean
  setShowBackButton: (show: boolean) => void
  showLogoutButton: boolean
  setShowLogoutButton: (show: boolean) => void
}

export const MobileHeaderContext = createContext<MobileHeaderContextData | undefined>(undefined)

export function MobileHeaderProvider({ children }: { children: ReactNode }) {
  const [pageTitle, setPageTitle] = useState<string | null>(null)
  const [pageDescription, setPageDescription] = useState<string>('')
  const [showBackButton, setShowBackButton] = useState<boolean>(false)
  const [showLogoutButton, setShowLogoutButton] = useState<boolean>(false)

  return (
    <MobileHeaderContext.Provider value={{
      pageTitle,
      setPageTitle,
      pageDescription,
      setPageDescription,
      showBackButton,
      setShowBackButton,
      showLogoutButton,
      setShowLogoutButton,
    }}>{children}</MobileHeaderContext.Provider>
  )
}
