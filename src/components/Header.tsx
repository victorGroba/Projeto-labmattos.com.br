import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, FileText } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'

const NavLink = ({
  to,
  children,
  className,
}: {
  to: string
  children: React.ReactNode
  className?: string
}) => {
  const location = useLocation()
  const isHash = to.startsWith('/#') || to.startsWith('#')
  const path = isHash ? '/' : to
  const isActive = location.pathname === path && !isHash

  return (
    <Link
      to={to}
      className={cn(
        'relative text-sm font-medium tracking-wide transition-colors duration-300 group py-2 px-1',
        isActive ? 'text-mattos-primary' : 'text-gray-600 hover:text-mattos-dark',
        className,
      )}
    >
      {children}
      {/* Subtle Dot Indicator for active/hover states */}
      <span className={cn(
        "absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-mattos-primary transition-all duration-300",
        isActive ? "opacity-100 scale-100" : "opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100"
      )}></span>
    </Link>
  )
}

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Quem somos', href: '/sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Notícias', href: '/noticias' },
    { label: 'Clientes', href: '/#clientes' },
    { label: 'Contato', href: '/contato' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 flex justify-center',
        scrolled ? 'pt-4 md:pt-6' : 'pt-6 md:pt-8'
      )}
    >
      <div className={cn(
        "px-6 md:px-8 flex items-center justify-between transition-all duration-700 rounded-full",
        scrolled
          ? "w-[95%] md:w-[85%] max-w-7xl bg-white/80 backdrop-blur-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white/60 py-2.5"
          : "w-[98%] md:w-[95%] max-w-7xl bg-white/95 backdrop-blur-md shadow-sm border border-transparent py-4 md:py-5"
      )}>

        {/* Logo do Laboratório (AGORA BEM MAIOR) */}
        <Link to="/" className="flex items-center group transition-transform hover:scale-105 duration-300">
          <img
            src="/assets/logo_mattos.png"
            alt="Logo Laboratório Mattos"
            className={cn(
              "w-auto object-contain transition-all duration-700",
              scrolled ? "h-10 md:h-12" : "h-14 md:h-16"
            )}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavLink key={item.href} to={item.href}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <Button
            className="relative group overflow-hidden bg-gradient-to-br from-[#4bc6d4] to-mattos-primary text-white transition-all font-semibold rounded-full px-7 py-5 shadow-[0_8px_20px_-6px_rgba(75,198,212,0.4)] hover:shadow-[0_12px_25px_-4px_rgba(50,205,50,0.5)] hover:-translate-y-0.5 duration-300 border border-white/20"
            asChild
          >
            <Link
              to="/login"
              className="flex items-center gap-2"
            >
              <FileText className="w-4 h-4 text-white/90 group-hover:text-white transition-colors" />
              <span className="relative z-10 tracking-wide">Resultados</span>
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
            </Link>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-700 hover:text-mattos-dark hover:bg-gray-100 rounded-full transition-colors">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col bg-white">

              {/* Logo dentro do Menu Mobile (TAMANHO AUMENTADO AQUI TAMBÉM) */}
              <div className="mt-6 border-b border-gray-100 pb-6 mb-6">
                <img
                  src="/assets/logo_mattos.png"
                  alt="Logo Laboratório Mattos"
                  className="h-24 w-auto object-contain"
                />
              </div>

              <div className="flex flex-col gap-6 flex-1">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        to={item.href}
                        className="text-lg font-medium text-gray-700 hover:text-mattos-primary hover:bg-gray-50 transition-colors py-3 px-4 rounded-lg"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <div className="mt-auto pb-8">
                  <SheetClose asChild>
                    <Button
                      size="lg"
                      className="w-full bg-mattos-primary hover:bg-mattos-dark text-white rounded-xl shadow-md flex items-center justify-center gap-2"
                      asChild
                    >
                      <Link
                        to="/login"
                      >
                        <FileText className="w-5 h-5" />
                        Ver Resultados
                      </Link>
                    </Button>
                  </SheetClose>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}