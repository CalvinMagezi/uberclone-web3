import '../styles/globals.css'
import type { AppProps } from 'next/app'
import 'mapbox-gl/dist/mapbox-gl.css'
import { UberProvider } from '../context/uberContext'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UberProvider>
      <Component {...pageProps} />
    </UberProvider>
  )
}

export default MyApp
