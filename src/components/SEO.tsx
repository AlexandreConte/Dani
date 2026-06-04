import Head from "next/head";

interface SeoProps {
  title?: string
  keywords?: string
  description?: string
  canonicalPath?: string
}

export default function SEO(props: SeoProps) {
  return (
    <Head>
      <title>{props.title ?? "Anima Odontologia | Dra. Daniela Conte - Florianópolis"}</title>
      <meta name="description" content={props.description ?? "Clínica Anima Odontologia da Dra. Daniela Conte no Campeche - Florianópolis (Shopping Oka Floripa)."} />
      <meta name="keywords" content={props.keywords ?? "dentista campeche, dentista florianópolis, clínica odontológica florianópolis, prótese dentária, reabilitação oral, oka floripa, clínica anima odontologia, dentista especialista, dentista especializada"} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={`https://www.dradanielaconte.com.br/${props.canonicalPath ?? ""}`} />

      {/* Open Graph / Redes Sociais */}
      <meta property="og:image" content="/images/perfil.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Anima Odontologia - Dentista em Florianópolis" />
      <meta property="og:description" content="Clínica Anima Odontologia no Shopping Oka Floripa, Campeche." />
      <meta property="og:site_name" content="Dra. Daniela Conte | Anima Odontologia" />

      {/* Dados Estruturados de Negócio Local para o Google (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Dra. Daniela Conte | Anima Odontologia",
            "telephone": "+55-48-99929-9977",
            "description": "Clínica Anima Odontologia | Dra Daniela Conte dentista especializada em Prótese Dentária, Estética e Reabilitação Oral em Florianópolis.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Shopping Oka Floripa, Torre Sol, SC-405, nº 4397, Sala 208",
              "addressLocality": "Campeche, Florianópolis",
              "addressRegion": "SC",
              "postalCode": "88065-000",
              "addressCountry": "BR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": -27.7001686,
              "longitude": -48.5107231
            },
            "areaServed": {
              "@type": "City",
              "name": "Florianópolis"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Serviços Odontológicos",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Prótese Dentária"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Estética Dental"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Reabilitação Oral"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Implante de zircônia"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Implante de titânio"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Botox"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Facetas de porcelana"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Limpeza dentária (Profilaxia)"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Harmonização facial"
                  }
                },
                // Add more services here
              ]
            }
          })
        }}
      />
    </Head>
  )
}
