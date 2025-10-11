'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Trophy, Award, Star, ExternalLink, Calendar, Filter, TrendingUp } from 'lucide-react'
import { skills, achievements, Certifications as certifications } from '@/data/portfolio'
import { Skill, Achievement } from '@/types'
import { cn, getProgressColor } from '@/lib/utils'

// Animated Progress Bar Component
const AnimatedProgressBar = ({ skill, index }: { skill: Skill; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">{skill.icon}</span>
          <span className="font-semibold text-gray-900 dark:text-white">
            {skill.name}
          </span>
        </div>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
          className="text-sm font-bold text-blue-600 dark:text-blue-400"
        >
          {skill.level}%
        </motion.span>
      </div>
      
      <div className="relative h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ 
            duration: 0.7, 
            delay: index * 0.05 + 0.2,
            ease: "easeOut"
          }}
          className={cn(
            "h-full rounded-full relative overflow-hidden",
            `bg-gradient-to-r ${getProgressColor(skill.level)}`
          )}
        >
          {/* Shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
            initial={{ x: "-100%" }}
            animate={inView ? { x: "100%" } : {}}
            transition={{ 
              duration: 1.2, 
              delay: index * 0.05 + 0.4,
              ease: "easeInOut"
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

// Radial Progress Chart Component
const RadialChart = ({ skill, index }: { skill: Skill; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })


  const radius = 45
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (skill.level / 100) * circumference

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <motion.div
        whileHover={{ scale: 1.05, rotate: 5 }}
        className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300"
      >
        <div className="flex items-center justify-center mb-4">
          <div className="relative">
            <svg className="transform -rotate-90 w-24 h-24">
              {/* Background circle */}
              <circle
                cx="48"
                cy="48"
                r={radius}
                fill="none"
                className="stroke-gray-200 dark:stroke-gray-700"
                strokeWidth="8"
              />
              {/* Progress circle */}
              <motion.circle
                cx="48"
                cy="48"
                r={radius}
                fill="none"
                className="stroke-blue-600 dark:stroke-blue-400"
                strokeWidth="8"
                strokeLinecap="round"
                strokeDasharray={circumference}
                initial={{ strokeDashoffset: circumference }}
                animate={inView ? { strokeDashoffset } : {}}
                transition={{ 
                  duration: 1.5, 
                  delay: index * 0.1 + 0.5,
                  ease: "easeOut"
                }}
              />
            </svg>
            
            {/* Center content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <motion.span
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.8 }}
                  className="text-xl font-bold text-gray-900 dark:text-white"
                >
                  {skill.level}%
                </motion.span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <div className="text-3xl mb-2">{skill.icon}</div>
          <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
            {skill.name}
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {(skill as any).section || skill.category}
          </p>
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-300 pointer-events-none" />
      </motion.div>
    </motion.div>
  )
}

// Achievement Badge Component
const AchievementBadge = ({ achievement, index }: { achievement: Achievement; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  const getCategoryIcon = (category: string) => {
    const icons = {
      certification: Trophy,
      award: Award,
      publication: Star,
      competition: TrendingUp,
      other: Star,
    }
    return icons[category as keyof typeof icons] || Star
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      certification: 'from-yellow-400 to-orange-500',
      award: 'from-purple-500 to-pink-500',
      publication: 'from-blue-500 to-cyan-500',
      competition: 'from-green-500 to-emerald-500',
      other: 'from-gray-500 to-gray-600',
    }
    return colors[category as keyof typeof colors] || colors.other
  }

  const IconComponent = getCategoryIcon(achievement.category)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        className="relative h-full bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300 overflow-hidden"
      >
        {/* Background gradient */}
        <div className={cn(
          "absolute top-0 left-0 w-full h-2 bg-gradient-to-r",
          getCategoryColor(achievement.category)
        )} />

        {/* Icon */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={inView ? { scale: 1, rotate: 0 } : {}}
          transition={{ duration: 0.8, delay: index * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
          className={cn(
            "w-16 h-16 rounded-full mb-4 flex items-center justify-center bg-gradient-to-r",
            getCategoryColor(achievement.category)
          )}
        >
          {achievement.icon ? (
            <span className="text-2xl">{achievement.icon}</span>
          ) : (
            <IconComponent className="h-8 w-8 text-white" />
          )}
        </motion.div>

        {/* Content */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
          className="text-lg font-bold text-gray-900 dark:text-white mb-2"
        >
          {achievement.title}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.6 }}
          className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed"
        >
          {achievement.description}
        </motion.p>

        {/* Date and Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
          className="flex items-center justify-between"
        >
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <Calendar className="h-4 w-4" />
            <span>{new Date(achievement.date).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })}</span>
          </div>
          
          {achievement.link && (
            <motion.a
              href={achievement.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-1 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="h-4 w-4" />
              <span className="text-sm font-medium">View</span>
            </motion.a>
          )}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}


export default function Skills() {
  // Grouped sections order for display
  const sectionOrder = [
    'Programming Languages',
    'Backend',
    'AI/ML',
    'Cloud',
    'Databases',
    'Platforms & Tools',
    'Familiar with',
  ]
  const [skillView, setSkillView] = useState<'bars' | 'radial'>('bars')

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  // Group skills by section (fallback to category if section missing)
  const groupedBySection: Record<string, Skill[]> = sectionOrder.reduce((acc, sec) => {
    acc[sec] = skills.filter(s => (s.section || '').toLowerCase() === sec.toLowerCase())
    return acc
  }, {} as Record<string, Skill[]>)

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Skills &{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Achievements
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            My technical expertise and professional accomplishments that drive innovation and success.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8 rounded-full"
          />
        </motion.div>

          {/* Skills Section */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between mb-8"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white">
              Technical Skills
            </h3>
            
            {/* View Toggle */}
            <div className="flex bg-gray-200 dark:bg-gray-700 rounded-lg p-1">
              <button
                onClick={() => setSkillView('bars')}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  skillView === 'bars'
                    ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                Progress Bars
              </button>
              <button
                onClick={() => setSkillView('radial')}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200",
                  skillView === 'radial'
                    ? "bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                )}
              >
                Radial Charts
              </button>
            </div>
          </motion.div>

          {/* Grouped Skills Display by Section */}
          <div className="space-y-12">
            {sectionOrder.map((section) => {
              const list = groupedBySection[section] || []
              if (!list.length) return null
              return (
                <div key={section}>
                  <h4 className="text-xl lg:text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                    {section}
                  </h4>
                  <div className={skillView === 'bars'
                    ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                  }>
                    {list.map((skill, index) => (
                      skillView === 'bars'
                        ? <AnimatedProgressBar key={skill.id} skill={skill} index={index} />
                        : <RadialChart key={skill.id} skill={skill} index={index} />
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Certifications Section */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {certifications.map((achievement, index) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement as Achievement}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="mt-2"
        >
          <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Recent Achievements
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {achievements.map((achievement, index) => (
              <AchievementBadge
                key={achievement.id}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20"
          >
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {skills.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Technologies
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20"
          >
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {achievements.length}+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Achievements
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20"
          >
            <div className="text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              95%
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Avg. Proficiency
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20"
          >
            <div className="text-3xl lg:text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
              24/7
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Learning
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}