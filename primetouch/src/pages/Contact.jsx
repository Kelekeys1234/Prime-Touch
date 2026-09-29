import QuoteButton from '../components/QuoteButton.jsx'
import { PHONE, EMAIL } from '../data/site.js'

export default function Contact() {
  return (
    <section className="page">
      <div className="wrap" style={{ textAlign: 'center' }}>
        <h1>Let's Get Your Space Looking Its Best</h1>
        <p className="lead" style={{ margin: '0 auto' }}>Have a question? Need a quote? Ready to schedule a cleaning? We're here to help.</p>
        <div className="contact">
          <div className="box"><span>📞</span><b>Call Us</b><br /><a href={`tel:${PHONE.replace(/-/g, '')}`}>{PHONE}</a></div>
          <div className="box"><span>✉️</span><b>Email Us</b><br /><a href={`mailto:${EMAIL}`}>{EMAIL}</a></div>
          <div className="box"><span>📍</span><b>Service Area</b><br />Edmonton & Surrounding Areas</div>
        </div>
        <h2>Request a Free Quote</h2>
        <p className="lead" style={{ margin: '10px auto 18px' }}>The fastest way to tell us about your cleaning needs is through our online quote form. Tell us your location, type of property, service needed, approximate size, preferred date, and any special requirements.</p>
        <QuoteButton>Get a Free Quote</QuoteButton>
      </div>
    </section>
  )
}
