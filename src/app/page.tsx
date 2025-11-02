'use client'

import React from 'react'
import Navbar from '@/components/navbar'
import Hero from '@/components/sections/hero'
import Experience from '@/components/sections/experience'
import Projects from '@/components/sections/projects'
import Skills from '@/components/sections/skills'
import Resume from '@/components/sections/resume'
import Contact from '@/components/sections/contact'

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      {/* All Sections */}
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </main>
  )
}
