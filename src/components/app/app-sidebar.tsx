import * as React from 'react'

import { Link } from 'react-router-dom'
import { Skeleton } from '../ui/skeleton'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem
} from '@/components/ui/sidebar'
import { useAuth } from '@/hooks/use-auth'

import { Logo } from './app-logo'
import { SidebarMain } from './app-sidebar-main'
import { SidebarSecondary } from './app-sidebar-secondary'
import { SidebarUser } from './app-sidebar-user'

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {

  const { loading } = useAuth()

  const data = {
    sidebarSecondary: [],
  }

  return (
    <Sidebar collapsible='offcanvas' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <Link to='/' className='flex flex-col gap-3'>
              <Logo className='w-40' variant='light' />
              {loading ? (
                <Skeleton className='w-full p-2' />
              ) : (
                <p className='text-base font-semibold'>{import.meta.env.VITE_APP_NAME ?? 'Template App'}</p>
              )}
            </Link>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMain />
        <SidebarSecondary items={data.sidebarSecondary} className='mt-auto' />
      </SidebarContent>
      <SidebarFooter>
        <SidebarUser />
      </SidebarFooter>
    </Sidebar>
  )
}
