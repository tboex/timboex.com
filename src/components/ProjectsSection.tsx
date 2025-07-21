import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react'
import { TextScramble } from '../utils/text-scramble'
import type { Project, TextScrambleRef } from '../types'

export interface ProjectsSectionRef extends TextScrambleRef {}

interface ProjectsSectionProps {
  titleText?: string
  delay?: number
  projects?: Project[]
}

const defaultProjects: Project[] = [
  {
    title: "Project One",
    description: "Description of your first project",
    technologies: ["React", "TypeScript"]
  },
  {
    title: "Project Two", 
    description: "Description of your second project",
    technologies: ["Node.js", "Express"]
  },
  {
    title: "Project Three",
    description: "Description of your third project", 
    technologies: ["Python", "Django"]
  }
]

const ProjectsSection = forwardRef<ProjectsSectionRef, ProjectsSectionProps>(({ 
  titleText = "featured projects",
  delay = 0,
  projects = defaultProjects
}, ref) => {
  const titleRef = useRef<HTMLDivElement>(null)
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
    if (titleRef.current) {
      scrambleRef.current = new TextScramble(titleRef.current)
      
      const timer = setTimeout(async () => {
        if (scrambleRef.current) {
          await scrambleRef.current.setText(titleText)
        }
      }, delay)
      
      return () => clearTimeout(timer)
    }
  }, [titleText, delay])

  return (
    <section className="w-full text-left">
      <h2 className="font-extralight text-3xl text-gray-50 m-0 mb-8 min-h-12" ref={titleRef}></h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-neutral-700 border border-neutral-600 rounded-lg p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-neutral-500"
          >
            <h3 className="text-gray-50 text-xl font-light m-0 mb-4">{project.title}</h3>
            <p className="text-gray-300 text-sm leading-relaxed m-0 mb-4">{project.description}</p>
            <div className="flex gap-2 flex-wrap">
              {project.technologies.map((tech, techIndex) => (
                <span 
                  key={techIndex}
                  className="bg-neutral-600 text-gray-50 px-3 py-1 rounded-xl text-xs font-light"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
})

ProjectsSection.displayName = 'ProjectsSection'

export default ProjectsSection
