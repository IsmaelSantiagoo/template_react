import { Outlet } from 'react-router';

import { AppHeader } from '@/components/app/mobile/mobile-app-header';
import { MobileHeaderProvider } from '@/providers/mobile/MobileHeaderProvider';

export default function MobileLayout() {

  return (
    <MobileHeaderProvider>
      <div className='fixed inset-0 flex flex-col overflow-hidden bg-slate-50'>
        <AppHeader />
        <main className='flex flex-1 flex-col min-h-0'>
          <div className='@container/main flex flex-1 flex-col min-h-0 w-full p-4'>
            <Outlet />
          </div>
        </main>
      </div>
    </MobileHeaderProvider>
  )
}
