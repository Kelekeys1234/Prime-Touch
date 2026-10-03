import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import QuoteButton from './QuoteButton.jsx'
import { navLinks } from '../data/site.js'
import logo from '../assets/brand-logo.jpg'

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className="wrap nav">
        <Link to="/" className="logo" aria-label="PRIMETOUCH home">
          <img src={logo} alt="PrimeTouch Cleaning & Home Services Ltd." />
        </Link>
        <button className="menu" aria-label="Menu" aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}>{open ? '\u00D7' : '\u2630'}</button>
        <nav id="site-navigation" className={open ? 'open' : ''} onClick={() => setOpen(false)}>
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end className={({ isActive }) => (isActive ? 'on' : '')}>
              {l.label}{l.label === 'Services' ? ' \u2304' : ''}
            </NavLink>
          ))}
        </nav>
        <QuoteButton>Free Quote</QuoteButton>
      </div>
    </header>
  )
}
