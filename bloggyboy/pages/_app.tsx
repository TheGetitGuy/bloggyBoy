import '../styles/globals.css'
import type { AppProps } from 'next/app'
//This initializes the pages
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
