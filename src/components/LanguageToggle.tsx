import React, { useState, useRef, useEffect } from 'react'
import type { Language } from '../content'

interface LanguageToggleProps {
  currentLanguage: Language
  onLanguageChange: (language: Language) => void
  delay?: number
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLanguage,
  onLanguageChange,
  delay = 3000
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const languages = [
    { code: 'en' as Language, name: 'English', flag: '🇺🇸' },
    { code: 'ko' as Language, name: '한국어', flag: '🇰🇷' }
  ]

  const currentLang = languages.find(lang => lang.code === currentLanguage)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const selectLanguage = (language: Language) => {
    onLanguageChange(language)
    setIsOpen(false)
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  // Delayed fade-in effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div 
      className={`fixed top-8 right-8 transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`} 
      ref={dropdownRef}
    >
      <button
        onClick={toggleDropdown}
        className="bg-neutral-700 text-gray-50 border border-neutral-600 px-4 py-2 rounded cursor-pointer font-mono text-sm hover:bg-neutral-600 transition-colors duration-200 flex items-center gap-2"
        aria-label="Select language"
      >
        <i className="fa-regular fa-language"></i>
        <span className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          ▼
        </span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-neutral-700 border border-neutral-600 rounded shadow-lg min-w-full overflow-hidden z-10">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              className={`w-full px-4 py-2 text-left font-mono text-sm hover:bg-neutral-600 transition-colors duration-200 flex items-center gap-2 ${
                currentLanguage === lang.code 
                  ? 'bg-neutral-600 text-gray-200' 
                  : 'text-gray-50'
              }`}
            >
              <span>{lang.flag}</span>
              <span>{lang.name}</span>
              {currentLanguage === lang.code && (
                <span className="ml-auto text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default LanguageToggle
