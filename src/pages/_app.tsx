import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter, Poppins, JetBrains_Mono } from 'next/font/google'
import Header from '@/components/Header'
import FooterNew from '@/components/FooterNew'
import SkipToContent from '@/components/SkipToContent'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <div
      className={`
        ${inter.variable}
        ${poppins.variable}
        ${jetbrainsMono.variable}
        font-sans
      `}
    >
      <SkipToContent />
      <Header />
      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <main id="main-content">
            <Component {...pageProps} />
          </main>
        </motion.div>
      </AnimatePresence>
      <FooterNew />
    </div>
  )
}
