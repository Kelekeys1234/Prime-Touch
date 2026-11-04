import { Link } from 'react-router-dom'
import QuoteButton from '../components/QuoteButton.jsx'
import { EMAIL, EMAIL_LABEL, PHONE, PHONE_LABEL } from '../data/site.js'
import logo from '../assets/brand-logo.png'
import livingRoom from '../assets/flyer-living-room.jpg'
import residential from '../assets/flyer-residential.jpg'
import commercial from '../assets/flyer-commercial.jpg'
import deep from '../assets/flyer-deep-clean.jpg'
import tenancy from '../assets/flyer-tenancy.jpg'
import moving from '../assets/flyer-moving.jpg'
import lawnSnow from '../assets/flyer-lawn-snow.jpg'
import leaves from '../assets/flyer-leaves.jpg'

const services = [
  { label: 'Residential Cleaning', title: <>Residential<br />Cleaning</>, image: residential, icon: '⌂' },
  { label: 'Commercial Cleaning', title: <>Commercial<br />Cleaning</>, image: commercial, icon: '▦' },
  { label: 'Deep Cleaning', title: <>Deep<br />Cleaning</>, image: deep, icon: '⌕' },
  { label: 'End of Tenancy Cleaning', title: <>End of Tenancy<br />Cleaning</>, image: tenancy, icon: '✧' },
  { label: 'Moving Services', title: <>Moving<br />Services</>, image: moving, icon: '▰' },
  { label: 'Lawn Care and Snow Removal', title: <>Lawn Care &amp;<br />Snow Removal</>, image: lawnSnow, icon: '❋' },
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
    <main className="flyer-site">
      <section className="flyer-hero">
        <div className="flyer-copy">
          <img className="flyer-logo" src={logo} alt="PrimeTouch Cleaning & Home Services Ltd." />
          <div className="flyer-motto"><span /> CLEANER SPACES · HAPPIER LIVES <span /></div>
          <h1>A CLEANER<br />BRIGHTER<br />HEALTHIER<br /><em>TOMORROW</em></h1>
          <p className="flyer-script">Let Us Do<br />the Dirty Work! <b>♡</b></p>
        </div>
        <div className="flyer-room">
          <img className="flyer-room-photo" src={livingRoom} alt="Bright living room with a clean sofa and fresh flowers" />
          <div className="flyer-trusted">Your<br />Trusted Local<br />Cleaning Experts<span /></div>
          <div className="flyer-residential">RESIDENTIAL&nbsp; | &nbsp;COMMERCIAL<br />AND MORE</div>
          <div className="flyer-note">Good<br />Spaces<br />Brighter<br />Days<br /><b>♡</b></div>
        </div>
      </section>

      <section className="flyer-services" aria-label="PrimeTouch cleaning services">
        <div className="flyer-tiles">
          {services.map((service, index) => (
            <Link className="flyer-tile" to="/services" reloadDocument key={index} aria-label={`Learn about ${service.label}`}>
              <span className="flyer-photo"><img src={service.image} alt="" /></span>
              <span className="flyer-symbol" aria-hidden="true">{service.icon}</span>
              <span className="flyer-tile-title">{service.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="flyer-promises" aria-label="Why choose PrimeTouch">
        {promises.map(([symbol, label]) => <div className="flyer-promise" key={symbol}><span>{symbol}</span><b>{label}</b></div>)}
      </section>

      <section className="flyer-contact">
        <img className="flyer-leaves" src={leaves} alt="" />
        <QuoteButton className="flyer-quote"><span>☎</span><b>CONTACT US FOR A<br /><strong>FREE QUOTE</strong></b></QuoteButton>
        <div className="flyer-contact-details">
          <a href={`tel:${PHONE.replace(/-/g, '')}`}><span>☎</span> {PHONE_LABEL}</a>
          <a href={`mailto:${EMAIL}`}><span>✉</span> {EMAIL_LABEL}</a>
          <div><span>⌖</span> Edmonton &amp; Surrounding Areas</div>
        </div>
        <div className="flyer-contact-script">Clean<br />Care<br />Transform <b>♡</b></div>
      </section>

    </main>
  )
}
