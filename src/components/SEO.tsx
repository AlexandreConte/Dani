import Head from "next/head";

interface SeoProps {
  title?: string;
  keywords?: string;
  description?: string;
  canonicalPath?: string;
  article?: boolean;
  headline?: string;
  image?: string;
  publishedTime?: string;
}

export default function SEO(props: SeoProps) {
  const siteUrl = "https://www.dradanielaconte.com.br";
  const defaultImageUrl = `${siteUrl}/images/perfil.webp`;

  const defaultDescription =
    "Clínica Anima Odontologia da Dra. Daniela Conte no Campeche - Florianópolis (Shopping Oka Floripa).";

  return (
    <Head>
      <title>
        {props.title ??
          "Anima Odontologia | Dra. Daniela Conte - Florianópolis"}
      </title>
      <link rel="icon" href="favicon.svg" type="image/svg" />
      <meta
        name="description"
        content={
          props.description ??
          "Clínica Anima Odontologia | Dra. Daniela Conte | Campeche - Florianópolis (Shopping Oka Floripa)."
        }
      />
      <meta
        name="keywords"
        content={
          props.keywords ??
          "dentista campeche, dentista florianópolis, clínica odontológica florianópolis, prótese dentária, reabilitação oral, oka floripa, clínica anima odontologia, dentista especialista, dentista especializada"
        }
      />
      <meta name="robots" content="index, follow" />
      <link
        rel="canonical"
        href={`https://www.dradanielaconte.com.br/${props.canonicalPath ?? ""}`}
      />

      {/* Open Graph / Redes Sociais  PARA USO FUTURO */}
      {/* <meta property="og:image" content={defaultImageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/webp" /> */}

      <meta
        property="og:type"
        content={props.article ? "article" : "website"}
      />
      <meta
        property="og:title"
        content="Anima Odontologia - Dentista em Florianópolis"
      />
      <meta
        property="og:description"
        content="Clínica Anima Odontologia no Shopping Oka Floripa, Campeche."
      />
      <meta
        property="og:site_name"
        content="Dra. Daniela Conte | Anima Odontologia"
      />

      {/* Dados Estruturados de Negócio Local para o Google (JSON-LD) */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={
          props.article
            ? {
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Article",
                  headline: props.headline,
                  author: {
                    "@type": "Person",
                    name: "Dra. Daniela Conte",
                  },
                  datePublished:
                    props.publishedTime ?? new Date().toISOString(),
                  image: [defaultImageUrl],
                  publisher: {
                    "@type": "Organization",
                    name: "Dra. Daniela Conte | Anima Odontologia",
                  },
                  description: props.description ?? defaultDescription,
                }),
              }
            : {
                __html: JSON.stringify({
                  "@context": "https://schema.org",
                  "@type": "Dentist",
                  name: "Dra. Daniela Conte | Anima Odontologia",
                  telephone: "+55-48-99929-9977",
                  description:
                    "Clínica Anima Odontologia | Dra Daniela Conte dentista especializada em Prótese Dentária, Estética e Reabilitação Oral em Florianópolis.",
                  address: {
                    "@type": "PostalAddress",
                    streetAddress:
                      "Shopping Oka Floripa, Torre Sol, SC-405, nº 4397, Sala 208",
                    addressLocality: "Campeche, Florianópolis",
                    addressRegion: "SC",
                    postalCode: "88065-000",
                    addressCountry: "BR",
                  },
                  geo: {
                    "@type": "GeoCoordinates",
                    latitude: -27.699724,
                    longitude: -48.510780,
                  },
                  areaServed: {
                    "@type": "City",
                    name: "Florianópolis",
                  },
                  hasOfferCatalog: {
                    "@type": "OfferCatalog",
                    name: "Serviços Odontológicos",
                    itemListElement: [
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Prótese tipo protocolo",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Estética Dental",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Reabilitação Oral",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Implante de zircônia",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Implante de titânio",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Toxina Botulínica",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Facetas e lentes",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Profilaxia",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Harmonização facial",
                        },
                      },
                      {
                        "@type": "Offer",
                        itemOffered: {
                          "@type": "Service",
                          name: "Clareamento dental",
                        },
                      },
                      // Add more services here
                    ],
                  },
                }),
              }
        }
      />
    </Head>
  );
}
