export const loadUmamiScript = () => {
  if (typeof window === 'undefined') return

  const existingScript = document.querySelector('script[data-website-id="792ae6a6-5c4f-4280-b9de-39ccf5edbbbe"]')
  if (existingScript) return

  const script = document.createElement('script')
  script.defer = true
  script.src = 'https://umami-p00gs00gwcwo00s4k4c4kgg8.pictusweb.com/script.js'
  script.setAttribute('data-website-id', '792ae6a6-5c4f-4280-b9de-39ccf5edbbbe')
  
  document.head.appendChild(script)
}

export const removeUmamiScript = () => {
  if (typeof window === 'undefined') return

  const script = document.querySelector('script[data-website-id="792ae6a6-5c4f-4280-b9de-39ccf5edbbbe"]')
  if (script) {
    script.remove()
  }
}

export const getConsentStatus = () => {
  if (typeof window === 'undefined') return null
  return localStorage.getItem('analytics-consent')
}