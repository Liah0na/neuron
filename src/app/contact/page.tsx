import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa6'

export default function ContactPage() {
  return (
    <>
      <div className="relative w-full h-54" id="contact">
        <Image
          alt="Aritifial Intelligence - PixABay.com"
          className="object-cover"
          fill
          src="https://cdn.pixabay.com/photo/2024/05/21/19/58/code-8779057_1280.jpg"
        />
        <div className="container relative h-54 mx-auto">
          <div className="absolute bottom-0 bg-white px-8 py-1 rounded-t-full right-0 shadow text-xs font-medium">
            <Link href="/">Home</Link> / Contact
          </div>
        </div>
      </div>
      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="space-y-8">
          <div className="text-sm text-gray-500">/ get in touch /</div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            We are always ready to help you and answer your questions
          </h1>
          <p className="text-gray-600">
            Pacific hake false trevally queen parrotfish black prickleback mosshead warbonnet sweeper! Greenling sleeper.
          </p>

          <div className="grid grid-cols-2 gap-8 text-sm">
            <div>
              <h3 className="font-semibold mb-2">Call Center</h3>
              <p>+55 (21) 97120-0622</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Our Location</h3>
              <p>Niteroi, RJ, Brazil</p>
              <p>Rua. Joaquim Tavora 104</p>
              <p>CEP: 24230-540</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Email</h3>
              <p><a href="mailto:contact@neuronit.com.br" className="underline">contact@neuronit.com.br</a></p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Social network</h3>
              <div className="flex space-x-4 mt-1">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-500"><FaFacebookF /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sky-400"><FaXTwitter /></a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-300"><FaLinkedinIn /></a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500"><FaYoutube /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gray-100 rounded-2xl p-8 shadow-sm">
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-8 text-sm">
            Define your goals and identify areas where AI can add value to your business
          </p>
          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Full name"
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full border-b border-gray-300 bg-transparent py-2 focus:outline-none focus:border-black resize-none"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 bg-black text-white py-2 px-6 rounded-full hover:bg-gray-800 transition"
              >
                ➤ Send a message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  )
}
