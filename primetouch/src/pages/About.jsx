import QuoteButton from '../components/QuoteButton.jsx'

const values = [
  ['🌿', 'Quality', 'We pay attention to the details that make a difference.'],
  ['🤝', 'Reliability', 'We respect your time, property, and expectations.'],
  ['✨', 'Professionalism', 'We approach every job with care and respect.'],
  ['❤️', 'Customer Care', 'We listen to our customers and work to provide a positive experience.'],
  ['🌱', 'Responsible Choices', 'Where appropriate, we offer eco-conscious cleaning options.'],
]

export default function About() {
  return (
    <section className="page">
      <div className="wrap">
        <h1>About PRIMETOUCH</h1>
        <p className="kicker">Clean Spaces. Brighter Lives.</p>
        <p className="lead">At PRIMETOUCH Cleaning & Home Services Ltd., we believe a clean space is more than just a clean space—it creates comfort, peace of mind, and a better everyday experience. We provide professional cleaning and home services for residential properties, businesses, rental properties, and property owners throughout Edmonton and surrounding areas.</p>
        <p className="lead">Our approach is built around reliability, attention to detail, professionalism, and customer care. Whether you need a one-time deep clean or ongoing cleaning support, we work to provide a service that fits your needs.</p>
        <div className="grid">
          <div className="box"><h3>🚀 Our Mission</h3><p>To make homes, workplaces, and properties cleaner, healthier, and more welcoming through dependable and professional service.</p></div>
          {values.map(([icon, title, text]) => (
            <div className="box" key={title}><h3>{icon} {title}</h3><p>{text}</p></div>
          ))}
        </div>
        <p className="lead"><b>Your space deserves more than cleaning. It deserves the PRIMETOUCH.</b></p>
        <br />
        <QuoteButton>Get a Free Quote</QuoteButton>
      </div>
    </section>
  )
}
