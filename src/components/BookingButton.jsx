import { Link } from 'react-router-dom'
import { CalendarHeart } from 'lucide-react'
import { bookingLink, bookingLinkFor } from '../data/mf'

// `service` (optional): a service object from data/mf.js, to pre-select the treatment.
export default function BookingButton({ className = '', children = 'Prendre rendez-vous', icon = true, onClick, service }) {
  const link = service ? bookingLinkFor(service) : bookingLink
  const content = (
    <>
      {icon && <CalendarHeart size={16} />}
      {children}
    </>
  )
  return link.external ? (
    <a href={link.href} target="_blank" rel="noreferrer" onClick={onClick} className={className}>
      {content}
    </a>
  ) : (
    <Link to={link.href} onClick={onClick} className={className}>
      {content}
    </Link>
  )
}
