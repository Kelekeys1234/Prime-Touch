import { Link } from 'react-router-dom'
import QuoteButton from '../components/QuoteButton.jsx'
import { PHONE, EMAIL } from '../data/site.js'
import logo from '../assets/logo.jpg'
import hero from '../assets/hero.jpg'
import residential from '../assets/card-1.jpg'
import commercial from '../assets/card-4.jpg'
import deepClean from '../assets/card-2.jpg'
import moveOut from '../assets/card-5.jpg'
import moving from '../assets/card-3.jpg'
import lawn from '../assets/card-1.jpg'

const serviceTiles = [
  { title: <>Residential<br />Cleaning</>, image: residential, symbol: '⌂' },
  { title: <>Commercial<br />Cleaning</>, image: commercial, symbol: '▦' },
  { title: <>Deep<br />Cleaning</>, image: deepClean, symbol: '⌕' },
  { title: <>End of Tenancy<br />Cleaning</>, image: moveOut, symbol: '✧' },
  { title: <>Move In/Move Out<br />Cleaning</>, image: moving, symbol: '▰' },
  { title: <>Lawn Care &<br />Snow Removal</>, image: lawn, symbol: '❋' },
]

const promises = [
  ['♧', <>ECO-FRIENDLY<br />PRODUCTS</>],
  ['⬡', <>RELIABLE<br />& TRUSTED</>],
  ['♟', <>PROFESSIONAL<br />& FRIENDLY TEAM</>],
  ['♥', <>CUSTOMER<br />SATISFACTION</>],
  ['◇', <>AFFORDABLE<br />RATES</>],
]

export default function Home() {
  return (
    <main className="flyer-home">
      <section className="flyer-hero">
        <div className="flyer-copy">
          <img className="flyer-logo" src={logo} alt="PrimeTouch Cleaning Services" />
          <div className="flyer-company">CLEANING &amp; HOME SERVICES LTD.</div>
          <div className="flyer-motto"><span /> CLEANER SPACES · HAPPIER LIVES <span /></div>
          <h1>A CLEANER<br />BRIGHTER<br />HEALTHIER<br /><em>TOMORROW</em></h1>
          <p className="flyer-script">Let Us Do<br />the Dirty Work! <b>♡</b></p>
        </div>
        <div className="flyer-room" role="img" aria-label="A clean, bright living room">
          <img src={hero} alt="" />
          <div className="flyer-trusted">Your<br />Trusted Local<br />Cleaning Experts<span /></div>
          <div className="flyer-residential">RESIDENTIAL&nbsp; | &nbsp;COMMERCIAL<br />AND MORE</div>
          <div className="flyer-note">Good<br />Spaces<br />Brighter<br />Days<br />♡</div>
        </div>
      </section>

      <section className="flyer-services" aria-label="Our cleaning services">
        <div className="flyer-tiles">
          {serviceTiles.map((service, index) => (
            <Link className="flyer-tile" to="/services" key={index}>
              <span className="flyer-photo"><img src={service.image} alt="" /></span>
              <span className="flyer-symbol">{service.symbol}</span>
              <span className="flyer-tile-title">{service.title}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="flyer-promises" aria-label="Why choose PrimeTouch">
        {promises.map(([symbol, label]) => (
          <div className="flyer-promise" key={symbol}>
            <span>{symbol}</span><b>{label}</b>
          </div>
        ))}
      </section>

      <section className="flyer-contact">
        <QuoteButton className="flyer-quote"><span>☎</span><b>CONTACT US FOR A<br /><strong>FREE QUOTE</strong></b></QuoteButton>
        <div className="flyer-contact-details">
          <a href={`tel:${PHONE.replace(/-/g, '')}`}><span>☎</span> (647) 458-0576</a>
          <a href={`mailto:${EMAIL}`}><span>✉</span> bookprimetouch@gmail.com</a>
          <div><span>⌖</span> Edmonton &amp; Surrounding Areas</div>
        </div>
        <div className="flyer-script flyer-tagline">Clean<br />Care<br />Transform <b>♡</b></div>
      </section>

      <section className="flyer-bottom">
        <div><span>⌂</span><b>HOMES<br />CLEANER</b></div>
        <div><span>♡</span><b>COMMUNITIES<br />BRIGHTER</b></div>
        <div><span>♧</span><b>LIVES<br />HEALTHIER</b></div>
      </section>
    </main>
  )
}
