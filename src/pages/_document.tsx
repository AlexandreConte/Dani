import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
    return (
        <Html lang="pt-br">
            <Head>
                <meta name="description" content="Dentista Florianópolis | Especialista em prótese" />
                <meta name="google-site-verification" content="jLf3yyNpt8ZT5I8sD2xF7zBgcEzUqH20ZqI7i7_G6pY" />
                <link rel="icon" href="favicon.svg" type="image/svg" />
                {/* Google tag (gtag.js) */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-12LD4PZ140"></script>
                <script dangerouslySetInnerHTML={{
                    __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}');
                    `
                }} />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}