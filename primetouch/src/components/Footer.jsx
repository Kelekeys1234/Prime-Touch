import { PHONE, EMAIL } from '../data/site.js'

export default function Footer() {
  return (
    <footer>
      <div className="footer-promises">
        <div><span>⌂</span><b>HOMES<br />CLEANER</b></div>
        <div><span>♡</span><b>COMMUNITIES<br />BRIGHTER</b></div>
        <div><span>♧</span><b>LIVES<br />HEALTHIER</b></div>
      </div>
      <div className="wrap">
        <div>© {new Date().getFullYear()} PRIMETOUCH Cleaning &amp; Home Services Ltd. · Edmonton, AB</div>
        <div className="footer-contact">
          <a href={`tel:${PHONE.replace(/-/g, '')}`}>{PHONE}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
    </footer>
  )
}
