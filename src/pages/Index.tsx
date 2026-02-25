import {
  ArrowRight,
  Check,
  Activity,
  Microscope,
  Briefcase,
  Award,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage:
              "url('https://img.usecurling.com/p/1920/1080?q=modern%20laboratory&color=blue')",
          }}
        >
          <div className="absolute inset-0 bg-mattos-dark/60"></div>
        </div>

        <div className="container relative z-10 px-4 text-center md:text-left">
          <div className="max-w-3xl animate-fade-in">
            <h2 className="text-mattos-highlight font-medium text-lg mb-4 tracking-wider uppercase">
              Mattos & Mattos 26 anos ao seu lado
            </h2>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              A confiança que o tempo construiu,{' '}
              <br className="hidden md:block" />a precisão que a ciência
              confirma.
            </h1>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-mattos-primary hover:bg-mattos-highlight text-white text-lg px-8 py-6 rounded-lg transition-transform hover:scale-105"
                asChild
              >
                <Link to="/servicos">
                  Conheça nossos serviços
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sobre (Summary Section) */}
      <section id="sobre" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Collage */}
            <div className="relative h-[500px] w-full hidden md:block">
              <div className="absolute top-0 left-0 w-3/4 h-3/4 rounded-2xl overflow-hidden shadow-xl z-10">
                <img
                  src="https://img.usecurling.com/p/600/600?q=scientist%20microscope"
                  alt="Cientista analisando amostras"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-2xl overflow-hidden shadow-xl z-20 border-8 border-white">
                <img
                  src="https://img.usecurling.com/p/500/500?q=lab%20equipment"
                  alt="Equipamentos de laboratório"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-mattos-secondary w-32 h-32 rounded-full -z-0 opacity-50"></div>
            </div>

            {/* Mobile Image */}
            <div className="md:hidden rounded-2xl overflow-hidden shadow-lg mb-6">
              <img
                src="https://img.usecurling.com/p/800/500?q=laboratory%20team"
                alt="Equipe do laboratório"
                className="w-full h-auto"
              />
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div className="inline-block px-4 py-1 bg-mattos-secondary/30 rounded-full text-mattos-dark font-medium text-sm">
                Sobre Nós
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-mattos-dark">
                Tradição e Modernidade em Análises Clínicas e Ambientais
              </h2>
              <p className="text-mattos-text text-lg leading-relaxed">
                Há mais de duas décadas, o Laboratório Mattos se destaca pela
                excelência técnica e pelo compromisso inabalável com a
                qualidade. Nossa equipe altamente qualificada utiliza tecnologia
                de ponta para entregar resultados precisos e confiáveis.
              </p>

              <ul className="space-y-4 mt-6">
                {[
                  'Certificação de qualidade e conformidade normativa',
                  'Atendimento humanizado e personalizado',
                  'Tecnologia avançada para diagnósticos precisos',
                  'Equipe especializada com vasta experiência',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="bg-mattos-secondary/20 p-1 rounded-full">
                      <Check className="h-5 w-5 text-mattos-primary" />
                    </div>
                    <span className="text-mattos-text font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-4">
                <Button
                  variant="outline"
                  className="border-mattos-dark text-mattos-dark hover:bg-mattos-dark hover:text-white transition-colors"
                  asChild
                >
                  <Link to="/contato">Fale Conosco</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-mattos-dark mb-4">
              Nossos Serviços
            </h2>
            <p className="text-mattos-text">
              Soluções completas para suas necessidades de análise e
              consultoria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Microscope,
                title: 'Análise Laboratorial',
                desc: 'Análises de água, ar e alimentos com precisão absoluta.',
              },
              {
                icon: Briefcase,
                title: 'Consultoria',
                desc: 'Capacitação e consultoria técnica especializada.',
              },
              {
                icon: Activity,
                title: 'Área Ambiental',
                desc: 'Monitoramento e estudos de impacto ambiental.',
              },
              {
                icon: Award,
                title: 'Projetos',
                desc: 'Projetos arquitetônicos especializados para laboratórios.',
              },
            ].map((service, idx) => (
              <Card
                key={idx}
                className="border-none shadow-md hover:shadow-xl transition-all hover:-translate-y-1 duration-300"
              >
                <CardContent className="p-8 flex flex-col items-center text-center">
                  <div className="bg-mattos-highlight/10 p-4 rounded-full mb-6 text-mattos-primary">
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold text-mattos-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-mattos-text text-sm">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              className="bg-mattos-primary hover:bg-mattos-highlight text-white"
            >
              <Link to="/servicos">Ver todos os serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners / Marcas que confiam */}
      <section id="clientes" className="py-16 bg-mattos-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-mattos-dark text-center mb-10 opacity-80">
            Marcas que confiam no nosso trabalho
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            {['INCA', 'Dominos', 'Spoleto', 'Unimed', 'Petrobras', 'Vale'].map(
              (brand, i) => (
                <div
                  key={i}
                  className="bg-white/50 p-4 rounded-lg w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:bg-white hover:scale-105 duration-300 cursor-pointer shadow-sm"
                >
                  <img
                    src={`https://img.usecurling.com/i?q=${brand}&shape=outline&color=black`}
                    alt={`${brand} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ),
            )}
          </div>
        </div>
      </section>

      {/* CTA Banner Results */}
      <section className="bg-mattos-highlight py-12">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold text-mattos-dark mb-2">
              Confira os seus resultados
            </h2>
            <p className="text-mattos-dark/80 font-medium">
              Acesse nosso portal seguro para visualizar seus laudos e exames.
            </p>
          </div>
          <Button
            size="lg"
            className="bg-white text-mattos-dark hover:bg-mattos-dark hover:text-white border-2 border-transparent transition-all shadow-lg text-lg px-8"
            asChild
          >
            <a
              href="https://resultados.laboratoriomattos.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Acessar Resultados
            </a>
          </Button>
        </div>
      </section>
    </div>
  )
}
