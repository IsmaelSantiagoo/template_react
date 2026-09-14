import { AuthProvider } from "./providers/AuthProvider";
import { ThemeProvider } from "next-themes";
import { RouterProvider } from "react-router-dom";
import { useIsMobile } from "./hooks/use-mobile";
import router from "./routes";
import { Toaster } from "./components/ui/sonner";

export default function App() {

  const isMobile = useIsMobile();

  return (
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
}