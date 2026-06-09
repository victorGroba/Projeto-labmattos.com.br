import {
  ArrowRight,
  Check,
  Activity,
  Microscope,
  Briefcase,
  Award,
  Instagram,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { InstagramFeed } from '@/components/InstagramFeed'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import { useRef } from "react";
// IMPORTANTE: Adicionados useScroll e useTransform para o efeito do mouse
import { motion, useScroll, useTransform } from "framer-motion";
import { SEO } from '@/components/SEO'

export default function Index() {
  const autoScrollPlugin = useRef(
    AutoScroll({ speed: 1.5, stopOnInteraction: false })
  );

  const logosClientes = Array.from({ length: 29 }, (_, i) => `/assets/${i + 1}.jpg`);

  // Configurações de Animação de Entrada
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };



  // --- EFEITO PARALLAX HERO ---
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 1000], ['0%', '20%']);
  const heroContentY = useTransform(scrollY, [0, 800], ['0%', '30%']);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);
  // ----------------------------------------------------

  return (
    <div className="flex flex-col min-h-screen">
      <SEO
        title="Laboratório Mattos | Excelência em Exames Clínicos e Ambientais"
        description="Agende seus exames laboratoriais no Laboratório Mattos. Resultados rápidos, ambiente seguro e tradição com precisão."
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-mattos-dark">
        <motion.div
          className="absolute inset-0 z-0"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover scale-105"
          >
            <source src="/assets/analises_controle_ambiental_agua_ar.mp4" type="video/mp4" />
          </video>
          {/* Overlays to ensure text and new transparent header legibility */}
          <div className="absolute inset-0 bg-black/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-mattos-dark/80 via-mattos-dark/40 to-transparent"></div>
        </motion.div>

        <div className="container relative z-10 px-4 text-center md:text-left">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
            style={{ y: heroContentY, opacity: heroOpacity }}
          >
            <motion.h2 variants={fadeUp} className="inline-block text-mattos-highlight font-semibold text-sm mb-6 tracking-[0.2em] uppercase py-2 px-4 rounded-full border border-mattos-highlight/30 bg-mattos-highlight/10 backdrop-blur-sm relative overflow-hidden group">
              <span className="relative z-10">Mattos & Mattos • 66 anos ao seu lado</span>
              <div className="absolute inset-0 bg-mattos-highlight/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </motion.h2>
            <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
              A confiança que <br className="hidden md:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-mattos-highlight drop-shadow-sm">o tempo construiu,</span><br />
              a precisão que a ciência confirma.
            </motion.h1>
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-6 justify-center md:justify-start mt-4">
              <Button
                size="lg"
                className="relative overflow-hidden bg-mattos-primary text-white text-lg px-8 py-7 rounded-xl transition-all duration-300 shadow-[0_0_40px_-10px_rgba(50,205,50,0.5)] hover:shadow-[0_0_60px_-15px_rgba(50,205,50,0.7)] group"
                asChild
              >
                <Link to="/servicos" className="flex items-center">
                  <span className="relative z-10 font-semibold tracking-wide">Conheça nossos serviços</span>
                  <ArrowRight className="relative z-10 ml-3 h-5 w-5 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  {/* Efeito de brilho passando */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:animate-shimmer" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sobre (Summary Section) */}
      <section id="sobre" className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Column: Collage Image with Floating Effect */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="relative w-full mb-12 lg:mb-0 flex justify-center items-center px-4 md:px-0"
            >
              <motion.div
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                whileHover={{ scale: 1.02 }}
                className="relative z-10 w-full max-w-sm md:max-w-md lg:max-w-lg"
              >
                <img
                  src="/assets/seguranca-alimentar-nutricional-laboratorio-mattos-e-mattos-Grupo-mattos-mais_50-anos_Sepia-edit2-300x127.jpg"
                  alt="História do Laboratório Mattos"
                  className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl"
                />
              </motion.div>
            </motion.div>

            {/* Right Column: Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }}
              className="space-y-6 lg:pl-8"
            >
              <motion.ul variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.2 }
                }
              }} className="space-y-6 mt-4">
                {[
                  'Líderes em análises laboratoriais, com soluções personalizadas para garantir a segurança e a qualidade em diversas áreas.',
                  'Compromisso em fornecer resultados confiáveis e precisos.',
                  'Segurança alimentar, análise de água, análise de ar, gestão ambiental e boas práticas de fabricação.',
                  'Atendemos grande parte dos hotéis, hospitais, cozinhas industriais, fábricas de alimentos e restaurantes do Brasil.',
                ].map((item, index) => (
                  <motion.li variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                  }} key={index} className="flex flex-row items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-300 border border-transparent hover:border-gray-100">
                    <div className="mt-1 flex-shrink-0">
                      <svg className="w-6 h-6 text-[#4bc6d4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg sm:text-base md:text-lg leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
              }} className="pt-8 flex flex-wrap gap-4">
                <Button
                  variant="outline"
                  size="lg"
                  className="group relative border-2 border-mattos-dark text-mattos-dark bg-transparent hover:text-white overflow-hidden transition-all duration-500 rounded-xl px-8 py-6 text-lg font-medium"
                  asChild
                >
                  <Link to="/contato">
                    <span className="relative z-10 flex items-center gap-2">
                      Fale com nossos especialistas
                      <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    <div className="absolute inset-0 h-full w-full scale-0 rounded-xl bg-mattos-dark transition-all duration-300 group-hover:scale-100 group-hover:rounded-xl z-0" />
                  </Link>
                </Button>

                <Button
                  variant="default"
                  size="lg"
                  className="group bg-mattos-primary text-white hover:bg-mattos-dark transition-all duration-500 rounded-xl px-8 py-6 text-lg font-medium"
                  asChild
                >
                  <Link to="/sobre">
                    Ler história completa
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NOVA SEÇÃO: INSTAGRAM FEED DIGEST --- */}
      <section className="py-24 bg-gray-50 flex justify-center items-center w-full overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-600 text-sm font-semibold mb-4 border border-pink-500/20">
                <Instagram className="w-4 h-4" />
                @labmattos
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-mattos-dark mb-4 tracking-tight">
                Acompanhe nosso <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">Instagram</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl font-light">
                Fique por dentro das novidades, dicas de saúde, bastidores do nosso laboratório e muito mais.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 hover:opacity-90 transition-opacity text-white px-8 py-6 rounded-xl shadow-lg shadow-pink-500/20 font-medium group"
              >
                <a href="https://www.instagram.com/labmattos/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  Seguir no Instagram
                </a>
              </Button>
            </motion.div>
          </div>

          <div className="w-full mt-10">
            {/* Novo Feed Customizado via Behold API (Mais rápido e seguro) */}
            <InstagramFeed />
          </div>
        </div>
      </section>
      {/* ----------------------------------------------- */}

      {/* Partners / Nossos Clientes */}
      <section id="clientes" className="py-16 bg-gray-50 border-t border-gray-100 relative z-10 shadow-sm">
        <div className="container mx-auto px-4 mb-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-mattos-dark mb-4"
          >
            Marcas que confiam no nosso trabalho
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-600 max-w-2xl mx-auto text-lg"
          >
            Empresas, clínicas e laboratórios que confiam na qualidade do Laboratório Mattos.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="max-w-screen-2xl mx-auto px-4"
        >
          <Carousel
            opts={{ align: "start", loop: true, dragFree: true }}
            plugins={[autoScrollPlugin.current]}
            className="w-full cursor-grab active:cursor-grabbing"
            onMouseEnter={() => autoScrollPlugin.current.stop()}
            onMouseLeave={() => autoScrollPlugin.current.play()}
          >
            <CarouselContent className="-ml-4 flex items-center">
              {logosClientes.map((logo, index) => (
                <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="p-6 flex items-center justify-center h-56 rounded-2xl bg-white shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                    <img
                      src={logo}
                      alt={`Cliente ${index + 1}`}
                      className="max-h-40 w-full object-contain transition-transform hover:scale-110 duration-500"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </motion.div>
      </section>

      {/* Services Preview Animado */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-mattos-dark mb-4">
              Nossos Serviços de Excelência
            </h2>
            <p className="text-gray-600 text-lg">
              Soluções completas com tecnologia de ponta para suas necessidades de análise e consultoria.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: Microscope,
                title: 'Análise Laboratorial',
                desc: 'Análises de água, ar e alimentos com precisão absoluta e laudos rigorosos.',
              },
              {
                icon: Briefcase,
                title: 'Consultoria',
                desc: 'Capacitação e consultoria técnica especializada para otimização de processos.',
              },
              {
                icon: Activity,
                title: 'Área Ambiental',
                desc: 'Monitoramento contínuo e estudos de impacto ambiental detalhados.',
              },
              {
                icon: Award,
                title: 'Projetos',
                desc: 'Projetos arquitetônicos e estruturais especializados para laboratórios.',
              },
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full relative overflow-hidden group border-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 rounded-2xl">
                  {/* Borda gradient no hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mattos-primary/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-mattos-primary transition-all duration-500 group-hover:w-full" />

                  <CardContent className="p-10 flex flex-col items-center text-center relative z-10 hover:bg-white/50">
                    <div className="bg-gray-50 p-5 rounded-2xl mb-6 text-mattos-primary transition-all duration-500 group-hover:bg-mattos-primary group-hover:text-white group-hover:scale-110 shadow-sm">
                      <service.icon className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                    <h3 className="text-xl font-bold text-mattos-dark mb-4 transition-colors duration-300 group-hover:text-mattos-primary">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-sm md:text-base">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <Button
              asChild
              className="bg-mattos-primary hover:bg-mattos-highlight text-white px-10 py-6 text-lg rounded-full shadow-lg hover:shadow-mattos-primary/40 transition-all hover:-translate-y-1"
            >
              <Link to="/servicos">Ver catálogo completo de serviços</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner Results com Efeito Glassmorphism Premium */}
      <section className="py-24 relative overflow-hidden bg-mattos-dark">
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-mattos-primary/10 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-mattos-highlight/10 rounded-full blur-[80px] transform -translate-x-1/3 translate-y-1/3" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left flex-1"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-mattos-primary/20 text-mattos-highlight text-sm font-semibold mb-6 border border-mattos-primary/30">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mattos-highlight opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mattos-highlight"></span>
                </span>
                Sistema Digital
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
                Resultados Rápidos e <span className="text-transparent bg-clip-text bg-gradient-to-r from-mattos-highlight to-mattos-primary">Seguros</span>
              </h2>
              <p className="text-gray-300 font-medium text-lg max-w-xl leading-relaxed">
                Acesse nosso portal protegido com criptografia bancária para visualizar e baixar os laudos dos seus exames a qualquer momento.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                className="bg-white text-mattos-dark hover:bg-gray-100 transition-all shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] text-lg px-10 py-8 rounded-2xl group"
                asChild
              >
                <Link
                  to="/login"
                  className="flex items-center gap-3 font-bold"
                >
                  <Activity className="w-6 h-6 text-mattos-primary group-hover:animate-pulse" />
                  Acessar Painel do Paciente
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}