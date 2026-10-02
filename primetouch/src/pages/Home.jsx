import { Link } from 'react-router-dom'
import QuoteButton from '../components/QuoteButton.jsx'
import { EMAIL, PHONE } from '../data/site.js'
import residential from '../assets/card-1.jpg'
import deepCleaning from '../assets/card-2.jpg'
import moving from '../assets/card-3.jpg'
import commercial from '../assets/card-4.jpg'
import tenancy from '../assets/card-5.jpg'
import hero from '../assets/hero.jpg'

const services = [
  { title: 'Residential Cleaning', description: 'Enjoy a fresher, more comfortable home, cleaned with care.', image: residential, icon: '⌂' },
  { title: 'Commercial Cleaning', description: 'A clean, welcoming workplace for your team and your customers.', image: commercial, icon: '▦' },
  { title: 'Deep Cleaning', description: 'Detailed attention for the places and surfaces that need more.', image: deepCleaning, icon: '✧' },
  { title: 'End of Tenancy', description: 'Leave your rental clean and ready for its next chapter.', image: tenancy, icon: '⌑' },
  { title: 'Move In / Move Out', description: 'Settle into a fresh start, or leave your old place spotless.', image: moving, icon: '▰' },
  { title: 'Lawn Care & Snow Removal', description: 'Seasonal help to keep your property tidy and accessible.', image: residential, icon: '❋' },
]

const values = [
  ['♧', 'Eco-friendly products'],
  ['⬡', 'Reliable & trusted'],
  ['♟', 'Friendly professionals'],
  ['♥', 'Customer satisfaction'],
]

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-eyebrow"><i /> Edmonton’s trusted local cleaning team</span>
          <h1>A cleaner, brighter, <em>healthier tomorrow.</em></h1>
          <p>Professional cleaning for homes, offices, and rental properties. Tell us what you need and we’ll make your space feel good again.</p>
          <div className="home-actions">
            <QuoteButton>Get a Free Quote <span aria-hidden="true">→</span></QuoteButton>
            <Link className="home-secondary-link" to="/services">Explore our services</Link>
          </div>
          <div className="home-service-area"><span aria-hidden="true">⌖</span> Serving Edmonton &amp; surrounding areas</div>
        </div>
        <div className="home-hero-visual">
          <img src={hero} alt="A professional cleaner caring for a bright, modern home" />
          <div className="home-image-note"><span>✦</span><div><b>Your trusted local experts</b><small>Residential · Commercial · More</small></div></div>
          <div className="home-photo-caption">A clean space feels like a fresh start.</div>
        </div>
      </section>

      <section className="home-values" aria-label="The PrimeTouch difference">
        {values.map(([icon, label]) => <div className="home-value" key={label}><span>{icon}</span><b>{label}</b></div>)}
      </section>

      <section className="home-services-section">
        <div className="home-section-heading">
          <span className="home-eyebrow"><i /> Thoughtful care for every space</span>
          <h2>Cleaning that fits your life</h2>
          <p>From regular home care to a full move-out clean, we’re ready to help.</p>
        </div>
        <div className="home-service-grid">
          {services.map((service) => (
            <Link className="home-service-card" to="/services" key={service.title}>
              <div className="home-service-image"><img src={service.image} alt="" /><span>{service.icon}</span></div>
              <div className="home-service-card-copy"><h3>{service.title}</h3><p>{service.description}</p><b>View service <span aria-hidden="true">→</span></b></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-approach">
        <div className="home-approach-mark"><span>✦</span><b>PRIME<br />TOUCH</b><small>CLEANER SPACES<br />HAPPIER LIVES</small></div>
        <div className="home-approach-copy"><span className="home-eyebrow">A little more care goes a long way</span><h2>Good spaces make room for better days.</h2><p>We bring a reliable team, thoughtful attention to detail, and a personal touch to every visit. Let us take cleaning off your list.</p><Link to="/about" className="home-text-link">Get to know us <span aria-hidden="true">→</span></Link></div>
        <div className="home-approach-points"><div><b>01</b><span>Tell us about<br />your space</span></div><div><b>02</b><span>Choose a time<br />that works</span></div><div><b>03</b><span>Come home to<br />a fresh start</span></div></div>
      </section>

      <section className="home-contact-band">
        <div><span className="home-eyebrow">Ready for a little breathing room?</span><h2>Let us do the dirty work.</h2><p>Get in touch for a free, no-obligation quote.</p></div>
        <div className="home-contact-actions"><QuoteButton>Request a Free Quote <span aria-hidden="true">→</span></QuoteButton><a href={`tel:${PHONE.replace(/-/g, '')}`}>Call {PHONE}</a></div>
      </section>
      <div className="home-contact-details"><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span>Edmonton, Alberta &amp; surrounding communities</span></div>
    </main>
  )
}
