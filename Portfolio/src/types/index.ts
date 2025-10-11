export interface Experience {
  id: string
  title: string
  company: string
  location: string
  duration: string
  startDate: string
  endDate?: string
  description: string[]
  technologies: string[]
  logo?: string
  website?: string
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription: string
  technologies: string[]
  category: 'web'  | 'ai' | 'fullstack' | 'other'
  image: string
  images: string[]
  github?: string
  demo?: string
  featured: boolean
  status: 'completed' | 'in-progress' | 'planned'
}

export interface Skill {
  id: string
  name: string
  category: 'ai/ml' | 'frontend' | 'backend' | 'database' | 'devops' | 'design' | 'other'
  level: number // 0-100
  icon?: string
  color?: string
  // Display grouping label for the Skills section (e.g., "Programming Languages", "Backend", etc.)
  section?: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  category: 'certification' | 'award' | 'publication' | 'competition' | 'other'
  icon?: string
  link?: string
  image?: string
}

// Alias to support user-defined Certifications[] typing
export type Certifications = Achievement;

export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  color: string
}

export interface PersonalInfo {
  name: string
  title: string
  tagline: string
  description: string
  location: string
  email: string
  phone?: string
  avatar: string
  resume: string
  socialLinks: SocialLink[]
}

export interface NavItem {
  name: string
  href: string
  icon?: string
}

export interface Theme {
  mode: 'light' | 'dark'
}

export interface AnimationConfig {
  duration: number
  delay: number
  easing: string
}

export interface ParticlesConfig {
  particles: {
    number: {
      value: number
    }
    color: {
      value: string
    }
    shape: {
      type: string
    }
    opacity: {
      value: number
    }
    size: {
      value: number
    }
    line_linked: {
      enable: boolean
      distance: number
      color: string
      opacity: number
      width: number
    }
    move: {
      enable: boolean
      speed: number
    }
  }
  interactivity: {
    detect_on: string
    events: {
      onhover: {
        enable: boolean
        mode: string
      }
      onclick: {
        enable: boolean
        mode: string
      }
    }
  }
}

export type FilterCategory = 'all' | 'web' | 'ai' | 'fullstack' | 'other'