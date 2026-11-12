import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import FixedMenu from '@/components/FixedMenu'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <FixedMenu />
    </>
  )
}
