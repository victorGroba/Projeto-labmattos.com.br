import { motion } from 'framer-motion'
import { ArrowRight, Leaf, Shield, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { SEO } from '@/components/SEO'

export default function About() {
    const fadeUp: any = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    }

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <SEO
                title="Sobre Nós | Laboratório Mattos & Mattos"
                description="Conheça a história e tradição de mais de 60 anos do Laboratório Mattos em análises clínicas, segurança alimentar e compromisso com a sustentabilidade."
            />
            {/* Hero Banner */}
            <section className="relative pt-32 pb-20 bg-mattos-dark overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/assets/grupo_mattos_e_mattos_cover.png"
                        alt="Laboratório Mattos"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mattos-dark via-transparent to-transparent"></div>
                </div>

                <div className="container relative z-10 mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                            Quem <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-mattos-primary">Somos</span>
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                            Tradição, inovação e sustentabilidade caminhando juntas para garantir excelência em análises laboratoriais.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Main Content Sections */}
            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 max-w-7xl">

                    {/* 1. History & Foundation */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="space-y-6"
                        >
                            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-mattos-dark/5 text-mattos-dark font-medium text-sm">
                                <Shield className="w-4 h-4 text-mattos-primary" />
                                Sense and Simplicity
                            </motion.div>
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-mattos-dark leading-tight">
                                Há mais de 60 anos participando <br className="hidden md:block" /> da vida dos cidadãos
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed text-left">
                                Oferecendo os serviços de análise de água, ar e alimentos, garantindo sua segurança alimentar. Atuamos também nas áreas de consultoria e análise hospitalar, gestão ambiental, treinamentos e capacitação técnica, contribuindo para a implantação de boas práticas de fabricação.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed text-left">
                                Hoje, estamos em todo o Brasil e temos o orgulho de contar com funcionários comprometidos e envolvidos com os nossos ideais. Trabalhamos todos os dias para oferecer soluções que façam sentido para as pessoas, que atendam suas reais necessidades e, ao mesmo tempo, sejam simples e inclusivas, ampliando o acesso de todos aos mais variados mecanismos tecnológicos.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed text-left">
                                Essa é, inclusive, a nossa promessa de marca: <strong>sense and simplicity</strong>. É assim que transformamos conceitos de sustentabilidade em produtos e soluções. Nossa atuação baseia-se em um pensamento inovador, afinal, o futuro está intimamente associado à inovação e, para nós, inovação também é potencializar o uso das tecnologias existentes, ampliando suas aplicações de maneira cada vez mais eficiente.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]"
                        >
                            <img
                                src="/assets/seguranca-alimentar-nutricional-laboratorio-mattos-e-mattos-Grupo-mattos-50-anos_Sepia-edit2.jpg"
                                alt="Equipe Histórica Laboratório Mattos"
                                className="absolute inset-0 w-full h-full object-contain bg-gray-50 transition-transform duration-700 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 right-6">
                                <p className="text-white font-medium text-lg italic">Uma história construída com amor e dedicação ao que fazemos.</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* 2. Operations & Commitment */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center flex-col-reverse lg:flex-row-reverse mb-32">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={staggerContainer}
                            className="space-y-6"
                        >
                            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold text-mattos-dark leading-tight">
                                Mais de 60 anos <br className="hidden md:block" /> de compromisso
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed text-left">
                                O Grupo Mattos e Mattos participa do controle de qualidade no ramo de segurança alimentar, atendendo a todos os tipos de demanda de grande parte dos hotéis, hospitais, cozinhas industriais, fábricas de alimentos e restaurantes do Brasil.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed text-left">
                                Nossos profissionais são treinados e capacitados para fornecer todas as informações técnicas relacionadas à análise de água, análise de ar, segurança de alimentos, gestão ambiental, boas práticas de fabricação, colaborando e orientando sobre os perigos e os cuidados necessários para adequação de suas atividades às exigências de um mercado cada vez mais competitivo.
                            </motion.p>
                            <motion.div variants={fadeUp} className="bg-mattos-dark/5 p-6 rounded-2xl mt-6 border border-mattos-primary/10 relative overflow-hidden group">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-mattos-primary/10 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-150"></div>
                                <p className="text-lg text-mattos-dark font-medium leading-relaxed relative z-10 italic">
                                    "Durante estas seis décadas, aperfeiçoamos nossas técnicas, expandimos nosso negócio, mas ainda mais importante que isso, transmitimos conhecimento de geração para geração, construindo um laço de amor e dedicação ao que fazemos."
                                </p>
                                <div className="mt-4 flex items-center justify-start gap-2 relative z-10 text-mattos-primary font-bold">
                                    <CheckCircle2 className="w-5 h-5" /> Nosso Direção, nosso esmero.
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8 }}
                            className="relative h-[600px] w-full flex items-center justify-center p-8 lg:p-0"
                        >
                            <div className="absolute inset-0 bg-gray-100 rounded-[3rem] transform -rotate-3 scale-95 opacity-50"></div>
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative z-10 w-full rounded-2xl shadow-2xl overflow-hidden"
                            >
                                <img
                                    src="/assets/seguranca-alimentar-nutricional-laboratorio-mattos-e-mattos-fachada-grupo-mattos1.jpg"
                                    alt="Estrutura e Expertise"
                                    className="w-full h-auto object-cover bg-white p-2 mix-blend-multiply"
                                />
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* 3. Sustainability */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="bg-gradient-to-br from-[#1E293B] to-[#0F172A] rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl"
                    >
                        {/* Decorações do fundo */}
                        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mattos-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
                        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/2"></div>

                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            <div className="space-y-6">
                                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white font-medium text-sm backdrop-blur-md border border-white/20">
                                    <Leaf className="w-4 h-4 text-[#4ADE80]" />
                                    Ação Socioambiental
                                </div>
                                <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                                    Compromisso com a <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4ADE80] to-teal-300">Sustentabilidade</span>
                                </h2>
                                <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                                    <p>
                                        No final de 2008, começamos a nortear a nossa empresa para atuar efetivamente dentro dos padrões de sustentabilidade. Com medidas simples, conseguimos obter expressivos resultados no consumo de energia, gasolina, copos descartáveis e papel.
                                    </p>
                                    <p>
                                        Para concretizar nossas ações em prol de um futuro melhor para nós e para nossos descendentes, também incluímos em nosso cotidiano de ação social o cuidado com uma creche do entorno de nossa unidade matriz, em Niterói, no Rio de Janeiro.
                                    </p>
                                    <p className="font-medium text-white p-4 border-l-4 border-[#4ADE80] bg-white/5 rounded-r-lg">
                                        Para comemorar o sucesso desta ação, reflorestamos com mudas de Mata Atlântica o Parque Estadual da Serra da Tiririca. A ideia é que organizemos com frequência atividades semelhantes em outros lugares.
                                    </p>
                                </div>

                                <div className="pt-6">
                                    <Button
                                        variant="outline"
                                        size="lg"
                                        className="group relative border-2 border-white text-mattos-dark bg-white hover:bg-transparent hover:text-white overflow-hidden transition-all duration-500 rounded-xl px-8 py-6 text-lg font-medium"
                                        asChild
                                    >
                                        <Link to="/contato">
                                            <span className="relative z-10 flex items-center gap-2">
                                                Conheça nossa estrutura
                                                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                                            </span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>

                            {/* Imagem de sustentabilidade */}
                            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group">
                                <img
                                    src="/assets/serra_tirica.png"
                                    alt="Sustentabilidade e Meio Ambiente"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>

                                <div className="absolute bottom-6 left-6 right-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl">
                                        <Leaf className="w-8 h-8 text-[#4ADE80] mb-3" />
                                        <h4 className="text-white font-bold text-xl mb-1">Mata Atlântica</h4>
                                        <p className="text-gray-300 text-sm">Reflorestamento do Parque Estadual da Serra da Tiririca como marco de nossas ações.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </section>
        </div>
    )
}
