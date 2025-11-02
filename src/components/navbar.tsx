'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from './theme-provider'
import { smoothScrollTo } from '@/lib/utils'

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Resume', href: '#resume' },
  { name: 'Contact', href: '#contact' },
]

const themeIcons = {
  light: Sun,
  dark: Moon,
  system: Monitor,
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i])
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    if (href.startsWith('#')) {
      smoothScrollTo(href.slice(1))
    }
  }

  const cycleTheme = () => {
    const themes: Array<'light' | 'dark' | 'system'> = ['light', 'dark', 'system']
    const currentIndex = themes.indexOf(theme)
    const nextIndex = (currentIndex + 1) % themes.length
    setTheme(themes[nextIndex])
  }

  const ThemeIcon = themeIcons[theme]

  return (
    <>
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-gray-200/20 dark:border-gray-700/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex-shrink-0"
            >
              <Link 
                href="#hero" 
                onClick={(e) => {
                  e.preventDefault()
                  handleNavClick('#hero')
                }}
                className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
              >
                Portfolio
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                      activeSection === item.href.slice(1)
                        ? 'text-blue-600 dark:text-blue-400'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.name}
                    {activeSection === item.href.slice(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                        initial={false}
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Theme Toggle & Mobile Menu Button */}
            <div className="flex items-center space-x-4">
              <motion.button
                onClick={cycleTheme}
                className="p-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                title={`Current theme: ${theme}`}
              >
                <ThemeIcon className="h-5 w-5" />
              </motion.button>

              {/* Mobile menu button */}
              <div className="md:hidden">
                <motion.button
                  onClick={() => setIsOpen(!isOpen)}
                  className="p-2 rounded-lg glass hover:bg-white/20 dark:hover:bg-black/20 transition-all duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.div
                      key={isOpen ? 'close' : 'open'}
                      initial={{ rotate: 0 }}
                      animate={{ rotate: 0 }}
                      exit={{ rotate: 180 }}
                      transition={{ duration: 0.2 }}
                    >
                      {isOpen ? (
                        <X className="h-6 w-6" />
                      ) : (
                        <Menu className="h-6 w-6" />
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-t border-gray-200/20 dark:border-gray-700/20"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.href)
                    }}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-200 ${
                      activeSection === item.href.slice(1)
                        ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20'
                        : 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800/50'
                    }`}
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item.name}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 transform-gpu z-50"
        style={{
          scaleX: scrolled ? 1 : 0,
          transformOrigin: '0%',
        }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </>
  )
}