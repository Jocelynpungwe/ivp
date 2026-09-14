import { useState } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'

const questions = [
  {
    number: '01',
    question: 'What is IVP?',
    answer:
      'IVP — Infirmières des Voies Publiques — is a community-focused healthcare organization working to bring compassionate care and support closer to people who need it.',
  },
  {
    number: '02',
    question: 'Who does IVP support?',
    answer:
      'IVP focuses on supporting people and communities who may experience barriers to healthcare and essential support, with particular attention to vulnerable individuals.',
  },
  {
    number: '03',
    question: 'How can I volunteer with IVP?',
    answer:
      'We welcome people who want to contribute their time, skills and experience. Get in touch with our team through the contact form and tell us how you would like to contribute.',
  },
  {
    number: '04',
    question: 'Can my organization partner with IVP?',
    answer:
      'Yes. Partnerships can help expand the reach and impact of community-focused healthcare initiatives. Contact us to start a conversation about how your organization can work alongside IVP.',
  },
  {
    number: '05',
    question: 'How can I support IVP?',
    answer:
      'You can support IVP through donations, volunteering, partnerships or by helping raise awareness about our work. Every contribution can help us reach more people.',
  },
  {
    number: '06',
    question: 'How can I contact IVP?',
    answer:
      'You can reach us through the contact form on this page or through our social channels. Our team will respond to your inquiry as soon as possible.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggleQuestion = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index))
  }

  return (
    <section className="bg-[#f7f5f2] px-5 py-24 md:px-8 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="grid gap-10 border-b border-black/10 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-10 bg-ivp-red" />

              <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
                Frequently Asked Questions
              </span>
            </div>

            <h2 className="font-serif text-5xl leading-[0.94] tracking-[-0.04em] text-ivp-black md:text-6xl lg:text-7xl">
              Questions?
              <br />
              <span className="italic text-black/60">We&apos;re here.</span>
            </h2>
          </div>

          <div className="lg:justify-self-end">
            <p className="max-w-md text-sm leading-7 text-black/55 md:text-base">
              Learn more about IVP, our work and the different ways you can
              become part of the mission.
            </p>
          </div>
        </div>

        {/* FAQ LIST */}
        <div className="mt-4">
          {questions.map((item, index) => {
            const isOpen = openIndex === index

            return (
              <div key={item.number} className="border-b border-black/10">
                <button
                  type="button"
                  onClick={() => toggleQuestion(index)}
                  aria-expanded={isOpen}
                  className="group flex w-full items-center gap-5 py-7 text-left md:py-9"
                >
                  {/* NUMBER */}
                  <span
                    className={`w-8 shrink-0 text-xs font-medium tracking-[0.15em] transition-colors duration-300 ${
                      isOpen ? 'text-ivp-red' : 'text-black/30'
                    }`}
                  >
                    {item.number}
                  </span>

                  {/* QUESTION */}
                  <span
                    className={`flex-1 font-serif text-2xl leading-tight tracking-[-0.02em] transition-colors duration-300 md:text-3xl lg:text-4xl ${
                      isOpen
                        ? 'text-ivp-black'
                        : 'text-black/65 group-hover:text-ivp-black'
                    }`}
                  >
                    {item.question}
                  </span>

                  {/* ICON */}
                  <span
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 md:h-12 md:w-12 ${
                      isOpen
                        ? 'rotate-45 border-ivp-red bg-ivp-red text-white'
                        : 'border-black/10 text-black/45 group-hover:border-ivp-red group-hover:text-ivp-red'
                    }`}
                  >
                    <Plus size={19} strokeWidth={1.7} />
                  </span>
                </button>

                {/* ANSWER */}
                <div
                  className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="grid grid-cols-[32px_1fr] gap-5 pb-8 md:grid-cols-[32px_1fr] md:pb-10">
                      <div />

                      <p className="max-w-2xl text-sm leading-7 text-black/55 md:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* BOTTOM CTA */}
        <div className="mt-16 flex flex-col justify-between gap-8 rounded-[2rem] bg-ivp-red p-7 text-white md:p-10 lg:flex-row lg:items-center lg:p-12">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-white/60">
              Still have questions?
            </p>

            <h3 className="max-w-2xl font-serif text-3xl leading-tight md:text-4xl lg:text-5xl">
              Let&apos;s start a
              <span className="italic text-white/75"> conversation.</span>
            </h3>
          </div>

          <a
            href="#contact-form"
            className="group inline-flex shrink-0 items-center justify-between gap-6 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ivp-black transition duration-300 hover:bg-[#151313] hover:text-white"
          >
            Contact IVP
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-ivp-red text-white transition duration-300 group-hover:translate-x-1 group-hover:bg-white group-hover:text-ivp-black">
              <ArrowUpRight size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
