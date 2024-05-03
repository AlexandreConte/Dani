import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="Dentista Florianópolis | Especialista em prótese" />
        <link rel="icon" href="favicon.svg" type="image/svg" />
      </Head>
      <body className='min-w-full bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}