import { Outlet } from 'react-router-dom'
import { SiteFooter } from './SiteFooter'
import { SiteHeader } from './SiteHeader'

export function Layout() {
  return (
    <>
      <SiteHeader />
      <main className="container" style={{ padding: '28px 0 56px' }}>
        <Outlet />
      </main>
      <SiteFooter />
    </>
  )
}

