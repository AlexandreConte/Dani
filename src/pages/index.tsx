import Head from 'next/head'
import Header from '@/components/Header'
import Page from '@/components/common/Page'
import MainContent from '@/components/Main'
import ScrollTop from '@/components/ScrollTop'

export default function Home() {
  return (
    <>
      <Head>
        <title>Dra. Daniela Conte | Dentista especializada em Prótese</title>
      </Head>
      <Page>
        <Header />
        <MainContent />
        <ScrollTop />
      </Page>
    </>
  )
}