import { Html, Head, Main, NextScript } from 'next/document'
import { GoogleAnalytics } from '@next/third-parties/google'

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head>
                <meta name="description" content="Dentista Florianópolis | Especialista em prótese" />
                <meta name="google-site-verification" content="jLf3yyNpt8ZT5I8sD2xF7zBgcEzUqH20ZqI7i7_G6pY" />
                <link rel="icon" href="favicon.svg" type="image/svg" />
                {/* Google tag (gtag.js) */}
                <GoogleAnalytics gaId={`${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `
                }} />
            </Head>
            <body className='min-w-full bg'>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}