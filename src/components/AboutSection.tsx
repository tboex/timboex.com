import { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react'
import { TextScramble } from '../utils/text-scramble'
import { aboutText } from '../content'

export interface AboutSectionRef {
  setText: (text: string) => Promise<void>
}

interface AboutSectionProps {
  text?: string
  delay?: number
}

const AboutSection = forwardRef<AboutSectionRef, AboutSectionProps>(({ 
  text = aboutText,
  delay = 0 
}, ref) => {
  const aboutRef = useRef<HTMLDivElement>(null)
  const scrambleRef = useRef<TextScramble | null>(null)
  const [hasInitialized, setHasInitialized] = useState(false)

  useImperativeHandle(ref, () => ({
    setText: async (newText: string) => {
      if (scrambleRef.current) {
        return scrambleRef.current.setText(newText, { speed: 0.5  })
      }
      return Promise.resolve()
    }
  }))

  useEffect(() => {
    if (aboutRef.current) {
      scrambleRef.current = new TextScramble(aboutRef.current)
      
      const timer = setTimeout(async () => {
        if (scrambleRef.current) {
          await scrambleRef.current.setText(text, { speed: 0.5  })
          setHasInitialized(true)
        }
      }, delay)
      
      return () => clearTimeout(timer)
    }
  }, [text, delay])

  useEffect(() => {
    if (scrambleRef.current && text && hasInitialized) {
      scrambleRef.current.setText(text)
    }
  }, [text, hasInitialized])

  return (
    <section className="text-left mb-16 max-w-3xl">
      <div className="font-light text-base text-gray-300 leading-relaxed m-0 min-h-12" ref={aboutRef}></div>
    </section>
  )
})

AboutSection.displayName = 'AboutSection'

export default AboutSection
