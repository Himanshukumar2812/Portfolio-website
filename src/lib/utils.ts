import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const smoothScrollTo = (elementId: string) => {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }
}

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long'
  })
}

export const getProgressColor = (percentage: number) => {
  if (percentage >= 90) return 'from-green-400 to-green-600'
  if (percentage >= 75) return 'from-blue-400 to-blue-600'
  if (percentage >= 60) return 'from-yellow-400 to-yellow-600'
  if (percentage >= 40) return 'from-orange-400 to-orange-600'
  return 'from-red-400 to-red-600'
}

export const validateEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export const debounce = <T extends (...args: any[]) => any>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null = null
  return (...args: Parameters<T>) => {
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => func(...args), wait)
  }
}

export const throttle = <T extends (...args: any[]) => any>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}