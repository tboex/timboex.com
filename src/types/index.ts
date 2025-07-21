export interface Project {
  title: string
  description: string
  technologies: string[]
  link?: string
  github?: string
}

export interface TextScrambleRef {
  setText: (text: string) => Promise<void>
}
