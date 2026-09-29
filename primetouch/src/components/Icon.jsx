const PATHS = {
  shield: 'M12 2 4 5v6c0 5 3.4 9.4 8 11 4.6-1.6 8-6 8-11V5zM8.5 12l2.5 2.5 4.5-5',
  leaf: 'M5 19C5 9 11 4 20 4c0 9-5 15-15 15zM5 19l8-8',
  home: 'M3 11 12 3l9 8v10h-6v-6H9v6H3z',
  pin: 'M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9a2 2 0 1 1 0-4 2 2 0 0 1 0 4z',
  spark: 'M12 2l2.4 7.6L22 12l-7.6 2.4L12 22l-2.4-7.6L2 12l7.6-2.4z',
  heart: 'M12 21s-8-5.5-8-11a4.5 4.5 0 0 1 8-2.8A4.5 4.5 0 0 1 20 10c0 5.5-8 11-8 11z',
}

export default function Icon({ name }) {
  const outline = name === 'heart' || name === 'clock'
  return (
    <svg width="1em" height="1em" viewBox="0 0 24 24" aria-hidden="true"
      fill={outline ? 'none' : 'currentColor'} stroke={outline ? 'currentColor' : 'none'}
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {name === 'clock' ? (<><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>) : (<path d={PATHS[name]} />)}
    </svg>
  )
}
