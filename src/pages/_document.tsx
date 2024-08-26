import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const googleSiteVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION

  return (
    <Html lang="pt-br">
      <Head>
        {googleSiteVerification && <meta name="google-site-verification" content={googleSiteVerification} />}
        <meta name="description" content="Dra. Daniela Conte te ajuda a conquistar o sorriso dos seus sonhos em Florianópolis" />
        <link rel="icon" href="favicon.svg" type="image/svg" />
      </Head>
      <body className='max-w-[100vw] w-full bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}