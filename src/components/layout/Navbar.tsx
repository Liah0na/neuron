export function Navbar() {
  return (
    <header className="w-full py-4 px-6 bg-white shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Neuron IT</h1>
      <nav className="space-x-6">
        <a href="#services" className="text-gray-700 hover:text-blue-600">Servicios</a>
        <a href="#about" className="text-gray-700 hover:text-blue-600">Sobre Nosotros</a>
        <a href="#contact" className="text-gray-700 hover:text-blue-600">Contacto</a>
      </nav>
    </header>
  )
}
