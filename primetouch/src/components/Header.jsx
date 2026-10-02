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
