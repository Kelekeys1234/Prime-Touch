import QuoteButton from '../components/QuoteButton.jsx'

const steps = [
  ['Tell Us What You Need', 'Complete our quick online quote form and tell us about your property and the service you need.'],
  ['We Review Your Request', "We'll review the information you provide and contact you to discuss your cleaning needs."],
  ['Receive Your Quote', "We'll discuss the service requirements, pricing, and available scheduling options."],
  ['Schedule Your Service', "Once everything is confirmed, we'll arrange a convenient date and time."],
  ['Enjoy Your Clean Space', 'Our team gets to work so you can enjoy a cleaner, fresher space.'],
]

export default function HowItWorks() {
  return (
    <section className="page">
      <div className="wrap">
        <h1>How It Works</h1>
        <div className="steps">
          {steps.map(([title, text], i) => (
            <div className="step" key={title}>
              <div className="n">{i + 1}</div>
              <div><h3>{title}</h3><p style={{ margin: '6px 0 0' }}>{text}</p></div>
            </div>
          ))}
        </div>
        <h3 style={{ marginBottom: 14 }}>Ready to Get Started?</h3>
        <QuoteButton>Request Your Free Quote</QuoteButton>
      </div>
    </section>
  )
}
