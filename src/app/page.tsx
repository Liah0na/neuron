import Pricing from '@/sections/Pricing'
import Contact from './contact/page'
import { Services } from '@/sections/Services'

export default function Home() {
  return (
    <section className="container mx-auto">
      <Pricing />
      <Services />
      <Contact />
    </section>
  )
}
