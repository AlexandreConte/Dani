import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head>
                <meta name="description" content="Dentista Florianópolis | Especialista em prótese" />
                {/* <meta name="google-site-verification" content="jLf3yyNpt8ZT5I8sD2xF7zBgcEzUqH20ZqI7i7_G6pY" /> */}
                <link rel="icon" href="favicon.svg" type="image/svg" />
            </Head>
            <body className='min-w-full bg'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}