import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, ExternalLink, BookOpen, ArrowRight, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SEO } from '@/components/SEO'

interface Article {
    id: string
    title: string
    date: string
    thumbnail: string
    summary: string
    content: string
    categories: string[]
}

// "Banco de dados" local do Blog. 
// A equipe do laboratório pode atualizar este array sempre que quiser adicionar um novo texto longo.
const BLOG_POSTS: Article[] = [
    {
        id: "nova-abnt-17037",
        title: "A nova ABNT NBR 17037 e o fim da RE 09: O que muda na Qualidade do Ar?",
        date: "2025-11-15",
        thumbnail: "/assets/NORMA-ABNT.png",
        summary: "A nova norma técnica atualiza os parâmetros de monitoramento ambiental para prevenir a Síndrome do Edifício Doente. Entenda como o Laboratório Mattos pode ajudar clínicas e hospitais a se adequarem às novas regras.",
        content: `
A Agência Nacional de Vigilância Sanitária (ANVISA), juntamente com a Associação Brasileira de Normas Técnicas (ABNT), publicou recentemente atualizações vitais sobre o controle e a segurança microbiológica em ambientes climatizados.

A revogação da RE 09 e a introdução da ABNT NBR 17037 trouxeram exigências mais restritas para ambientes hospitalares, shoppings e escritórios comerciais, buscando combater ativamente os patógenos causadores da Síndrome do Edifício Doente (SED).

**Mudanças Chave:**
1. Coletas do ar externo agora precisam ser validadas simultaneamente ao ar interno.
2. Contagens rigorosas de fungos e bactérias exigirão laudos laboratoriais creditados a cada 6 meses.
3. Necessidade de planos de manutenção preventiva (PMOC) com respaldo de laboratórios ambientais de ponta.

**Como o Grupo Mattos & Mattos ajuda?**
Temos equipamentos calibrados para amostragens in-loco (Ambirapid, impacto em placa) e uma equipe treinada para a rápida identificação de contaminações fúngicas. Prevenir multas da vigilância sanitária é investir na segurança respiratória dos seus pacientes e funcionários.
        `,
        categories: ["Ar", "Anvisa", "Hospitais"]
    },
    {
        id: "recall-formulas-infantis",
        title: "Segurança de Alimentos e Rastreabilidade: Lições dos Recalls em 2026",
        date: "2026-01-20",
        thumbnail: "/assets/segurança_de_alimentos_rastreabilidade.png",
        summary: "Casos recentes com fórmulas infantis acenderam o alerta na cadeia produtiva. Descubra como as análises microbiológicas (Salmonella, Bacillus cereus) evitam prejuízos milionários na indústria de alimentos.",
        content: `
A segurança da cadeia de alimentos está sob constante escrutínio dos órgãos reguladores. Alertas recentes de contaminação envolvendo categorias sensíveis, como fórmulas infantis, relembraram gestores industriais sobre a importância de garantir que o produto final esteja livre de toxinas e bactérias patogênicas.

O *Bacillus cereus*, frequentemente responsável pela toxina cereulide, é apenas um dos riscos. A presença de *Salmonella spp.* e *Listeria monocytogenes* em linhas de produção (especialmente carnes, laticínios e congelados) exige monitoramento de superfície e análise rigorosa de lotes.

**Laboratório Mattos: Seu parceiro na Qualidade Total**
Nós do Grupo Mattos e Mattos atuamos há mais de 50 anos auxiliando indústrias nacionais na validação dos seus processos através de ensaios analíticos creditados e de padrão internacional, suportando a implementação efetiva da APPCC (Análise de Perigos e Pontos Críticos de Controle).
        `,
        categories: ["Alimentos", "Segurança Alimentar", "APPCC"]
    },
    {
        id: "portaria-potabilidade-888",
        title: "Adequação à Portaria GM/MS 888: Potabilidade e Saúde Ambiental",
        date: "2026-02-10",
        thumbnail: "/assets/Portaria-Potabilidade-888.jpg",
        summary: "O controle de cloro residual e monitoramento de coliformes totais e Escherichia coli seguem como pilares rígidos do Vigiagua. Veja a importância dos laudos laboratoriais nas análises da água.",
        content: `
A água é o recurso mais crítico para indústrias farmacêuticas, redes hoteleiras e consumo populacional. O Ministério da Saúde, apoiado pela Portaria 888, determina limites estritos e amostragem constante para garantir que a água servida na ponta seja 100% segura e livre de cianotoxinas e coliformes.

Para 2026, fiscais do Vigiagua estão aumentando as rodadas de análise documental, verificando laudos de potabilidade regulares dos serviços de abastecimento, incluindo cisternas de condomínios logísticos, cruzeiros e hospitais.

No **Laboratório Mattos e Mattos**, executamos coletas no seu estabelecimento e geramos relatórios técnicos reconhecidos (ABNT/Reblas/Inea) atestando formalmente sua adequação à matriz de potabilidade atual, garantindo saúde aos ocupantes da edificação e conformidade legal à sua empresa.
        `,
        categories: ["Água", "Meio Ambiente"]
    }
]

export default function News() {
    const [selectedArticle, setSelectedArticle] = useState<Article | null>(null)

    // Formatação de data
    const formatData = (dataStr: string) => {
        try {
            return new Intl.DateTimeFormat('pt-BR', { day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(dataStr))
        } catch {
            return dataStr
        }
    }

    const renderMarkdownText = (text: string) => {
        return text.split('\n').map((line, i) => {
            if (line.trim().startsWith('**') && line.trim().endsWith('**')) {
                return <h3 key={i} className="text-xl font-bold mt-6 mb-3 text-mattos-dark">{line.replace(/\*\*/g, '')}</h3>;
            } else if (line.trim().match(/^\d+\./)) {
                return <li key={i} className="ml-6 mb-2 text-gray-700">{line.trim().replace(/^\d+\./, '')}</li>;
            } else if (line.trim() === '') {
                return <br key={i} />;
            } else {
                return <p key={i} className="mb-4 text-gray-700 leading-relaxed text-lg">{line}</p>;
            }
        });
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <SEO
                title="Notícias e Artigos | Laboratório Mattos"
                description="Fique por dentro das atualizações da área da saúde, segurança alimentar, análises de efluentes e portarias vigentes como ABNT e ANVISA."
            />
            {/* Hero Banner Notícias */}
            <section className="relative pt-32 pb-20 bg-mattos-dark overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20 bg-[url('/assets/grupo_mattos_e_mattos_cover.png')] bg-cover bg-center"></div>
                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="flex justify-center mb-4">
                            <span className="bg-mattos-primary/20 text-mattos-primary rounded-full px-4 py-1 flex items-center gap-2 font-medium border border-mattos-primary/30">
                                <BookOpen className="w-4 h-4" /> Blog e Artigos Institucionais
                            </span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Notícias do <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-mattos-primary">Setor</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Acompanhe as últimas publicações, pesquisas e alertas sobre Segurança Alimentar, Água e Meio Ambiente.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Grid de Notícias */}
            <section className="py-20 md:py-32 relative z-10 -mt-8">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {BLOG_POSTS.map((item) => (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group border border-gray-100/50 cursor-pointer"
                                onClick={() => setSelectedArticle(item)}
                            >
                                {/* Imagem do Artigo */}
                                <div className="relative h-56 overflow-hidden bg-gray-100">
                                    <img
                                        src={item.thumbnail}
                                        alt={item.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = '/assets/logo_mattos.png';
                                        }}
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur text-mattos-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                                            {item.categories[0]}
                                        </span>
                                    </div>
                                </div>

                                {/* Conteúdo do Artigo */}
                                <div className="p-8 flex flex-col flex-grow">
                                    <div className="flex items-center text-sm text-gray-500 mb-4 font-medium uppercase tracking-wider">
                                        <Calendar className="w-4 h-4 mr-2 text-mattos-primary" />
                                        {formatData(item.date)}
                                    </div>
                                    <h3 className="font-bold text-xl text-mattos-dark mb-4 leading-tight group-hover:text-mattos-primary transition-colors line-clamp-3">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                                        {item.summary}
                                    </p>

                                    <div className="mt-auto pt-6 border-t border-gray-100">
                                        <Button
                                            variant="ghost"
                                            className="w-full group-hover:bg-mattos-primary/5 text-mattos-primary hover:text-mattos-dark transition-all rounded-xl py-6"
                                        >
                                            <span className="mr-2 font-semibold">Ler Artigo Completo</span>
                                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal de Leitura do Artigo (Sem sair do site) */}
            <AnimatePresence>
                {selectedArticle && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
                        onClick={() => setSelectedArticle(null)}
                    >
                        <motion.div
                            initial={{ y: 50, opacity: 0, scale: 0.95 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: 50, opacity: 0, scale: 0.95 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Modal Header/Image */}
                            <div className="relative h-64 sm:h-80 overflow-hidden bg-gray-100 rounded-t-3xl">
                                <img
                                    src={selectedArticle.thumbnail}
                                    alt={selectedArticle.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                                <button
                                    onClick={() => setSelectedArticle(null)}
                                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 transition-colors z-10 backdrop-blur-md"
                                >
                                    <X className="w-6 h-6" />
                                </button>

                                <div className="absolute bottom-0 left-0 p-6 sm:p-10 w-full">
                                    <div className="flex gap-2 mb-3">
                                        {selectedArticle.categories.map((cat, i) => (
                                            <span key={i} className="bg-mattos-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                                                {cat}
                                            </span>
                                        ))}
                                    </div>
                                    <h2 className="text-2xl sm:text-4xl font-bold text-white mb-2 leading-tight drop-shadow-lg">
                                        {selectedArticle.title}
                                    </h2>
                                    <div className="flex items-center text-gray-300 text-sm font-medium">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        {formatData(selectedArticle.date)}
                                    </div>
                                </div>
                            </div>

                            {/* Modal Content */}
                            <div className="p-6 sm:p-10 bg-white">
                                <div className="max-w-3xl mx-auto">
                                    <p className="text-xl text-gray-600 mb-8 font-light italic border-l-4 border-mattos-primary pl-4">
                                        {selectedArticle.summary}
                                    </p>

                                    <div className="prose prose-lg max-w-none text-gray-800">
                                        {renderMarkdownText(selectedArticle.content)}
                                    </div>
                                </div>

                                <div className="mt-12 text-center border-t border-gray-100 pt-8">
                                    <Button
                                        onClick={() => setSelectedArticle(null)}
                                        className="bg-mattos-dark hover:bg-mattos-primary text-white px-8 py-6 rounded-xl font-semibold transition-colors"
                                    >
                                        Fechar Leitura
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
