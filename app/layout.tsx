import Footer from '@/components/Footer'
import './globals.css'
import { Urbanist } from 'next/font/google'
import Navbar from '@/components/Navbar'
import ToastProvider from '@/providers/ToastProvider'
import ModalProvider from '@/providers/ModalProvider'
import { ThemeProvider } from '@/providers/ThemeProvider'

const font = Urbanist({ subsets: ['latin'] })


export const metadata = {
  title: 'ecommerce',
  description: 'ecommerce ',
}



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
      <ThemeProvider
attribute="class" 
defaultTheme="system" 
enableSystem
        >
      <ToastProvider/>
      <ModalProvider/>
        <Navbar/>
        {children}
        <Footer/>

        </ThemeProvider>
        </body>
    </html>
  )
}
