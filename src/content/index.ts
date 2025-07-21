import * as english from './english'
import * as korean from './korean'

export type Language = 'en' | 'ko'

export const getContent = (language: Language) => {
  switch (language) {
    case 'ko':
      return korean
    case 'en':
    default:
      return english
  }
}

// Export English as default for backwards compatibility
export const { aboutText, bioConfig, personalInfo, contactInfo } = english