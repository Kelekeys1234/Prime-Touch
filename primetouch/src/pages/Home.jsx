import { Link } from 'react-router-dom'
import QuoteButton from '../components/QuoteButton.jsx'
import Icon from '../components/Icon.jsx'
import { services } from '../data/services.js'
import heroImg from '../assets/hero.jpg'

const badges = [
  ['shield', 'Trusted', '& Reliable'],
  ['leaf', 'Eco-Friendly', 'Options'],
  ['home', 'Residential &', 'Commercial'],
  ['pin', 'Serving Edmonton', '& Surrounding Areas'],
]

const perks = [
  ['spark', 'Professional Results', 'A clean space you can be proud of.'],
  ['clock', 'Flexible Scheduling', 'We work around your needs.'],
  ['heart', 'Customer Focused', 'Your satisfaction matters.'],
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div>
            <div className="kicker">CLEAN SPACES. FRESH FEEL. PROFESSIONAL TOUCH.</div>
            <h1>PRIME<i>TOUCH</i></h1>
            <h2>Professional Cleaning Services<br />You Can Trust</h2>
            <p>We provide reliable, detailed, and professional cleaning services for homes, offices, rental properties, and more. Let us give your space the PRIMETOUCH it deserves.</p>
            <QuoteButton>Get a Free Quote →</QuoteButton>
            <div className="badges">
              {badges.map(([icon, a, b]) => (
                <div key={a}><span><Icon name={icon} /></span><div>{a}<br />{b}</div></div>
              ))}
            </div>
          </div>
        </div>
        <div className="scene">
          <img src={heroImg} alt="Smiling PRIMETOUCH cleaner wiping a kitchen counter" />
          <div className="tag">A cleaner space<br />makes a happier<br />you!</div>
        </div>
      </section>

      <section className="services">
        <div className="wrap">
          <div className="eyebrow">OUR SERVICES</div>
          <h2>Cleaning Solutions for Every Space</h2>
          <p>From homes to businesses, we offer a range of professional cleaning services.</p>
          <div className="cards">
            {services.map((s) => (
              <div className="card" key={s.title}>
                <div className="thumb"><img src={s.photo} alt={s.title} /></div>
                <img className="ic2" src={s.badge} alt="" />
                <h3>{s.title}</h3>
                <p>{s.description}</p>
                <Link to="/services">Learn More →</Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="strip">
        <div className="wrap">
          {perks.map(([icon, title, text]) => (
            <div className="it" key={title}>
              <span><Icon name={icon} /></span>
              <div><b>{title}</b>{text}</div>
            </div>
          ))}
          <QuoteButton>Get a Free Quote →</QuoteButton>
        </div>
      </section>
    </>
  )
}
