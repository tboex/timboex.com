import React from 'react'

interface FooterProps {
  githubUrl?: string
  instagramUrl?: string
  linkedinUrl?: string
  email?: string
}

const Footer: React.FC<FooterProps> = ({
  githubUrl = "https://github.com/tboex",
  instagramUrl = "https://instagram.com/timboex",
  linkedinUrl = "https://linkedin.com/in/timboex",
  email = "tim@timboex.com"
}) => {
  return (
    <footer className="w-full pt-8 pb-8 border-t border-neutral-700 bg-neutral-800">
      <div className="flex justify-between items-center max-w-3xl mx-auto px-8">
        {/* Social Links - Left Side */}
        <div className="flex gap-6">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-gray-400 hover:text-gray-200 transition-colors duration-200 font-mono text-sm"
          >
            github
          </a>
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-gray-400 hover:text-gray-200 transition-colors duration-200 font-mono text-sm"
          >
            instagram
          </a>
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-light text-gray-400 hover:text-gray-200 transition-colors duration-200 font-mono text-sm"
          >
            linkedin
          </a>
        </div>

        {/* Email - Right Side */}
        <div>
          <a
            href={`mailto:${email}`}
            className="font-light text-gray-400 hover:text-gray-200 transition-colors duration-200 font-mono text-sm"
          >
            {email}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer