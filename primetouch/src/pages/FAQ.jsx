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
        <br />
        <QuoteButton>Get a Free Quote</QuoteButton>
      </div>
    </section>
  )
}
