// next components
import Head from 'next/head'

// components
import Header from '@/components/Header'
import Page from '@/components/common/Page'

// images
import Main from '@/components/Main'
import ScrollTop from '@/components/ArrowUp'

export default function Home() {
    return (
        <Page>
            <Head>
                <title>Dra. Daniela Conte | Dentista especializada em Prótese</title>
            </Head>
            <Header />
            <Main />
            <ScrollTop />
        </Page>
    )
}