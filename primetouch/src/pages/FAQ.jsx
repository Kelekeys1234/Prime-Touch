import QuoteButton from '../components/QuoteButton.jsx'
import { faqs } from '../data/faqs.js'

export default function FAQ() {
  return (
    <section className="page">
      <div className="wrap" style={{ maxWidth: 860 }}>
        <h1>Frequently Asked Questions</h1>
        <br />
        {faqs.map(([question, answer]) => (
          <details key={question}>
            <summary>{question}</summary>
            <p>{answer}</p>
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
