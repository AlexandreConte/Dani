import Head from "next/head";

interface SeoProps {
  title?: string
  keywords?: string
  description?: string
}

export default function SEO(props: SeoProps) {
  return (
    <Head>
      <title>{props.title ?? "Anima Odontologia | Dra. Daniela Conte - Florianópolis"}</title>
      <meta name="description" content={props.description ?? "Clínica Anima Odontologia da Dra. Daniela Conte no Campeche - Florianópolis (Shopping Oka Floripa)."} />
      <meta name="keywords" content={props.keywords ?? "dentista campeche, dentista florianópolis, clínica odontológica florianópolis, prótese dentária, reabilitação oral, oka floripa, clínica anima odontologia, dentista especialista, dentista especializada"} />
      <meta name="robots" content="index, follow" />

      {/* Open Graph / Redes Sociais */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Anima Odontologia - Dentista em Florianópolis" />
      <meta property="og:description" content="Clínica Anima Odontologia no Shopping Oka Floripa, Campeche." />
      <meta property="og:site_name" content="Dra. Daniela Conte" />

      {/* Dados Estruturados de Negócio Local para o Google (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            "name": "Dra. Daniela Conte",
            "description": "Clínica odontológica especializada em Prótese Dentária, estética e reabilitação oral.",
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
            }
          })
        }}
      />
    </Head>
  )
}
