import { useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ArrowUpRight, Facebook, Menu, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMobileMenu, toggleMobileMenu } from '../features/ui/uiSlice'
import logo from '../assets/ivplogo.png'

// [label, path, dot colour class]
const links = [
  ['Accueil', '/', 'bg-neutral-400'],
  ['IVP · À propos', '/a-propos', 'bg-ivp-red'],
  ['Soins esthétiques', '/soins', 'bg-mf-gold'],
  ['Galerie', '/galerie', 'bg-neutral-400'],
  ['Contact', '/contact', 'bg-neutral-400'],
]

export default function Navbar() {
  const dispatch = useDispatch()
  const open = useSelector((state) => state.ui.mobileMenuOpen)
  const { pathname } = useLocation()

  // Close on navigation
  useEffect(() => {
    dispatch(closeMobileMenu())
  }, [pathname, dispatch])

  // Lock scroll + Escape while the drawer is open
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && dispatch(closeMobileMenu())
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [open, dispatch])

  return (
    <>
      <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 shadow-[0_1px_30px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="container-page flex h-20 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="IVP Logo" className="h-full w-[95px] object-cover" />
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Navigation principale">
            {links.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative text-sm font-medium transition after:absolute after:-bottom-1.5 after:left-0 after:h-px after:bg-current after:transition-all after:duration-300 ${isActive ? 'text-ivp-red after:w-full' : 'text-neutral-700 after:w-0 hover:text-ivp-red hover:after:w-full'}`
                }
              >
                {label}
              </NavLink>
            ))}
            <Link to="/don" className="rounded-full bg-ivp-red px-5 py-3 text-sm font-bold text-white transition hover:bg-ivp-red-dark">
              Faire un don
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => dispatch(toggleMobileMenu())}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 bg-white transition active:scale-95 md:hidden"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
          >
            <Menu size={20} />
          </button>
        </div>
      </header>

      {/* ===== Mobile drawer (outside the header: its backdrop-filter would trap fixed children) ===== */}
      <div className={`fixed inset-0 z-[60] md:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
        <div
          onClick={() => dispatch(closeMobileMenu())}
          className={`absolute inset-0 bg-neutral-950/60 backdrop-blur-sm transition-opacity duration-500 ${open ? 'opacity-100' : 'opacity-0'}`}
        />

        <aside
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          inert={!open ? '' : undefined}
          className={`absolute inset-y-0 right-0 flex w-[88%] max-w-sm flex-col overflow-y-auto bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${open ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className="h-1 shrink-0 bg-gradient-to-r from-ivp-red via-mf-plum to-mf-gold" />

          <div className="flex h-20 shrink-0 items-center justify-between px-6">
            <img src={logo} alt="IVP Logo" className="h-14 w-auto" />
            <button
              type="button"
              onClick={() => dispatch(closeMobileMenu())}
              aria-label="Fermer le menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-200 transition active:scale-95"
            >
              <X size={20} />
            </button>
          </div>

          <nav className="flex-1 px-6 pb-6 pt-4" aria-label="Menu mobile">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-neutral-400">Menu</p>
            <ul>
              {links.map(([label, to, dot], i) => (
                <li
                  key={to}
                  className={`border-b border-neutral-100 transition-all duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
                  style={{ transitionDelay: open ? `${150 + i * 60}ms` : '0ms' }}
                >
                  <NavLink to={to} end={to === '/'} className="group flex items-center gap-4 py-4">
                    {({ isActive }) => (
                      <>
                        <span className={`h-2 w-2 shrink-0 rounded-full ${dot} ${isActive ? 'scale-150' : 'opacity-60'} transition`} />
                        <span className={`flex-1 font-display text-[1.7rem] leading-none tracking-tight transition ${isActive ? 'text-ivp-red' : 'text-neutral-900 group-active:text-ivp-red'}`}>{label}</span>
                        <ArrowUpRight size={18} className={`transition ${isActive ? 'text-ivp-red' : 'text-neutral-300'}`} />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="shrink-0 border-t border-neutral-100 bg-[#f7f5f2] px-6 py-6">
            <Link to="/don" className="flex items-center justify-center gap-2 rounded-full bg-ivp-red px-6 py-4 text-sm font-bold text-white transition active:scale-[0.98]">
              Faire un don <ArrowUpRight size={16} />
            </Link>
            <div className="mt-5 flex items-center justify-between">
              <p className="max-w-[12rem] text-[11px] leading-5 text-neutral-500">IVP · Infirmières des Voies Publiques<br />MF Médical · Soins esthétiques</p>
              <a
                href="https://www.facebook.com/profile.php?id=100091649801529"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook de l’IVP"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-neutral-300 text-neutral-700 transition active:scale-95"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>
        </aside>
      </div>
    </>
  )
}
