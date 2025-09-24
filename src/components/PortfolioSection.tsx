import React from 'react'
import { portfolioContent } from '../content/portfolio'
import type { Language } from '../content'

interface PortfolioSectionProps {
  language: Language
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ language }) => {
  const content = portfolioContent[language]
  return (
    <section className="w-full max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-gray-100">{content.title}</h1>
      <section className="mb-8">
        <p className="mb-4 text-base font-light text-gray-100">{content.intro}</p>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-100">{content.skillsTitle}</h2>
        <ul className="list-disc list-inside text-base font-light text-gray-300">
          {content.skills.map((s, i) => (
            <li key={i}><b>{s.label}:</b> {s.value}</li>
          ))}
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-100">{content.projectsTitle}</h2>
        {content.projects.map((proj, i) => (
          <div className="mb-4" key={i}>
            <h3 className="font-bold text-lg text-gray-200">{proj.name} <span className="text-xs text-gray-400">({proj.years})</span></h3>
            <div className="text-sm text-gray-400 mb-1">Stack: {proj.stack}</div>
            <ul className="list-disc list-inside text-base font-light text-gray-300 mb-2">
              {proj.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-100">{content.workTitle}</h2>
        {content.work.map((w, i) => (
          <div className="mb-2" key={i}>
            <div className="font-bold text-gray-200">{w.role} <span className="text-xs text-gray-400">({w.years})</span></div>
            <ul className="list-disc list-inside text-base font-light text-gray-300">
              {w.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2 text-gray-100">{content.educationTitle}</h2>
        <ul className="list-disc list-inside text-base font-light text-gray-300">
          {content.education.map((e, i) => <li key={i}>{e}</li>)}
        </ul>
      </section>
    </section>
  )
}

export default PortfolioSection
