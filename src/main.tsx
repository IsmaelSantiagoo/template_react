import { createRoot } from 'react-dom/client'

import { RouterProvider } from 'react-router-dom'

import { Toaster } from './components/ui/sonner'
import './index.css'
import { AuthProvider } from './providers/AuthProvider'
import ThemeProvider from './providers/ThemeProvider'
import router from './routes'
import { useIsMobile } from './hooks/use-mobile'

// valida se está usando mobile ou web
const isMobile = useIsMobile();

createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <ThemeProvider defaultTheme='light' storageKey='theme'>
      <RouterProvider router={router} />

      <Toaster
        className='pointer-events-auto'
        position={isMobile ? 'top-center' : 'bottom-right'}
        visibleToasts={3}
        expand={false}
        richColors
        toastOptions={{
          classNames: {
            toast:
              `${isMobile ? '!bg-primary' : '!bg-neutral-100'} border ${isMobile ? '!border-primary' : '!border-neutral-200'} dark:!bg-neutral-800 dark:!border-neutral-700 mt-14`,
          },
        }}
      />
    </ThemeProvider>
  </AuthProvider>
)
