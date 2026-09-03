import { Mail, MapPin, Facebook, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  return <section className="container-page py-20 sm:py-24"><div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
    <div><SectionHeading eyebrow="Contact" title="Let’s connect." text="Replace the placeholders below with IVP’s official contact details."/><div className="mt-10 space-y-6">
      <div className="flex gap-4"><Mail className="mt-1 shrink-0 text-ivp-red" size={20}/><div><p className="text-xs font-bold uppercase tracking-wider text-neutral-400">Email</p><p className="mt-1 text-sm">contact@ivp-example.org</p></div></div>
      <div className="flex gap-4"><MapPin className="mt-1 shrink-0 text-ivp-red" size={20}/><div><p className="text-xs font-bold uppercase tracking-wider text-neutral-400">Location</p><p className="mt-1 text-sm">Add official IVP address</p></div></div>
      <a href="https://www.facebook.com/profile.php?id=100091649801529" target="_blank" rel="noreferrer" className="flex items-center gap-4 text-sm font-semibold hover:text-ivp-red"><Facebook className="text-ivp-red" size={20}/> Visit IVP on Facebook</a>
    </div></div>
    <form className="rounded-[2rem] bg-[#f7f4f2] p-7 sm:p-10" onSubmit={(e)=>e.preventDefault()}>
      <div className="grid gap-5 sm:grid-cols-2">{['Name','Email'].map(x=><label key={x} className="text-sm font-semibold">{x}<input type={x==='Email'?'email':'text'} className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-ivp-red" placeholder={x==='Email'?'you@example.com':'Your name'}/></label>)}</div>
      <label className="mt-5 block text-sm font-semibold">Subject<input className="mt-2 w-full rounded-xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-ivp-red" placeholder="How can we help?"/></label>
      <label className="mt-5 block text-sm font-semibold">Message<textarea rows="6" className="mt-2 w-full resize-none rounded-xl border border-neutral-200 bg-white px-4 py-3 outline-none focus:border-ivp-red" placeholder="Write your message..."/></label>
      <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-ivp-red px-7 py-4 text-sm font-bold text-white hover:bg-ivp-red-dark">Send message <Send size={16}/></button>
    </form>
  </div></section>
}