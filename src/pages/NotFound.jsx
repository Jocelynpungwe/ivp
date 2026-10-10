import { Link } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta'

export default function NotFound() {
  useDocumentMeta('Page introuvable — IVP & MF Médical')
  return (
    <section className="container-page flex min-h-[60vh] flex-col items-center justify-center text-center">
      <p className="section-label">404</p>
      <h1 className="mt-4 font-display text-5xl">Page introuvable.</h1>
      <Link to="/" className="mt-7 rounded-full bg-ivp-red px-7 py-4 text-sm font-bold text-white">Retour à l’accueil</Link>
    </section>
  )
}
