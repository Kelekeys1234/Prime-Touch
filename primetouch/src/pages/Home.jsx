import { Link } from 'react-router-dom'
import { EMAIL, PHONE, QUOTE_URL } from '../data/site.js'
import flyer from '../assets/primetouch-flyer.jpeg'

const serviceAreas = [
  'Residential cleaning',
  'Commercial cleaning',
  'Deep cleaning',
  'End of tenancy cleaning',
  'Move in and move out cleaning',
  'Lawn care and snow removal',
]

export default function Home() {
  return (
    <main className="flyer-home" style={{ '--flyer-background': `url("${flyer}")` }}>
      <div className="flyer-poster">
        <img
          className="flyer-poster-image"
          src={flyer}
          alt="PrimeTouch Cleaning & Home Services Ltd. flyer: A cleaner, brighter, healthier tomorrow. Residential and commercial cleaning, deep cleaning, end of tenancy, move in and move out, lawn care and snow removal. Eco-friendly products, reliable and trusted service, a professional friendly team, customer satisfaction, and affordable rates. Call (647) 458-0576 or email bookprimetouch@gmail.com for a free quote in Edmonton and surrounding areas."
        />
        <a className="flyer-hotspot flyer-quote-hotspot" href={QUOTE_URL} target="_blank" rel="noopener noreferrer" aria-label="Contact us for a free quote" />
        <a className="flyer-hotspot flyer-phone-hotspot" href={`tel:${PHONE.replace(/-/g, '')}`} aria-label={`Call ${PHONE}`} />
        <a className="flyer-hotspot flyer-email-hotspot" href={`mailto:${EMAIL}`} aria-label={`Email ${EMAIL}`} />
        {serviceAreas.map((label, index) => (
          <Link
            className={`flyer-hotspot flyer-service-hotspot flyer-service-${index + 1}`}
            to="/services"
            key={label}
            aria-label={`Learn about ${label}`}
          />
        ))}
      </div>
    </main>
  )
}
