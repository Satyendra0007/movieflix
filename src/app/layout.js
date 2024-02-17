import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Navbar from "@/app/component/Navbar"
import Footer from './component/Footer'
import SearchState from './context/SearchState'

// const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({ subsets: ["latin"], weight: ['400'] })

export const metadata = {
  title: 'Movieflix',
  description: 'Get Movies information',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <SearchState>
          <Navbar />
          {children}
          <Footer />
        </SearchState>
      </body>
    </html>
  )
}
