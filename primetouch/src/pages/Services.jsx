import QuoteButton from '../components/QuoteButton.jsx'
import { services, extraServices } from '../data/services.js'

const cleaningServiceOrder = [
  'Residential Cleaning',
  'Deep Cleaning',
  'Commercial Cleaning',
  'Airbnb & Short-Term Rental Cleaning',
]

const cleaningServices = cleaningServiceOrder
  .map((title) => services.find((service) => service.title === title))
  .filter(Boolean)
const movingService = services.find((service) => service.title === 'Moving Services')
const outdoorServiceItems = extraServices[0]?.items ?? []
const lawnCareItems = outdoorServiceItems.slice(0, 3)
const snowRemovalItems = outdoorServiceItems.slice(3)

function ServiceDetails({ description, items }) {
  return (
    <div className="service-details-content">
      {description && <p>{description}</p>}
      <p><strong>Included services:</strong></p>
      <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
      <QuoteButton>Request a Quote</QuoteButton>
    </div>
  )
}

export default function Services() {
  return (
    <section className="page">
      <div className="wrap">
        <h1>Our Services</h1>
        <p className="lead">Professional cleaning and home services for every kind of space.</p>

        <div className="service-accordion">
          <details>
            <summary>Cleaning Services</summary>
            <div className="service-subcategories">
              {cleaningServices.map((service) => (
                <details key={service.title}>
                  <summary>{service.icon} {service.title}</summary>
                  <ServiceDetails description={service.description} items={service.items} />
                </details>
              ))}
            </div>
          </details>

          <details>
            <summary>Moving Services</summary>
            <ServiceDetails description={movingService?.description} items={movingService?.items ?? []} />
          </details>

          <details>
            <summary>🌿 Lawn Care</summary>
            <ServiceDetails items={lawnCareItems} />
          </details>

          <details>
            <summary>❄️ Snow Removal</summary>
            <ServiceDetails items={snowRemovalItems} />
          </details>
        </div>
      </div>
    </section>
  )
}
