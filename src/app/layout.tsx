import type { Metadata } from 'next'
import './globals.css'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'

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
    <html lang="es">
      <body className="flex flex-col min-h-screen bg-gray-50 text-gray-800">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
