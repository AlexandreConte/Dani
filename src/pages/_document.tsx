import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <link rel="icon" href="favicon.svg" type="image/svg" />
      </Head>
      <body className='max-w-full w-full bg'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
