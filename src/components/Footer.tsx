import {
  MapPin,
  Phone,
  Instagram,
  Facebook,
  Linkedin
} from 'lucide-react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="bg-[#333333] pt-12 flex flex-col font-sans">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-10 lg:gap-8 mb-10">

          {/* Column 1: Logo & Socials */}
          <div className="flex flex-col items-center lg:items-start space-y-4">
            <Link to="/" className="inline-block">
              <img
                src="/assets/logo_mattos.png"
                alt="Laboratório Mattos"
                className="h-16 w-auto object-contain filter brightness-0 invert"
              />
            </Link>
            <div className="flex gap-4 pt-1">
              <a href="https://www.instagram.com/labmattos/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#333333] p-2.5 rounded-full hover:scale-105 hover:bg-gray-100 transition-all shadow-sm flex items-center justify-center">
                <Instagram className="h-[1.2rem] w-[1.2rem] stroke-[2.5]" />
              </a>
              <a href="https://www.facebook.com/labmattos/mentions/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#333333] p-2.5 rounded-full hover:scale-105 hover:bg-gray-100 transition-all shadow-sm flex items-center justify-center">
                <Facebook className="h-[1.2rem] w-[1.2rem] stroke-[2.5]" />
              </a>
              <a href="https://www.linkedin.com/company/grupo-mattos-e-mattos/" target="_blank" rel="noopener noreferrer" className="bg-white text-[#333333] p-2.5 rounded-full hover:scale-105 hover:bg-gray-100 transition-all shadow-sm flex items-center justify-center">
                <Linkedin className="h-[1.2rem] w-[1.2rem] stroke-[2.5]" />
              </a>
            </div>
          </div>

          {/* Column 2: Contact Info */}
          <div className="flex flex-col space-y-3 max-w-md lg:ml-8">
            <h3 className="text-[#32CD32] font-bold text-lg mb-1">
              Rio de Janeiro
            </h3>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-[#32CD32] shrink-0 mt-0.5" />
              <p className="text-white text-sm leading-snug">
                Rua Euzébio de Queiros, 45 - Centro,<br />
                Niterói / RJ
              </p>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-[#32CD32] shrink-0 mt-0.5 flex-none" />
              <p className="text-white text-sm leading-snug">
                (21) 2613-1636 / (21) 2622-8163 / (11)<br />3237-5026
              </p>
            </div>
          </div>

          {/* Column 3: Certifications */}
          <div className="flex flex-wrap justify-center items-center gap-6 lg:gap-8 flex-1">
            <img src="/assets/abnt.png" alt="CRL 1000" className="h-[4.5rem] w-auto object-contain" />
            <img src="/assets/abnt2.png" alt="ABNT" className="h-16 w-auto object-contain" />
            <img src="/assets/inea.png" alt="INEA" className="h-[2.5rem] w-auto object-contain" />
            <img src="/assets/reblas.png" alt="REBLAS" className="h-[2.5rem] w-auto object-contain" />
          </div>

        </div>
      </div>

      {/* Bottom Black Bar */}
      <div className="bg-black py-4 mt-auto">
        <div className="container mx-auto px-4 lg:px-8 max-w-7xl flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
          <p className="text-white text-xs font-medium">
            Todos os direitos reservados ao Laboratório Mattos & Mattos.
          </p>
          <a href="https://wa.me/5521972706086" target="_blank" rel="noopener noreferrer" className="flex items-center hover:opacity-90 transition-all bg-white/95 px-3 py-1.5 rounded-lg shadow-sm border border-white/20">
            <img
              src="/assets/groba.png"
              alt="Groba Tech"
              className="h-5 w-auto object-contain"
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
