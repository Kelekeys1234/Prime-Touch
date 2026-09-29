import { PHONE, EMAIL } from '../data/site.js'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div>© {new Date().getFullYear()} PRIMETOUCH Cleaning & Home Services Ltd. · Edmonton, AB</div>
        <div>
          <a href={`tel:${PHONE.replace(/-/g, '')}`}>{PHONE}</a> · <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
    </footer>
  )
}
