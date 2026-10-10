import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  ArrowUpRight,
  CheckCircle2,
  Facebook,
  Instagram,
  Mail,
  MapPin,
} from 'lucide-react'

const SOINS_REASON = 'Rendez-vous — soins esthétiques (MF Médical)'

const contactReasons = [
  SOINS_REASON,
  'General Inquiry',
  'Volunteer',
  'Partnership',
  'Healthcare Support',
  'Donation',
  'Other',
]

export default function ContactInfoForm() {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    reason: searchParams.get('sujet') === 'soins' ? SOINS_REASON : '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Temporary submission behaviour.
    // Connect this to your backend/email service later.
    setSubmitted(true)

    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      reason: '',
      message: '',
    })
  }

  return (
    <section
      id="contact-form"
      className="bg-white px-5 py-24 md:px-8 lg:px-12 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px]">
        {/* HEADER */}
        <div className="mb-16 max-w-3xl">
          <div className="mb-6 flex items-center gap-3">
            <span className="h-px w-10 bg-ivp-red" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
              Get in touch
            </span>
          </div>

          <h2 className="font-serif text-5xl leading-[0.95] tracking-[-0.04em] text-ivp-black md:text-6xl lg:text-7xl">
            We&apos;d love to
            <br />
            <span className="italic">hear from you.</span>
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid gap-16 lg:grid-cols-[0.75fr_1.25fr] lg:gap-24">
          {/* LEFT — CONTACT INFORMATION */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="max-w-md text-base leading-8 text-black/60">
                Have a question about IVP, want to get involved, or looking for
                a way to support our work? Reach out and let&apos;s start a
                conversation.
              </p>

              {/* CONTACT DETAILS */}
              <div className="mt-12 space-y-8">
                {/* EMAIL */}
                <div className="group flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f7f5f2] text-ivp-red transition duration-300 group-hover:bg-ivp-red group-hover:text-white">
                    <Mail size={19} />
                  </div>

                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                      Email
                    </p>

                    <a
                      href="mailto:info@ivp.org"
                      className="text-base font-medium text-ivp-black transition hover:text-ivp-red"
                    >
                      info@ivp.org
                    </a>
                  </div>
                </div>

                {/* LOCATION */}
                <div className="group flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f7f5f2] text-ivp-red transition duration-300 group-hover:bg-ivp-red group-hover:text-white">
                    <MapPin size={19} />
                  </div>

                  <div>
                    <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                      Location
                    </p>

                    <p className="text-base font-medium text-ivp-black">
                      Community Based
                    </p>

                    <p className="mt-1 text-sm text-black/45">
                      Serving communities through compassionate care
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="mt-14 border-t border-black/10 pt-8 lg:mt-24">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-black/40">
                Follow IVP
              </p>

              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=100091649801529"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="IVP Facebook"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-ivp-black transition duration-300 hover:border-ivp-red hover:bg-ivp-red hover:text-white"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="#"
                  aria-label="IVP Instagram"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 text-ivp-black transition duration-300 hover:border-ivp-red hover:bg-ivp-red hover:text-white"
                >
                  <Instagram size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="rounded-[2rem] bg-[#f7f5f2] p-6 md:p-10 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[520px] flex-col items-center justify-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-ivp-red text-white">
                  <CheckCircle2 size={36} strokeWidth={1.5} />
                </div>

                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-ivp-red">
                  Message received
                </p>

                <h3 className="max-w-lg font-serif text-4xl leading-tight text-ivp-black md:text-5xl">
                  Thank you for reaching out.
                </h3>

                <p className="mt-5 max-w-md text-sm leading-7 text-black/55">
                  Your message has been received. We&apos;ll be in touch as soon
                  as possible.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-black/10 px-6 py-3 text-sm font-semibold text-ivp-black transition hover:border-ivp-red hover:bg-ivp-red hover:text-white"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* FORM TOP */}
                <div className="mb-10 flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-ivp-red">
                      Send a message
                    </p>

                    <h3 className="font-serif text-3xl text-ivp-black md:text-4xl">
                      Start a conversation.
                    </h3>
                  </div>

                  <div className="hidden h-12 w-12 items-center justify-center rounded-full bg-ivp-red text-white md:flex">
                    <ArrowUpRight size={20} />
                  </div>
                </div>

                {/* NAME */}
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45"
                    >
                      First name
                    </label>

                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      placeholder="First name"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-sm text-ivp-black outline-none transition placeholder:text-black/30 focus:border-ivp-red"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="lastName"
                      className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45"
                    >
                      Last name
                    </label>

                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      placeholder="Last name"
                      className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-sm text-ivp-black outline-none transition placeholder:text-black/30 focus:border-ivp-red"
                    />
                  </div>
                </div>

                {/* EMAIL */}
                <div className="mt-8">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45"
                  >
                    Email address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full border-b border-black/15 bg-transparent px-0 py-4 text-sm text-ivp-black outline-none transition placeholder:text-black/30 focus:border-ivp-red"
                  />
                </div>

                {/* REASON */}
                <div className="mt-8">
                  <label
                    htmlFor="reason"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45"
                  >
                    How can we help?
                  </label>

                  <select
                    id="reason"
                    name="reason"
                    value={formData.reason}
                    onChange={handleChange}
                    required
                    className="w-full cursor-pointer border-b border-black/15 bg-transparent px-0 py-4 text-sm text-ivp-black outline-none transition focus:border-ivp-red"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>

                    {contactReasons.map((reason) => (
                      <option key={reason} value={reason}>
                        {reason}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="mt-8">
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45"
                  >
                    Your message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Tell us a little about how we can help..."
                    className="w-full resize-none border-b border-black/15 bg-transparent px-0 py-4 text-sm leading-7 text-ivp-black outline-none transition placeholder:text-black/30 focus:border-ivp-red"
                  />
                </div>

                {/* SUBMIT */}
                <div className="mt-10 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <p className="max-w-xs text-[11px] leading-5 text-black/40">
                    By submitting this form, you agree to be contacted by IVP
                    regarding your inquiry.
                  </p>

                  <button
                    type="submit"
                    className="group inline-flex shrink-0 items-center justify-between gap-6 rounded-full bg-ivp-red px-6 py-4 text-sm font-semibold text-white transition duration-300 hover:bg-[#151313]"
                  >
                    Send message
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition duration-300 group-hover:translate-x-1">
                      <ArrowUpRight size={16} />
                    </span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
