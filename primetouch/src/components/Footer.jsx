import { PHONE, PHONE_LABEL, EMAIL, EMAIL_LABEL, SOCIAL_LINKS } from '../data/site.js'

const socialPlatforms = [
  { name: 'Facebook', key: 'facebook', path: 'M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1V10H7.8v3h2.6v8z' },
  { name: 'Instagram', key: 'instagram', path: 'M7 2.8h10A4.2 4.2 0 0 1 21.2 7v10a4.2 4.2 0 0 1-4.2 4.2H7A4.2 4.2 0 0 1 2.8 17V7A4.2 4.2 0 0 1 7 2.8Zm0 2A2.2 2.2 0 0 0 4.8 7v10A2.2 2.2 0 0 0 7 19.2h10a2.2 2.2 0 0 0 2.2-2.2V7A2.2 2.2 0 0 0 17 4.8H7Zm5 2.1a5.1 5.1 0 1 1 0 10.2 5.1 5.1 0 0 1 0-10.2Zm0 2a3.1 3.1 0 1 0 0 6.2 3.1 3.1 0 0 0 0-6.2Zm5.4-3a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z' },
  { name: 'TikTok', key: 'tiktok', path: 'M19.6 7.2a6.5 6.5 0 0 1-4-1.4v8.1a5.8 5.8 0 1 1-5-5.7v3a2.8 2.8 0 1 0 2 2.7V2.5h3a3.5 3.5 0 0 0 4 3.4z' },
  { name: 'X', key: 'x', path: 'M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.9 5.8 22H2.7l7.3-8.4L2.2 2h6.4l4.5 6.6L18.9 2Zm-1.1 18h1.7L7.7 3.9H5.9L17.8 20Z' },
]

function SocialIcon({ name, url, path }) {
  const icon = <svg viewBox="0 0 24 24" aria-hidden="true"><path d={path} /></svg>
  return url
    ? <a className="footer-social-link" href={url} target="_blank" rel="noopener noreferrer" aria-label={name}>{icon}</a>
    : <span className="footer-social-link is-inactive" role="img" aria-label={`${name} profile coming soon`}>{icon}</span>
}

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
          <a href={`tel:${PHONE.replace(/-/g, '')}`}>{PHONE_LABEL}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL_LABEL}</a>
        </div>
        <div className="footer-socials" aria-label="Social media">
          {socialPlatforms.map(({ name, key, path }) => (
            <SocialIcon key={key} name={name} url={SOCIAL_LINKS[key]} path={path} />
          ))}
        </div>
      </div>
    </footer>
  )
}
