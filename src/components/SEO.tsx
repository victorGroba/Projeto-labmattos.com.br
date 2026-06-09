import { Helmet } from 'react-helmet-async'

interface SEOProps {
    title: string
    description?: string
    image?: string
}

export function SEO({ title, description, image }: SEOProps) {
    const defaultDescription =
        'Laboratório Mattos & Mattos, excelência e tradição em exames laboratoriais, análises clínicas e ambientais.'
    const defaultImage = '/og-image.png'
    const siteName = 'Laboratório Mattos'

    return (
        <Helmet>
            {/* Exibição padrão da aba e buscas */}
            <title>{title}</title>
            <meta name="description" content={description || defaultDescription} />

            {/* Exibição para Redes Sociais e WhatsApp (Open Graph) */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description || defaultDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={image || defaultImage} />
            <meta property="og:site_name" content={siteName} />

            {/* Exibição para Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description || defaultDescription} />
            <meta name="twitter:image" content={image || defaultImage} />
        </Helmet>
    )
}
