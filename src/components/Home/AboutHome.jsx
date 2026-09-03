import { Link } from 'react-router-dom'
import {
  ArrowRight,
  HeartHandshake,
  Stethoscope,
  UsersRound,
} from 'lucide-react'

import aboutMainImage from '../../assets/heroImage.jpg'
import aboutSmallImage from '../../assets/heroImage.jpg'
import aboutPortrait from '../../assets/heroImage.jpg'

export default function AboutHome() {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      <div className="container-page">
        <div className="grid items-center gap-16 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* =====================================================
              LEFT — IMAGE COLLAGE
          ====================================================== */}
          <div className="relative mx-auto w-full max-w-[560px]">
            {/* Main Image */}
            <div className="relative ml-auto w-[78%] overflow-hidden rounded-[2rem]">
              <img
                src={aboutMainImage}
                alt="IVP healthcare community"
                className="aspect-[4/4.5] w-full object-cover transition duration-700 hover:scale-[1.02]"
              />

              {/* Subtle image overlay */}
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Smaller Image */}
            <div className="absolute bottom-[-40px] left-0 w-[58%] overflow-hidden rounded-[1.7rem] border-[8px] border-white shadow-2xl">
              <img
                src={aboutSmallImage}
                alt="IVP community care"
                className="aspect-[1/1] w-full object-cover"
              />
            </div>

            {/* Red Information Card */}
            <div className="absolute bottom-[-40px] right-[3%] hidden w-[125px] rounded-[1.4rem] bg-ivp-red p-5 text-white shadow-xl sm:block">
              <div className="mb-8 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-white/10">
                <HeartHandshake size={18} />
              </div>

              <p className="text-2xl font-bold tracking-tight">IVP</p>

              <p className="mt-1 text-[10px] font-medium uppercase leading-4 tracking-[0.12em] text-white/70">
                Care with purpose
              </p>
            </div>

            {/* Decorative circle */}
            <div className="absolute -left-8 top-16 hidden h-16 w-16 rounded-full border border-ivp-red/20 lg:block" />

            <div className="absolute -bottom-16 left-[46%] -z-10 h-40 w-40 rounded-full bg-ivp-red-soft/60" />
          </div>

          {/* =====================================================
              RIGHT — ABOUT CONTENT
          ====================================================== */}
          <div className="relative">
            {/* Label */}
            <div className="mb-6 flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivp-red-soft text-ivp-red">
                <HeartHandshake size={17} />
              </span>

              <p className="text-xs font-bold uppercase tracking-[0.22em] text-ivp-red">
                About Us
              </p>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl font-display text-4xl leading-[1.02] tracking-[-0.04em] sm:text-5xl lg:text-[3.7rem]">
              United in care,
              <br />
              <span className="text-ivp-red">committed to people.</span>
            </h2>

            {/* Description */}
            <p className="mt-7 max-w-xl text-base leading-8 text-ivp-muted">
              IVP brings together healthcare, compassion and community to create
              meaningful support for people who need it most. Through dedicated
              care and human connection, we believe every person deserves to be
              treated with dignity.
            </p>

            {/* Feature + Impact */}
            <div className="mt-10 grid gap-6 sm:grid-cols-[1.2fr_.8fr]">
              {/* Healthcare Support */}
              <div className="border-t border-neutral-200 pt-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-ivp-red/20 text-ivp-red">
                    <Stethoscope size={20} />
                  </div>

                  <div>
                    <h3 className="font-semibold text-neutral-900">
                      Healthcare Support
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-ivp-muted">
                      Providing compassionate healthcare support while helping
                      communities access the care and resources they deserve.
                    </p>
                  </div>
                </div>
              </div>

              {/* Impact */}
              <div className="relative overflow-hidden rounded-2xl bg-[#faf7f6] p-5">
                {/* Decorative shape */}
                <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full border-[12px] border-ivp-red/5" />

                <div className="relative">
                  {/* Portrait */}
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white shadow-sm">
                      <img
                        src={aboutPortrait}
                        alt="IVP community member"
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-neutral-500">
                        People first
                      </p>

                      <p className="text-[10px] text-neutral-400">
                        Community focused
                      </p>
                    </div>
                  </div>

                  {/* Number */}
                  <p className="mt-5 font-display text-3xl font-bold text-ivp-red">
                    Together
                  </p>

                  <p className="mt-1 max-w-[150px] text-xs leading-5 text-neutral-500">
                    Building stronger communities through care and compassion.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <Link
              to="/about"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-ivp-red px-7 py-4 text-sm font-bold text-white shadow-lg shadow-ivp-red/10 transition-all duration-300 hover:bg-ivp-red-dark hover:shadow-xl"
            >
              Discover our story
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition-all duration-300 group-hover:bg-white group-hover:text-ivp-red">
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </Link>

            {/* Small bottom detail */}
            <div className="mt-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-neutral-400">
              <UsersRound size={15} className="text-ivp-red" />

              <span>Healthcare • Community • Dignity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
