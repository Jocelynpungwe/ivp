import { HeartHandshake, Stethoscope, Target, Users } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

const values = [['Compassion',HeartHandshake],['Professional care',Stethoscope],['Purpose',Target],['Community',Users]]

export default function About() {
  return <>
    <section className="bg-[#f7f4f2] py-20"><div className="container-page"><p className="section-label">About IVP</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1] sm:text-6xl lg:text-7xl">A healthcare mission built around people.</h1><p className="mt-7 max-w-2xl text-base leading-8 text-ivp-muted">This page is ready for IVP’s official story, founding history, leadership message and mission.</p></div></section>
    <section className="container-page grid gap-14 py-24 lg:grid-cols-2 lg:items-center"><div className="overflow-hidden rounded-[2rem]"><img src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=85" alt="Nurse providing care" className="aspect-[4/3] w-full object-cover"/></div><SectionHeading eyebrow="Our story" title="A place for the real story of IVP." text="Replace this starter copy with the organization’s official history, objectives, geographic reach and communities served." /></section>
    <section className="border-y border-neutral-200 py-20"><div className="container-page"><SectionHeading eyebrow="Our values" title="The principles behind the work."/><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{values.map(([label,Icon])=><div key={label} className="rounded-3xl bg-[#f7f4f2] p-7"><Icon className="text-ivp-red" size={24}/><h3 className="mt-12 font-display text-2xl">{label}</h3></div>)}</div></div></section>
  </>
}