import Head from 'next/head'
import Header from '@/components/Header'
import Page from '@/components/common/Page'
import MainContent from '@/components/Main'
import WhatsAppContact from '@/components/WhatsAppContact/WhatsAppContact'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Dra. Daniela Conte | Dentista especializada em Prótese</title>
      </Head>
      <Page>
        <Header />
        <MainContent />
        <WhatsAppContact />
      </Page>
    </div>
  )
}