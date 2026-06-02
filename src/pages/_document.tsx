import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="Dra. Daniela Conte te ajuda a conquistar o sorriso dos seus sonhos em Florianópolis" />
        <link rel="icon" href="favicon.svg" type="image/svg" />
      </Head>
      <body className='max-w-full w-full bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
