import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { TextScramble } from '../utils/text-scramble'

export interface NameSectionRef {
  setText: (text: string) => Promise<void>
}

interface NameSectionProps {
  initialText?: string
  delay?: number
}

const NameSection = forwardRef<NameSectionRef, NameSectionProps>(({ 
  initialText = "tim boex", 
  delay = 0 
}, ref) => {
  const nameRef = useRef<HTMLDivElement>(null)
  const scrambleRef = useRef<TextScramble | null>(null)

  useImperativeHandle(ref, () => ({
    setText: async (text: string) => {
      if (scrambleRef.current) {
        return scrambleRef.current.setText(text)
      }
      return Promise.resolve()
    }
  }))

  useEffect(() => {
    if (nameRef.current) {
      scrambleRef.current = new TextScramble(nameRef.current)
      
      const timer = setTimeout(async () => {
        if (scrambleRef.current) {
          await scrambleRef.current.setText(initialText)
        }
      }, delay)
      
      return () => clearTimeout(timer)
    }
  }, [initialText, delay])

  return (
    <section className="text-left mb-12">
      <h1 className="font-light text-6xl text-gray-50 m-0 min-h-16" ref={nameRef}></h1>
    </section>
  )
})

NameSection.displayName = 'NameSection'

export default NameSection
