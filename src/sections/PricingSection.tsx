import { WaveBackground } from "@/styles/WaveBackground";

export default function PricingSection() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto">
      <div>
        <p className="text-sm text-gray-500 mb-2">/ pricing /</p>
        <h2 className="home-slogan text-4xl font-bold leading-tight">
          Simple and <br />
          flexible. <br />
          Only pay for <br />
          what you use.
        </h2>
      </div>

      {/* Planes */}
      <div className="flex flex-col gap-6">
        {/* Basic Plan */}
        <div className="rounded-2xl border border-blue-200 p-6 flex justify-between items-start shadow-sm">
          <div>
            <h3 className="text-xl font-semibold">Basic</h3>
            <p className="text-gray-500 mb-4">Great for private individuals</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 1 User</li>
              <li>• Unlimited Projects</li>
              <li>• Download prototypes</li>
              <li>• 1 Gb workspace</li>
            </ul>
          </div>
          <div className="text-right">
            <h4 className="text-2xl font-bold">Free</h4>
            <button className="mt-4 px-4 py-2 border border-purple-500 text-purple-500 rounded-full hover:bg-blue-50 transition">
              ➤ Get started
            </button>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative bg-gray-100 rounded-2xl p-6 flex justify-between items-start shadow-md">
          <WaveBackground />
          {/* Popular badge */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white px-4 py-1 rounded-b-full shadow text-xs font-medium">
            Popular
          </div>

          <div>
            <h3 className="text-xl font-semibold">Premium</h3>
            <p className="text-gray-500 mb-4">14 days free period</p>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 3 Users</li>
              <li>• Unlimited Projects</li>
              <li>• Download prototypes</li>
              <li>• 100 Gb workspace</li>
            </ul>
          </div>
          <div className="text-right">
            <h4 className="text-3xl font-bold">$99<span className="text-base font-normal">/mo</span></h4>
            <button className="mt-4 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition">
              ➤ Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
