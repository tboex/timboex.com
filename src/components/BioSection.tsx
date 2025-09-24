import { useEffect, useRef, forwardRef, useImperativeHandle, useState } from 'react'
import { TextScramble } from '../utils/text-scramble'

export interface BioSectionRef {
  setText: (text: string) => Promise<void>
  startRotation: () => void
  stopRotation: () => void
}

interface BioSectionProps {
  initialText?: string
  delay?: number
  firstPhrases?: string[]
  secondPhrases?: string[]
  rotationInterval?: number
}

const BioSection = forwardRef<BioSectionRef, BioSectionProps>(({ 
  initialText = "full-stack developer passionate about creating innovative web experiences",
  delay = 0,
  firstPhrases = [
    "full-stack developer",
    "search expert", 
    "high performance microservice maker",
    "두부 먹는 사람",
    "problem solver",
    "api architect",
    "performance optimizer",
    "spokesperson for code quality",
    "code craftsperson"
  ],
  secondPhrases = [
    "passionate about creating innovative web experiences",
    "building scalable solutions",
    "crafting elegant code",
    "making things go faster",
    "아마 지금 밥 먹고 있어",
    "solving complex problems",
    "optimizing for performance",
    "trying his best",
    "architecting robust systems",
    "hopefully working",
    "being driven by continuous learning"
  ],
  rotationInterval = 3000
}, ref) => {
  const bioRef = useRef<HTMLDivElement>(null)
  const scrambleRef = useRef<TextScramble | null>(null)
  const rotationTimerRef = useRef<number | null>(null)
  const [isRotating, setIsRotating] = useState(false)

  const getRandomPhrase = (phrases: string[]) => {
    return phrases[Math.floor(Math.random() * phrases.length)]
  }

  const startRotation = () => {
    if (isRotating) return
    setIsRotating(true)
    
    const rotate = () => {
      if (scrambleRef.current) {
        const firstPhrase = getRandomPhrase(firstPhrases)
        const secondPhrase = getRandomPhrase(secondPhrases)
        const newText = `${firstPhrase} ${secondPhrase}`
        scrambleRef.current.setText(newText)
      }
      
      rotationTimerRef.current = setTimeout(rotate, rotationInterval)
    }
    
    rotationTimerRef.current = setTimeout(rotate, rotationInterval)
  }

  const stopRotation = () => {
    setIsRotating(false)
    if (rotationTimerRef.current) {
      clearTimeout(rotationTimerRef.current)
      rotationTimerRef.current = null
    }
  }

  useImperativeHandle(ref, () => ({
    setText: async (text: string) => {
      stopRotation() // Stop rotation when manually setting text
      if (scrambleRef.current) {
        return scrambleRef.current.setText(text)
      }
      return Promise.resolve()
    },
    startRotation,
    stopRotation
  }))

  useEffect(() => {
    if (bioRef.current) {
      scrambleRef.current = new TextScramble(bioRef.current)
      
      const timer = setTimeout(async () => {
        if (scrambleRef.current) {

          const firstPhrase = getRandomPhrase(firstPhrases)
          const secondPhrase = getRandomPhrase(secondPhrases)
          const initialDisplayText = `${firstPhrase} ${secondPhrase}`
          await scrambleRef.current.setText(initialDisplayText)
          
          setTimeout(() => {
            startRotation()
          }, 2000)
        }
      }, delay)
      
      return () => {
        clearTimeout(timer)
        stopRotation()
      }
    }
  }, [initialText, delay, firstPhrases, secondPhrases])

  useEffect(() => {
    return () => stopRotation()
  }, [])

  return (
    <section className="text-left mb-16 max-w-2xl">
      <p className="font-light text-xl text-gray-50 leading-relaxed m-0 h-16 flex items-center" ref={bioRef}></p>
    </section>
  )
})

BioSection.displayName = 'BioSection'

export default BioSection
