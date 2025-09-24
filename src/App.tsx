import { useEffect, useRef, useState } from 'react'
import './App.css'
import NameSection from './components/NameSection'
import BioSection from './components/BioSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import LanguageToggle from './components/LanguageToggle'
import { getContent, type Language } from './content'
import type { NameSectionRef } from './components/NameSection'
import type { BioSectionRef } from './components/BioSection'
import type { AboutSectionRef } from './components/AboutSection'
import PortfolioSection from './components/PortfolioSection'

function App() {
  const nameRef = useRef<NameSectionRef>(null)
  const bioRef = useRef<BioSectionRef>(null)
  const aboutRef = useRef<AboutSectionRef>(null)

  const [language, setLanguage] = useState<Language>('en')
  const content = getContent(language)
  const { bioConfig, personalInfo, contactInfo, aboutText } = content

  // Get content from external file for easier editing
  const { firstPhrases, secondPhrases } = bioConfig

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  // Define your projects data
  const projects = [
    {
      title: "Personal Website",
      description: "A modern portfolio website built with React and TypeScript featuring text scramble animations",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"]
    },
    {
      title: "E-commerce Platform", 
      description: "Full-stack e-commerce solution with payment processing and inventory management",
      technologies: ["Node.js", "Express", "MongoDB", "Stripe"]
    },
    {
      title: "Task Management App",
      description: "Collaborative task management application with real-time updates and team features",
      technologies: ["Python", "Django", "PostgreSQL", "WebSocket"]
    }
  ]

  const [showPortfolio, setShowPortfolio] = useState(false)

  useEffect(() => {
    if (showPortfolio) {
      window.history.replaceState(null, '', '/portfolio')
    } else {
      window.history.replaceState(null, '', '/')
    }
  }, [showPortfolio])

  return (
    <div className="min-h-screen w-full flex flex-col bg-neutral-800 font-input">
      <div className="flex-1 flex flex-col justify-start items-start p-8 max-w-3xl mx-auto w-full">
        <LanguageToggle 
          currentLanguage={language}
          onLanguageChange={handleLanguageChange}
          delay={2800}
        />
        
        {showPortfolio ? (
          <div className="w-full">
            <PortfolioSection language={language} />
            <button
              className="mt-8 px-4 py-2 bg-neutral-700 text-gray-200 rounded hover:bg-neutral-600 font-mono text-sm"
              onClick={() => setShowPortfolio(false)}
            >
              ← Back to About
            </button>
          </div>
        ) : (
          <>
            <NameSection 
              ref={nameRef}
              initialText={personalInfo.name}
              delay={500}
            />
            
            <BioSection 
              ref={bioRef}
              firstPhrases={firstPhrases}
              secondPhrases={secondPhrases}
              delay={2000}
              rotationInterval={4000}
            />
            <AboutSection 
              ref={aboutRef}
              text={aboutText}
              delay={4100}
            />
          </>
        )}
      </div>
      
      <Footer
        githubUrl={contactInfo.github}
        instagramUrl={contactInfo.instagram}
        linkedinUrl={contactInfo.linkedin}
        email={contactInfo.email}
        onShowPortfolio={() => setShowPortfolio(true)}
      />
    </div>
  )
}

export default App
