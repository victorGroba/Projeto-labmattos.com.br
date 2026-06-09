import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Card, CardContent } from '@/components/ui/card'
import {
  Microscope,
  Droplets,
  Wind,
  Utensils,
  BookOpen,
  Leaf,
  Ruler,
} from 'lucide-react'
import { SEO } from '@/components/SEO'

export default function Services() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pb-20">
      <SEO
        title="Catálogo de Serviços | Laboratório Mattos"
        description="Análises microbiológicas de água e ar, segurança alimentar, projetos de arquitetura clínica e consultoria avançada de qualidade."
      />
      {/* Header Banner */}
      <section className="bg-mattos-primary py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-in-up">
            Nossos Serviços
          </h1>
          <p className="text-white/90 max-w-2xl mx-auto text-lg animate-fade-in-up delay-100">
            Conheça em detalhes nossas soluções em análises laboratoriais,
            consultoria e projetos.
          </p>
        </div>
      </section>

      {/* Accordion Content */}
      <div className="container mx-auto px-4 -mt-10">
        <Card className="shadow-xl border-none">
          <CardContent className="p-6 md:p-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {/* Item 1: Análise Laboratorial */}
              <AccordionItem
                value="item-1"
                className="border rounded-lg px-4 bg-white data-[state=open]:bg-blue-50/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-mattos-primary/10 p-2 rounded-full hidden sm:block">
                      <Microscope className="h-6 w-6 text-mattos-primary" />
                    </div>
                    <span className="text-xl font-bold text-mattos-dark">
                      Análise Laboratorial
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-mattos-text text-base leading-relaxed pl-2 sm:pl-16 pr-4 pb-6">
                  <p className="mb-4">
                    Realizamos análises completas para garantir a qualidade e
                    segurança em diversos meios. Nosso laboratório é equipado
                    com tecnologia de ponta, incluindo o sistema automatizado{' '}
                    <strong>Mini Vidas</strong>.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                      <div className="flex items-center gap-2 mb-2 text-mattos-primary font-semibold">
                        <Droplets className="h-5 w-5" />
                        Água
                      </div>
                      <p className="text-sm text-gray-600">
                        Potabilidade, efluentes e águas industriais. Análises
                        físico-químicas e microbiológicas completas.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                      <div className="flex items-center gap-2 mb-2 text-mattos-primary font-semibold">
                        <Wind className="h-5 w-5" />
                        Ar
                      </div>
                      <p className="text-sm text-gray-600">
                        Qualidade do ar interior e monitoramento ambiental de
                        poluentes atmosféricos.
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border shadow-sm">
                      <div className="flex items-center gap-2 mb-2 text-mattos-primary font-semibold">
                        <Utensils className="h-5 w-5" />
                        Alimentos
                      </div>
                      <p className="text-sm text-gray-600">
                        Controle de qualidade microbiológico, shelf-life e
                        higiene de manipuladores.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Item 2: Consultoria e Capacitação */}
              <AccordionItem
                value="item-2"
                className="border rounded-lg px-4 bg-white data-[state=open]:bg-blue-50/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-mattos-primary/10 p-2 rounded-full hidden sm:block">
                      <BookOpen className="h-6 w-6 text-mattos-primary" />
                    </div>
                    <span className="text-xl font-bold text-mattos-dark">
                      Consultoria e Capacitação
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-mattos-text text-base leading-relaxed pl-2 sm:pl-16 pr-4 pb-6">
                  <p className="mb-4">
                    Oferecemos treinamentos especializados para equipes técnicas
                    e gestores, focando em boas práticas, normas
                    regulamentadoras e gestão da qualidade.
                  </p>
                  <ul className="list-disc list-inside space-y-2 mt-2">
                    <li>Implantação de sistemas de gestão da qualidade</li>
                    <li>Treinamento em boas práticas de laboratório</li>
                    <li>Auditorias internas e preparação para certificações</li>
                    <li>Gestão de riscos biológicos e químicos</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Item 3: Área Ambiental */}
              <AccordionItem
                value="item-3"
                className="border rounded-lg px-4 bg-white data-[state=open]:bg-blue-50/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-mattos-primary/10 p-2 rounded-full hidden sm:block">
                      <Leaf className="h-6 w-6 text-mattos-primary" />
                    </div>
                    <span className="text-xl font-bold text-mattos-dark">
                      Área Ambiental
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-mattos-text text-base leading-relaxed pl-2 sm:pl-16 pr-4 pb-6">
                  <p>
                    Desenvolvemos estudos e monitoramentos ambientais para
                    empresas que buscam conformidade com órgãos como o INEA.
                    Nossos serviços incluem laudos técnicos, planos de
                    gerenciamento de resíduos e assessoria em licenciamento
                    ambiental.
                  </p>
                </AccordionContent>
              </AccordionItem>

              {/* Item 4: Projetos Arquitetônicos */}
              <AccordionItem
                value="item-4"
                className="border rounded-lg px-4 bg-white data-[state=open]:bg-blue-50/30 transition-colors"
              >
                <AccordionTrigger className="hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="bg-mattos-primary/10 p-2 rounded-full hidden sm:block">
                      <Ruler className="h-6 w-6 text-mattos-primary" />
                    </div>
                    <span className="text-xl font-bold text-mattos-dark">
                      Projetos Arquitetônicos
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-mattos-text text-base leading-relaxed pl-2 sm:pl-16 pr-4 pb-6">
                  <p>
                    Somos especialistas no desenvolvimento de projetos
                    arquitetônicos para laboratórios e clínicas, observando
                    rigorosamente as normas da ANVISA (RDC 50) e requisitos de
                    biossegurança. Projetamos fluxos eficientes que garantem a
                    segurança dos processos e o conforto dos colaboradores.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
