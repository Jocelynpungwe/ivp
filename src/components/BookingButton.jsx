import { Link } from 'react-router-dom'
import { CalendarHeart } from 'lucide-react'
import { bookingLink } from '../data/mf'

export default function BookingButton({ className = '', children = 'Prendre rendez-vous', icon = true, onClick }) {
  const content = (
    <>
      {icon && <CalendarHeart size={16} />}
      {children}
    </>
  )
  return bookingLink.external ? (
    <a href={bookingLink.href} target="_blank" rel="noreferrer" onClick={onClick} className={className}>
      {content}
    </a>
  ) : (
    <Link to={bookingLink.href} onClick={onClick} className={className}>
      {content}
    </Link>
  )
}
