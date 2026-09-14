import { ArrowUpRight, Heart, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import communityImage from '../../assets/img21.jpg'

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#8f111b] text-white">
      {/* Background image */}
      <img
        src={communityImage}
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark red overlays */}
      <div className="absolute inset-0 bg-[#8f111b]/85" />
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-[#8f111b]/20 to-black/60" />

      {/* Decorative elements */}
      <div className="absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/10" />
      <div className="absolute -right-16 -top-16 h-[290px] w-[290px] rounded-full border border-white/10" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-white/10" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:py-36 lg:px-8 lg:py-44">
        {/* Small label */}
        <div className="flex items-center gap-3">
          <span className="h-px w-10 bg-white/50" />

          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            Faites la différence
          </span>
        </div>

        {/* Main content */}
        <div className="mt-10 grid gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div>
            <h2 className="max-w-5xl font-serif text-5xl leading-[0.92] tracking-[-0.045em] sm:text-7xl lg:text-[6.5rem]">
              Prendre soin commence
              <span className="block italic font-normal text-white/80">
                avec vous.
              </span>
            </h2>

            <p className="mt-10 max-w-2xl text-lg leading-8 text-white/75 sm:text-xl">
              Chaque contribution, chaque geste d’entraide et chaque acte de
              compassion peuvent contribuer à créer une communauté en meilleure
              santé et mieux accompagnée.
            </p>
          </div>

          {/* Action card */}
          <div className="lg:justify-self-end">
            <div className="max-w-sm rounded-[2rem] border border-white/15 bg-black/15 p-7 backdrop-blur-sm sm:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-ivp-red">
                <Heart size={20} fill="currentColor" strokeWidth={1.5} />
              </div>

              <h3 className="mt-7 font-serif text-3xl leading-tight">
                Votre soutien peut devenir une source d’espoir.
              </h3>

              <p className="mt-4 text-sm leading-6 text-white/65">
                Soutenez l’IVP et aidez-nous à continuer de rapprocher les soins
                des personnes qui en ont besoin.
              </p>

              <div className="mt-8 flex flex-col gap-3">
                <Link
                  to="/donate"
                  className="group inline-flex items-center justify-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ivp-red transition duration-300 hover:bg-white/90"
                >
                  Faire un don à l’IVP
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>

                <Link
                  to="/contact"
                  className="group inline-flex items-center justify-center gap-3 rounded-full border border-white/25 px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white/10"
                >
                  S’impliquer
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-24 flex flex-col gap-5 border-t border-white/15 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 text-sm text-white/60">
            <Sparkles size={16} />
            <span>Santé · Communauté · Humanité</span>
          </div>

          <p className="text-sm text-white/50">
            Ensemble, nous pouvons aller plus loin.
          </p>
        </div>
      </div>
    </section>
  )
}
