import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import QuoteButton from './QuoteButton.jsx'
import { EMAIL, EMAIL_LABEL, PHONE, PHONE_LABEL, navLinks } from '../data/site.js'
import logo from '../assets/brand-logo.png'

export default function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header>
      <div className="header-contact">
        <a href={`tel:${PHONE.replace(/-/g, '')}`}>{PHONE_LABEL}</a>
        <a href={`mailto:${EMAIL}`}>{EMAIL_LABEL}</a>
      </div>
      <div className="wrap nav">
        <Link to="/" className="logo" aria-label="PRIMETOUCH home">
          <img src={logo} alt="PrimeTouch Cleaning & Home Services Ltd." />
        </Link>
        <button className="menu" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen((value) => !value)}>{open ? '\u00D7' : '\u2630'}</button>
        <nav id="site-navigation" className={open ? 'open' : ''}>
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end reloadDocument className={({ isActive }) => (isActive ? 'on' : '')}>
              {l.label}
            </NavLink>
          ))}
        </nav>
        <QuoteButton>Free Quote</QuoteButton>
      </div>
    </header>
  )
}
