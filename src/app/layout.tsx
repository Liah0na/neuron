import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { Inter, Roboto_Condensed } from 'next/font/google'

const inter = Inter({
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '700', '900'],
})

const roboto = Roboto_Condensed({
  subsets: ['latin'],
  variable: '--font-roboto',
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: {
    template: "%s | Neuron IT",
    default: "Neuron IT Ltda."
  },
  authors: [{
    name: "Nestor R. Otondo R.",
    url: "",
  }],
  description: "Nueron IT Solutions Ltda.",
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png"
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.variable} ${roboto.variable}`} lang="es">
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
