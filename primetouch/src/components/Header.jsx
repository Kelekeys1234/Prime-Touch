import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import QuoteButton from './QuoteButton.jsx'
import { navLinks } from '../data/site.js'
import brandMark from '../assets/brand-mark.png'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="wrap nav">
        <Link to="/" className="logo" aria-label="PRIMETOUCH home">
          <img src={brandMark} alt="" />
          <span className="logo-lockup"><b>PRIME<i>TOUCH</i></b><small>CLEANING &amp; HOME SERVICES LTD.</small></span>
        </Link>
        <button className="menu" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? '✕' : '☰'}</button>
        <nav className={open ? 'open' : ''} onClick={() => setOpen(false)}>
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end className={({ isActive }) => (isActive ? 'on' : '')}>
              {l.label}{l.label === 'Services' ? ' ⌄' : ''}
            </NavLink>
          ))}
        </nav>
        <QuoteButton>Get a Quote</QuoteButton>
      </div>
    </header>
  )
}
