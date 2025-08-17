import React, { useState, useEffect } from 'react'

const ConsentBanner = ({ language, onAccept, onDecline }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('analytics-consent')
    if (!consent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('analytics-consent', 'accepted')
    setIsVisible(false)
    onAccept()
  }

  const handleDecline = () => {
    localStorage.setItem('analytics-consent', 'declined')
    setIsVisible(false)
    onDecline()
  }

  const getTexts = () => {
    switch (language) {
      case 'english':
        return {
          message: 'We use analytics to improve your browsing experience.',
          accept: 'Accept',
          decline: 'Decline'
        }
      case 'czech':
        return {
          message: 'Používáme analytiku pro zlepšení vašeho prohlížení.',
          accept: 'Přijmout',
          decline: 'Odmítnout'
        }
      default: // slovak
        return {
          message: 'Používame analytiku na zlepšenie vášho prehliadania.',
          accept: 'Prijať',
          decline: 'Odmietnuť'
        }
    }
  }

  const texts = getTexts()

  if (!isVisible) return null

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#3b2f26',
      color: '#d39f69',
      fontSize: '15px',
      textAlign: 'start',
      padding: '20px',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '10px'
    }}>
      <span style={{ flex: '1', minWidth: '200px' }}>
        {texts.message}
      </span>
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={handleDecline}
          style={{
            background: 'transparent',
            color: '#d39f69',
            fontSize: '16px',
            padding: '8px 16px',
            border: '1px solid #d39f69',
            cursor: 'pointer'
          }}
        >
          {texts.decline}
        </button>
        <button
          onClick={handleAccept}
          style={{
            background: '#c8bca4',
            color: '#3b2f26',
            fontSize: '16px',
            padding: '8px 16px',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          {texts.accept}
        </button>
      </div>
    </div>
  )
}

export default ConsentBanner