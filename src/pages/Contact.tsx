import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { MapPin, Phone, Mail, Loader2, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { useToast } from '@/hooks/use-toast'
import { SEO } from '@/components/SEO'

const formSchema = z.object({
  name: z
    .string()
    .min(2, { message: 'Nome deve ter pelo menos 2 caracteres.' }),
  email: z.string().email({ message: 'E-mail inválido.' }),
  phone: z.string().min(10, { message: 'Telefone inválido.' }),
  message: z
    .string()
    .min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
})

export default function Contact() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)

    // Mock Webhook submission
    try {
      console.log('Sending data to webhook...', values)

      // Simulando o envio (fake loading de 1.5s)
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Aqui entraria a chamada de API futura para um serviço de e-mail (Ex: Formspree)
      // await fetch('/api/contato', { ... })

      toast({
        title: 'Mensagem enviada com sucesso!',
        description: 'Entraremos em contato em breve.',
        variant: 'default',
        className: 'bg-green-50 border-green-200 text-green-900',
      })
      form.reset()
    } catch (error) {
      toast({
        title: 'Erro ao enviar mensagem',
        description: 'Por favor, tente novamente mais tarde.',
        variant: 'destructive',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <SEO
        title="Fale Conosco | Laboratório Mattos"
        description="Entre em contato com o Laboratório Mattos. Endereço: Rua Euzébio de Queiros, Niterói - RJ. Telefone e suporte direto por mensagem."
      />
      {/* Header Banner */}
      <section className="bg-mattos-primary py-20 pb-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Fale Conosco
          </h1>
          <p className="text-white/90 text-lg">
            Estamos prontos para atender sua solicitação.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 -mt-20 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Info Card & Map */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-none overflow-hidden">
              <div className="bg-mattos-dark p-6 text-white">
                <h3 className="text-xl font-bold mb-1">
                  Informações de Contato
                </h3>
                <p className="text-sm opacity-80">
                  Canais oficiais de atendimento
                </p>
              </div>
              <CardContent className="p-6 space-y-6">
                <div className="flex items-start gap-3">
                  <div className="bg-mattos-primary/10 p-2 rounded-full">
                    <MapPin className="h-5 w-5 text-mattos-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mattos-dark">Endereço</h4>
                    <p className="text-sm text-gray-600">
                      Rua Euzébio de Queiros, 45
                      <br />
                      Centro – Niterói – RJ
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-mattos-primary/10 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-mattos-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mattos-dark">Telefone</h4>
                    <p className="text-sm text-gray-600">
                      (021) 2613-1636
                      <br />
                      (021) 2622-8163
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="bg-mattos-primary/10 p-2 rounded-full">
                    <Mail className="h-5 w-5 text-mattos-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-mattos-dark">E-mail</h4>
                    <p className="text-sm text-gray-600 break-all">
                      comercial@laboratoriomattos.com.br
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Real Google Map */}
            <div className="rounded-lg overflow-hidden shadow-lg h-[300px] border bg-gray-200 relative group">
              <iframe
                src="https://storage.googleapis.com/maps-solutions-qn5wppftcb/locator-plus/ogxp/locator-plus.html"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                title="Localização do Laboratório Mattos"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Lead Form */}
          <Card className="lg:col-span-2 shadow-xl border-none">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-mattos-dark mb-6">
                Envie uma mensagem
              </h2>

              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nome Completo</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Seu nome"
                              {...field}
                              className="focus-visible:ring-mattos-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Telefone / WhatsApp</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="(21) 99999-9999"
                              {...field}
                              className="focus-visible:ring-mattos-primary"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>E-mail</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="seu@email.com"
                            {...field}
                            className="focus-visible:ring-mattos-primary"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensagem</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Como podemos ajudar?"
                            className="min-h-[120px] focus-visible:ring-mattos-primary"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full bg-mattos-primary hover:bg-mattos-highlight text-white h-12 text-lg font-semibold"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        ENVIAR MENSAGEM
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              </Form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
