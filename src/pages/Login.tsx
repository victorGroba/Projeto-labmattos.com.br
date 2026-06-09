import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, User, Lock, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'
import { Card, CardContent } from '@/components/ui/card'
import { SEO } from '@/components/SEO'

export default function Login() {
    const [isLoading, setIsLoading] = useState(false)
    const [errorVisible, setErrorVisible] = useState(false)

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)
        setErrorVisible(false)

        // Simulate network delay then show a fake error since it's a dummy login
        setTimeout(() => {
            setIsLoading(false)
            setErrorVisible(true)
        }, 1200)
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 relative overflow-hidden">
            <SEO
                title="Acessar Resultados | Laboratório Mattos"
                description="Faça login no sistema de clientes para acessar laudos e resultados de exames de forma rápida e segura."
            />
            {/* Decoração de fundo */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
                <div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-br from-mattos-primary/10 to-blue-400/5 blur-3xl" />
                <div className="absolute -bottom-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-tr from-teal-400/10 to-transparent blur-3xl" />
            </div>

            <div className="sm:mx-auto sm:w-full sm:max-w-md relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="flex justify-center"
                >
                    <Link to="/">
                        <img
                            alt="Laboratório Mattos e Mattos"
                            src="/assets/logo_mattos.png"
                            className="h-20 w-auto object-contain drop-shadow-sm hover:scale-105 transition-transform duration-300"
                        />
                    </Link>
                </motion.div>

                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mt-6 text-center text-3xl font-extrabold text-mattos-dark tracking-tight"
                >
                    Acesse seu Painel
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-2 text-center text-sm text-gray-600"
                >
                    Acompanhe seus resultados e histórico
                </motion.p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-md relative z-10"
            >
                <Card className="shadow-2xl border-0 overflow-hidden rounded-2xl bg-white/80 backdrop-blur-xl">
                    <CardContent className="px-4 py-8 sm:px-10">
                        <form className="space-y-6" onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="cpf" className="block text-sm font-medium text-gray-700">
                                    CPF ou Código do Paciente
                                </label>
                                <div className="mt-2 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <User className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="cpf"
                                        name="cpf"
                                        type="text"
                                        required
                                        placeholder="000.000.000-00"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-mattos-primary focus:border-mattos-primary sm:text-sm transition-allbg-gray-50/50"
                                    />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                    Senha ou Protocolo
                                </label>
                                <div className="mt-2 relative rounded-md shadow-sm">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </div>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        required
                                        placeholder="••••••••"
                                        className="block w-full pl-10 pr-3 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-mattos-primary focus:border-mattos-primary sm:text-sm transition-all bg-gray-50/50"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <input
                                        id="remember-me"
                                        name="remember-me"
                                        type="checkbox"
                                        className="h-4 w-4 text-mattos-primary focus:ring-mattos-primary border-gray-300 rounded"
                                    />
                                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
                                        Lembrar-me
                                    </label>
                                </div>

                                <div className="text-sm">
                                    <a href="#" className="font-medium text-mattos-primary hover:text-mattos-dark transition-colors" onClick={(e) => e.preventDefault()}>
                                        Esqueceu a senha?
                                    </a>
                                </div>
                            </div>

                            {errorVisible && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: 'auto' }}
                                    className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-md"
                                >
                                    <div className="flex">
                                        <div className="ml-3">
                                            <p className="text-sm text-red-700 font-medium">
                                                Credenciais inválidas ou temporariamente indisponíveis.
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}

                            <div>
                                <Button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex justify-center py-6 px-4 border border-transparent rounded-xl shadow-sm text-base font-medium text-white bg-mattos-primary hover:bg-mattos-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mattos-primary transition-all duration-300 h-auto"
                                >
                                    {isLoading ? (
                                        <Loader2 className="w-6 h-6 animate-spin" />
                                    ) : (
                                        "Acessar Resultados"
                                    )}
                                </Button>
                            </div>
                        </form>

                        <div className="mt-8 text-center">
                            <Link to="/" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-mattos-dark transition-colors group">
                                <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                                Voltar para a página inicial
                            </Link>
                        </div>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    )
}
