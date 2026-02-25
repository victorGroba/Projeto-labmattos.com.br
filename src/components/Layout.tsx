import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 pt-[72px]">
        {' '}
        {/* Add padding top to account for fixed header */}
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  )
}
