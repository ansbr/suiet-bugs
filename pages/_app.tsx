import '@/styles/globals.css'
import { WalletProvider } from '@suiet/wallet-kit'
import type { AppProps } from 'next/app'
import '@suiet/wallet-kit/style.css';

export default function App({ Component, pageProps }: AppProps) {
  return <WalletProvider>
    <Component {...pageProps} />
  </WalletProvider>
}
