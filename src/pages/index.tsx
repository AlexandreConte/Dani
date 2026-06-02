import Head from 'next/head'
import Header from '@/components/Header'
import Page from '@/components/Shared/Page'
import WhatsAppContact from '@/components/WhatsAppContact'
import About from '@/components/About'
import Quote from '@/components/Quote'
import Clinic from '@/components/Clinic'
import Specializations from '@/components/Specializations'
import Reviews from '@/components/Reviews'
import Contact from '@/components/Contact'
import Adress from '@/components/Address'
import Slogan from '@/components/Slogan'
import Schedule from '@/components/Schedule'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dra. Daniela Conte - Dentista no Campeche, Florianópolis</title>
        <meta name="description" content="Clínica odontológica da Dra. Daniela Conte no Campeche, Florianópolis (Shopping Oka Floripa). Especialista em Prótese Dentária, estética e reabilitação oral." />
        <meta name="keywords" content="dentista campeche, dentista florianópolis, clínica odontológica florianópolis, prótese dentária, reabilitação oral, oka floripa" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph / Redes Sociais */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dra. Daniela Conte - Dentista no Campeche" />
        <meta property="og:description" content="Dentista Especialista em Prótese Dentária, estética e reabilitação oral no Shopping Oka Floripa, Campeche." />
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
      <Page className='max-w-full overflow-x-hidden'>
        <WhatsAppContact />
        <Header />
        <Slogan />
        <main className="bg">
          <About />
          <Quote />
          <Schedule />
          <Clinic />
          <Specializations />
          <Reviews />
          <Contact />
        </main>
        <Footer />
      </Page>
    </div>
  )
}