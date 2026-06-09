import { Outlet, ScrollRestoration } from 'react-router-dom'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { FloatingWhatsApp } from '@/components/FloatingWhatsApp'

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {' '}
        {/* Padding removido para permitir que banners peguem a tela inteira (edge-to-edge) */}
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollRestoration />
    </div>
  )
}
