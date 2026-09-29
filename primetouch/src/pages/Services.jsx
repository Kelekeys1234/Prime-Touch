import QuoteButton from '../components/QuoteButton.jsx'
import { services, extraServices } from '../data/services.js'

export default function Services() {
  return (
    <section className="page">
      <div className="wrap">
        <h1>Our Services</h1>
        <p className="lead">Professional cleaning and home services for every kind of space.</p>
        <div className="grid">
          {[...services, ...extraServices].map((s) => (
            <div className="box" key={s.title}>
              <h3>{s.icon} {s.title}</h3>
              {s.description && <p>{s.description}</p>}
              {s.items && <ul>{s.items.map((x) => <li key={x}>{x}</li>)}</ul>}
              <QuoteButton>Request a Quote</QuoteButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
