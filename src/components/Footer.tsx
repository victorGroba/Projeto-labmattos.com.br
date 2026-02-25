import {
  TestTube2,
  MapPin,
  Phone,
  Mail,
  Award,
  CheckCircle2,
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-mattos-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="bg-white/10 p-2 rounded-lg">
                <TestTube2 className="h-6 w-6 text-mattos-highlight" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold leading-none">
                  Laboratório Mattos
                </span>
                <span className="text-xs text-white/70">Mattos & Mattos</span>
              </div>
            </Link>

            <div className="space-y-4 text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-mattos-highlight shrink-0 mt-1" />
                <p>
                  Rua Euzébio de Queiros, 45
                  <br />
                  Centro, Niterói / RJ
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-mattos-highlight shrink-0" />
                <p>(21) 2717-1234 / (21) 99999-8888</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-mattos-highlight shrink-0" />
                <p>contato@laboratoriomattos.com.br</p>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b border-white/20 pb-2 inline-block">
              Links Rápidos
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-mattos-highlight transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#sobre"
                  className="text-gray-300 hover:text-mattos-highlight transition-colors"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  to="/servicos"
                  className="text-gray-300 hover:text-mattos-highlight transition-colors"
                >
                  Nossos Serviços
                </Link>
              </li>
              <li>
                <Link
                  to="/contato"
                  className="text-gray-300 hover:text-mattos-highlight transition-colors"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Certifications */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold border-b border-white/20 pb-2 inline-block">
              Certificações e Qualidade
            </h3>
            <p className="text-gray-300 text-sm mb-4">
              Compromisso com a excelência e conformidade com as principais
              normas do setor.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded hover:bg-white/20 transition-colors">
                <Award className="h-5 w-5 text-mattos-highlight" />
                <span className="font-semibold text-sm">CPA 1000</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded hover:bg-white/20 transition-colors">
                <CheckCircle2 className="h-5 w-5 text-mattos-highlight" />
                <span className="font-semibold text-sm">ABNT</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded hover:bg-white/20 transition-colors">
                <CheckCircle2 className="h-5 w-5 text-mattos-highlight" />
                <span className="font-semibold text-sm">INEA</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 p-3 rounded hover:bg-white/20 transition-colors">
                <CheckCircle2 className="h-5 w-5 text-mattos-highlight" />
                <span className="font-semibold text-sm">REBLAS</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400 text-center md:text-left">
            &copy; {new Date().getFullYear()} Laboratório Mattos. Todos os
            direitos reservados.
          </p>
          <p className="text-xs text-gray-500">
            Desenvolvido por{' '}
            <span className="font-semibold text-gray-400">Groba Tech</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
