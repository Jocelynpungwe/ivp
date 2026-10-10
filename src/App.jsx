import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Soins from './pages/Soins'
import Donate from './pages/Donate'
import NotFound from './pages/NotFound'

export default function App() {
  return <Routes>
    <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/a-propos" element={<About />} />
      <Route path="/soins" element={<Soins />} />
      <Route path="/galerie" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/don" element={<Donate />} />
      {/* Anciennes adresses en anglais → nouvelles adresses en français */}
      <Route path="/about" element={<Navigate to="/a-propos" replace />} />
      <Route path="/gallery" element={<Navigate to="/galerie" replace />} />
      <Route path="/donate" element={<Navigate to="/don" replace />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  </Routes>
}