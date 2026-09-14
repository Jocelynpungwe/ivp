import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useDispatch, useSelector } from 'react-redux'
import { closeMobileMenu, toggleMobileMenu } from '../features/ui/uiSlice'

const links = [
  ['Accueil', '/'],
  ['À propos', '/about'],
  ['Galerie', '/gallery'],
  ['Contact', '/contact'],
]

import logo from '../assets/ivplogo.png'

export default function Navbar() {
  const dispatch = useDispatch()
  const open = useSelector((state) => state.ui.mobileMenuOpen)
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="container-page flex h-20 items-center justify-between">
        <Link
          to="/"
          onClick={() => dispatch(closeMobileMenu())}
          className="flex items-center gap-3"
        >
          <img
            src={logo}
            alt="IVP Logo"
            className=" h-full w-[95px] object-cover"
          />
          {/* <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ivp-red text-sm font-black text-white">
            IVP
          </span>
          <span className="hidden text-sm font-bold leading-tight sm:block">
            Infirmières des
            <br />
            Voies Publiques
          </span> */}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, to]) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `text-sm font-medium ${isActive ? 'text-ivp-red' : 'text-neutral-700 hover:text-ivp-red'}`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/donate"
            className="rounded-full bg-ivp-red px-6 py-3 text-sm font-bold text-white hover:bg-ivp-red-dark"
          >
            Faire un don
          </Link>
        </nav>
        <button
          type="button"
          onClick={() => dispatch(toggleMobileMenu())}
          className="rounded-full border border-neutral-200 p-2 md:hidden"
          aria-label="Ouvrir le menu"
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-black/5 bg-white px-5 py-5 md:hidden">
          <nav className="container-page flex flex-col gap-3">
            {links.map(([label, to]) => (
              <NavLink
                key={to}
                to={to}
                onClick={() => dispatch(closeMobileMenu())}
                className="py-2 font-semibold"
              >
                {label}
              </NavLink>
            ))}
            <Link
              to="/donate"
              onClick={() => dispatch(closeMobileMenu())}
              className="rounded-full bg-ivp-red px-5 py-3 text-center font-bold text-white"
            >
              Faire un don
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
