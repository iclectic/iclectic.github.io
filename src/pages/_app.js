import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import '@/styles/globals.css';
import { Montserrat, Inter, Poppins } from "next/font/google";
import Head from 'next/head';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont"
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins"
});

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head> 
      <main className={`
        ${montserrat.variable} 
        ${inter.variable} 
        ${poppins.variable} 
        font-mont font-sans bg-light dark:bg-dark w-full min-h-screen
      `}>
        <NavBar />
        <AnimatePresence mode="wait">
          <Component key={router.asPath} {...pageProps} />  
        </AnimatePresence>       
        <Footer />
      </main>
    </>
    
  ); 

}
