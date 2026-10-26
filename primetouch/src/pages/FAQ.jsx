import QuoteButton from '../components/QuoteButton.jsx'
import { faqs } from '../data/faqs.js'
import { EMAIL, EMAIL_LABEL, PHONE, PHONE_LABEL } from '../data/site.js'

export default function FAQ() {
  return (
    <section className="page">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <h1>Frequently Asked Questions</h1>
        <br />
        {faqs.map(([question, answer]) => (
          <details key={question} className={question === 'Do I need to provide cleaning supplies?' ? 'faq-cleaning-options' : undefined}>
            <summary>{question}</summary>
            {question === 'Do I need to provide cleaning supplies?' ? (
              <div>
                <h3>Flexible Cleaning Options</h3>
                <p>Choose the cleaning approach that works best for you.</p>
                <p>At PRIMETOUCH, we understand that every home and business has different cleaning preferences. That’s why we offer flexible cleaning options to suit your needs.</p>
                <p><strong>Chemical Cleaning Products:</strong><br />We can use professional cleaning products for effective cleaning and sanitation where appropriate.</p>
                <p><strong>Steam Cleaning — Chemical-Free Option:</strong><br />Prefer a chemical-free approach? We also offer steam cleaning using steam only, providing a chemical-free cleaning option for suitable surfaces and areas.</p>
                <p>Simply let us know your preference when requesting a quote, and we’ll tailor the cleaning service to your needs.</p>
                <QuoteButton>Request a Quote</QuoteButton>
              </div>
            ) : <p>{answer}</p>}
            {question === 'How do I request a quote?' && (
              <div className="faq-contact-actions">
                <QuoteButton>Get a Free Quote</QuoteButton>
                <a href={`tel:${PHONE.replace(/-/g, '')}`}>{PHONE_LABEL}</a>
                <a href={`mailto:${EMAIL}`}>{EMAIL_LABEL}</a>
              </div>
            )}
          </details>
        ))}
        <details>
          <summary>Areas We Serve</summary>
          <p>Areas We Serve – Edmonton and Surrounding Communities</p>
          <p>We proudly serve Edmonton and the surrounding communities, including:</p>
          <ul>
            <li>West Edmonton</li><li>Downtown Edmonton</li><li>South Edmonton</li><li>North Edmonton</li>
            <li>Southwest Edmonton</li><li>Northwest Edmonton</li><li>St. Albert</li><li>Sherwood Park</li>
            <li>Beaumont</li><li>Leduc</li><li>Spruce Grove</li><li>Stony Plain</li>
          </ul>
        </details>
        <br />
        <QuoteButton>Get a Free Quote</QuoteButton>
      </div>
    </section>
  )
}
