import { useDispatch, useSelector } from 'react-redux'
import { setDonationAmount } from '../features/ui/uiSlice'
import SectionHeading from '../components/SectionHeading'
import useDocumentMeta from '../hooks/useDocumentMeta'

const amounts = [25,50,100,250]

export default function Donate() {
  useDocumentMeta('Faire un don — IVP', 'Soutenez l’IVP et aidez-nous à rapprocher les soins des personnes les plus démunies : orphelins, enfants de la rue, veuves, personnes âgées et handicapés.')
  const dispatch = useDispatch()
  const amount = useSelector((state)=>state.ui.donationAmount)
  return <section className="bg-[#f7f4f2] py-20 sm:py-24"><div className="container-page"><div className="mx-auto max-w-3xl">
    <SectionHeading align="center" eyebrow="Soutenir l’IVP" title="Transformez votre générosité en soins." text="Chaque don aide l’IVP à offrir gratuitement des soins aux plus démunis : orphelins, enfants de la rue, veuves, personnes âgées et personnes handicapées."/>
    <div className="mt-12 rounded-[2rem] bg-white p-7 shadow-sm sm:p-10"><p className="text-sm font-bold">Choisissez un montant</p><div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">{amounts.map(n=><button key={n} type="button" onClick={()=>dispatch(setDonationAmount(n))} className={`rounded-2xl border px-4 py-4 text-sm font-bold ${amount===n?'border-ivp-red bg-ivp-red text-white':'border-neutral-200 hover:border-ivp-red hover:text-ivp-red'}`}>${n}</button>)}</div>
      <label className="mt-6 block text-sm font-semibold">Ou saisissez un autre montant<div className="mt-2 flex overflow-hidden rounded-xl border border-neutral-200"><span className="bg-neutral-50 px-4 py-3 text-neutral-500">$</span><input type="number" min="1" value={amount} onChange={(e)=>dispatch(setDonationAmount(Number(e.target.value)))} className="w-full px-4 py-3 outline-none"/></div></label>
      <button type="button" className="mt-7 w-full rounded-full bg-ivp-red px-6 py-4 text-sm font-bold text-white">Continuer avec ${amount||0}</button>
      <p className="mt-4 text-center text-xs text-neutral-400">Démonstration — le paiement en ligne n’est pas encore connecté.</p>
    </div>
  </div></div></section>
}