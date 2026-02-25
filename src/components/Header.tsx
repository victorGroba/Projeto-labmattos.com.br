import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, TestTube2 } from 'lucide-react'
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
        'text-sm font-medium transition-colors hover:text-mattos-primary',
        isActive ? 'text-mattos-primary font-semibold' : 'text-gray-600',
        className,
      )}
    >
      {children}
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
    { label: 'Quem somos', href: '/#sobre' },
    { label: 'Serviços', href: '/servicos' },
    { label: 'Clientes', href: '/#clientes' },
    { label: 'Contato', href: '/contato' },
  ]

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent',
        scrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-3'
          : 'bg-white/50 backdrop-blur-sm py-5',
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="bg-mattos-dark text-white p-2 rounded-lg group-hover:bg-mattos-primary transition-colors">
            <TestTube2 className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-mattos-dark leading-none">
              Laboratório Mattos
            </span>
            <span className="text-xs text-mattos-text/80 font-medium">
              Mattos & Mattos
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <NavLink key={item.href} to={item.href}>
              {item.label}
            </NavLink>
          ))}
          <Button
            variant="outline"
            className="border-2 border-mattos-primary text-mattos-primary hover:bg-mattos-primary hover:text-white transition-all font-semibold ml-4 rounded-full px-6"
            asChild
          >
            <a
              href="https://resultados.laboratoriomattos.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resultados
            </a>
          </Button>
        </nav>

        {/* Mobile Nav */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-mattos-dark">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 mt-10">
                <div className="flex flex-col gap-4">
                  {navItems.map((item) => (
                    <SheetClose key={item.href} asChild>
                      <Link
                        to={item.href}
                        className="text-lg font-medium text-mattos-dark hover:text-mattos-primary transition-colors py-2 border-b border-gray-100"
                      >
                        {item.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>
                <SheetClose asChild>
                  <Button
                    className="bg-mattos-primary hover:bg-mattos-highlight text-white w-full rounded-full"
                    asChild
                  >
                    <a
                      href="https://resultados.laboratoriomattos.com.br"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Resultados
                    </a>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
