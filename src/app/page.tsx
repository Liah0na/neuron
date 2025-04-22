import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 text-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
      <h1 className="text-4xl md:text-6xl font-bold mb-6">
        Neuron IT Solutions
      </h1>
      <p className="text-lg md:text-xl mb-8 max-w-2xl">
        Impulsamos tu crecimiento digital con soluciones tecnológicas seguras, eficientes y personalizadas.
      </p>
      <Button>
        Contáctanos <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
    </section>
  )
}
