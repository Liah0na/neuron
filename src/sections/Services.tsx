import Image from 'next/image'
import Link from 'next/link'

export function Services() {
  return (
    <>
      <section className="mx-auto services" id="services">
        <div className="max-w-7xl mx-auto px-4 space-y-8">
          <div className="text-sm text-gray-500">/ services /</div>
        </div>
        <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <div className="relative h-96 w-full">
                <Image
                  alt="Scooter Rental Cozumel"
                  className="object-cover"
                  fill
                  sizes="(max-width: 100%)"
                  src="/images/scooter-rental-cozumel.png"
                />
              </div>
              <div className="p-2 text-center text-white font-medium">
                <Link className="px-3 py-2 text-sm inline-flex items-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  href="https://neorgon.github.io/wdd230/scootbedoo/"
                  target="_blank">
                  Scooter Rental Cozumel Project
                </Link>
              </div>
            </div>
            <div>
              <div className="relative h-96 w-full">
                <Image
                  alt="Handcrafted Haven"
                  className="object-cover"
                  fill
                  sizes="(max-width: 100%)"
                  src="/images/handcrafted-haven.png"
                />
              </div>
              <div className="p-2 text-center text-white font-medium">
                <Link className="px-3 py-2 text-sm inline-flex items-center bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  href="https://handcrafted-haven-kappa.vercel.app/"
                  target="_blank">
                  Handcrafted Haven Project
                </Link>
              </div>
            </div>
          </div>
          <div>
            <h2 className="home-slogan">Lorem Ipsum Dolor Consectetur</h2>
            <ul>
              <li>• Etiam tristique tortor eget lorem sollicitudin posuere.</li>
              <li>• Fusce nec mi imperdiet, ullamcorper sem at, tristique sem.</li>
              <li>• Cras ac quam tristique, cursus urna non, eleifend velit.</li>
              <li>• Ut bibendum justo at luctus tristique.</li>
              <li>• Phasellus dictum mi vel justo tempus mollis.</li>
              <li>• Quisque fringilla est et diam ultricies placerat.</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}