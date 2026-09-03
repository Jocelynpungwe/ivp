import { ArrowUpRight, Handshake, HeartHandshake } from 'lucide-react'
import { Link } from 'react-router-dom'

const partners = [
  {
    name: 'Partner Organization',
    type: 'Community Partner',
  },
  {
    name: 'Partner Organization',
    type: 'Healthcare Partner',
  },
  {
    name: 'Partner Organization',
    type: 'Community Support',
  },
  {
    name: 'Partner Organization',
    type: 'Collaborating Partner',
  },
]

export default function TrustPartners() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-ivp-red" />
              <span className="text-xs font-semibold uppercase tracking-[0.28em] text-ivp-red">
                Trust & Partnerships
              </span>
            </div>

            <h2 className="max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-ivp-black sm:text-6xl">
              Care is
              <span className="block text-ivp-red">stronger together.</span>
            </h2>
          </div>

          <div className="max-w-xl lg:ml-auto">
            <p className="text-lg leading-8 text-gray-600">
              Meaningful change happens when people, healthcare professionals,
              organizations and communities come together around a shared
              commitment to care.
            </p>

            <p className="mt-5 text-base leading-7 text-gray-500">
              IVP believes that collaboration creates stronger, more sustainable
              support for the people and communities we serve.
            </p>
          </div>
        </div>

        {/* Partnership statement */}
        <div className="mt-20 overflow-hidden rounded-[2rem] bg-[#f5f3f0]">
          <div className="grid lg:grid-cols-[1fr_1.3fr]">
            {/* Red panel */}
            <div className="relative overflow-hidden bg-ivp-red p-8 text-white sm:p-12 lg:p-14">
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/15" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-white/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div>
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/10">
                    <HeartHandshake size={25} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-10 max-w-md font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl">
                    Together, we can reach further.
                  </h3>
                </div>

                <Link
                  to="/contact"
                  className="group mt-14 inline-flex w-fit items-center gap-3 border-b border-white/40 pb-2 text-sm font-semibold uppercase tracking-[0.18em] transition hover:border-white"
                >
                  Become a partner
                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>

            {/* Partner list */}
            <div className="p-8 sm:p-12 lg:p-14">
              <div className="mb-8 flex items-center gap-3">
                <Handshake
                  size={20}
                  strokeWidth={1.5}
                  className="text-ivp-red"
                />

                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                  Our Partners
                </span>
              </div>

              <div className="grid sm:grid-cols-2">
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className={`group border-gray-200 py-7 ${
                      index < 2 ? 'border-b' : ''
                    } ${index % 2 === 0 ? 'sm:border-r sm:pr-8' : 'sm:pl-8'}`}
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        {/* Temporary logo mark */}
                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm ring-1 ring-gray-200">
                          <span className="font-serif text-lg text-ivp-red">
                            IVP
                          </span>
                        </div>

                        <h4 className="font-serif text-xl text-ivp-black">
                          {partner.name}
                        </h4>

                        <p className="mt-2 text-sm text-gray-500">
                          {partner.type}
                        </p>
                      </div>

                      <ArrowUpRight
                        size={18}
                        className="mt-1 text-gray-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-ivp-red"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-20 flex flex-col gap-8 border-t border-gray-200 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-red-50 text-ivp-red">
              <Handshake size={19} strokeWidth={1.5} />
            </div>

            <p className="max-w-md text-sm leading-6 text-gray-500">
              We welcome organizations and individuals who believe healthcare
              and dignity should be accessible to everyone.
            </p>
          </div>

          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-ivp-black"
          >
            Let's work together
            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}
