import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Providers from './Providers'
import Navbar from '@/components/Navbar'
import Searchbox from '@/components/Searchbox'
import Footer from '@/components/Footer'
import Banner from '@/components/Banner'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'IMDB - Movies',
  description: 'This is IMDB rating application',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Header />
          <Navbar/>
          <Searchbox/>
          <Banner/>
          {children}
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}
