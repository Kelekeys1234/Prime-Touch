import { QUOTE_URL } from '../data/site.js'

export default function QuoteButton({ children = 'Get a Free Quote', className = '' }) {
  return (
    <a className={`btn ${className}`.trim()} href={QUOTE_URL} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
