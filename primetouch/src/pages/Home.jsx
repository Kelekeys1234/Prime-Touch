import { Link } from 'react-router-dom'
import QuoteButton from '../components/QuoteButton.jsx'
import { EMAIL, PHONE } from '../data/site.js'
import livingRoom from '../assets/flyer-living-room.jpg'
import residential from '../assets/flyer-residential.jpg'
import commercial from '../assets/flyer-commercial.jpg'
import deep from '../assets/flyer-deep-clean.jpg'
import tenancy from '../assets/flyer-tenancy.jpg'
import moving from '../assets/flyer-moving.jpg'
import lawnSnow from '../assets/flyer-lawn-snow.jpg'

const services = [
  { title: 'Residential Cleaning', image: residential, icon: 'home' },
  { title: 'Commercial Cleaning', image: commercial, icon: 'building' },
  { title: 'Deep Cleaning', image: deep, icon: 'spark' },
  { title: 'End of Tenancy Cleaning', image: tenancy, icon: 'key' },
  { title: 'Move In / Move Out Cleaning', image: moving, icon: 'truck' },
  { title: 'Lawn Care & Snow Removal', image: lawnSnow, icon: 'leaf' },
]

const promises = [
  ['♧', <>ECO-FRIENDLY<br />PRODUCTS</>],
  ['⬡', <>RELIABLE<br />&amp; TRUSTED</>],
  ['♟', <>PROFESSIONAL<br />&amp; FRIENDLY TEAM</>],
  ['♥', <>CUSTOMER<br />SATISFACTION</>],
  ['◇', <>AFFORDABLE<br />RATES</>],
]

export default function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <div className="home-hero-content">
          <span className="home-eyebrow"><i /> Cleaner spaces · Happier lives</span>
          <h1>A cleaner<br />brighter<br />healthier<br /><em>tomorrow</em></h1>
          <p>Professional cleaning and home services for homes, workplaces, and rental properties. Enjoy your space while we take care of the dirty work.</p>
          <div className="home-actions">
            <QuoteButton>Contact us for a free quote <span aria-hidden="true">→</span></QuoteButton>
            <Link className="home-secondary-link" to="/services">Explore our services</Link>
          </div>
          <div className="home-hero-script">Let Us Do<br />the Dirty Work! <b>♡</b></div>
        </div>
        <div className="home-hero-visual">
          <img src={livingRoom} alt="Bright living room with a clean sofa and fresh, welcoming space" />
          <div className="home-image-note"><b>Your<br />Trusted Local<br />Cleaning Experts</b><span /></div>
          <div className="home-image-services">RESIDENTIAL&nbsp; | &nbsp;COMMERCIAL<br />AND MORE</div>
          <div className="home-image-sign">Good<br />Spaces<br />Brighter<br />Days <b>♡</b></div>
        </div>
      </section>

      <section className="home-services-section" aria-labelledby="home-services-title">
        <div className="home-section-heading">
          <span className="home-eyebrow"><i /> Our Services</span>
          <h2 id="home-services-title">Cleaning solutions for every space</h2>
          <p>Professional care for homes, businesses, and everything in between.</p>
        </div>
        <div className="home-service-grid">
          {services.map((service) => (
            <Link className="home-service-card" to="/services" key={service.title}>
              <span className="home-service-image"><img src={service.image} alt="" /></span>
              <span className="home-service-icon" aria-hidden="true">{service.icon === 'home' ? '⌂' : service.icon === 'building' ? '▦' : service.icon === 'spark' ? '✧' : service.icon === 'key' ? '✦' : service.icon === 'truck' ? '▰' : '❋'}</span>
              <span className="home-service-title">{service.title}</span>
              <span className="home-service-link">Learn more <b aria-hidden="true">→</b></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-promises" aria-label="Why choose PrimeTouch">
        {promises.map(([symbol, label]) => <div className="home-promise" key={symbol}><span>{symbol}</span><b>{label}</b></div>)}
      </section>

      <section className="home-contact-band">
        <div className="home-contact-message"><span className="home-eyebrow">A little care changes everything</span><h2>Let us do the dirty work.</h2><p>Contact us today for a free, no-obligation quote.</p><QuoteButton>Contact us for a free quote <span aria-hidden="true">→</span></QuoteButton></div>
        <div className="home-contact-details">
          <a href={`tel:${PHONE.replace(/-/g, '')}`}><span>☎</span><b>(647) 458-0576</b></a>
          <a href={`mailto:${EMAIL}`}><span>✉</span><b>{EMAIL}</b></a>
          <div><span>⌖</span><b>Edmonton &amp; Surrounding Areas</b></div>
        </div>
        <div className="home-contact-script">Clean<br />Care<br />Transform <b>♡</b></div>
      </section>
    </main>
  )
}
