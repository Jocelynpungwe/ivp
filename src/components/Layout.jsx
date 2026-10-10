import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

// Scroll to the top on page change, or to the #anchor when the link has one.
function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' })
      return
    }
    const id = decodeURIComponent(hash.slice(1))
    let tries = 0
    const timer = setInterval(() => {
      const el = document.getElementById(id)
      if (el || ++tries > 20) {
        clearInterval(timer)
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'instant' })
      }
    }, 50)
    return () => clearInterval(timer)
  }, [pathname, hash])

  return null
}

export default function Layout() {
  return <div className="min-h-screen overflow-x-clip">
    <ScrollManager />
    <Navbar /><main><Outlet /></main><Footer />
  </div>
}
