import type { Metadata } from 'next'
import { Bricolage_Grotesque } from 'next/font/google'
import './globals.css'
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const bricolagegrotesque = Bricolage_Grotesque({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Rahmat Junaid',
  description: 'The personal site of Rahmat Junaid',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="{bricolagegrotesque.className}  bg-[#f5f2ff]">     <Navbar/>
  
  <main className=" max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 mt-5">{children}<Footer/></main></body>
    </html>
  )
}
