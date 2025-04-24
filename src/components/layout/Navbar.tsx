import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

export function Navbar() {
  return (
    <header className="border-b navbar">
      <section className="container mx-auto my-2">
        <div className="hidden sm:flex w-full top-bar text-white px-4 py-1 text-sm rounded-full justify-between items-center sticky top-0 z-50">
          <div className="flex gap-6">
            <span>Call us: +55 (21) 97120-0622</span>
            <span>Email: <a href="mailto:contact@neuronit.com.br" className="underline">contact@neuronit.com.br</a></span>
          </div>
          <div className="flex gap-3">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-sky-400"><FaXTwitter /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300"><FaLinkedinIn /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><FaYoutube /></a>
          </div>
        </div>
        <div className="flex justify-between items-center py-4 px-6">
          <Link href="/" className="flex items-center gap-2 logo">
            <Image src="/images/logo.png" alt="Neuron IT" width={32} height={32} />
            <span className="italic">Neuron</span> IT
          </Link>
          <nav className="space-x-6">
            <a href="#services" className="text-gray-700 hover:text-blue-600">Servicios</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600">Sobre Nosotros</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600">Contacto</a>
          </nav>
        </div>
      </section>
    </header>
  )
}
