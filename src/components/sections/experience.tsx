'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'
import { MapPin, Calendar, ExternalLink, Briefcase } from 'lucide-react'
import { experiences } from '@/data/portfolio'
import { formatDate } from '@/lib/utils'

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0,
    rootMargin: '200px 0px'
  })

  const isEven = index % 2 === 0

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -80 : 80 }}
      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0.6, x: isEven ? -40 : 40 }}
      transition={{ duration: 0.45, delay: index * 0.08, ease: 'easeOut' }}
      className={`relative flex items-center ${isEven ? 'flex-row' : 'flex-row-reverse'} mb-12 lg:mb-16`}
    >
      {/* Timeline Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600 hidden lg:block" />
      
      {/* Timeline Dot */}
      <motion.div
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0.8 }}
        transition={{ duration: 0.3, delay: index * 0.08 + 0.1 }}
        className="absolute left-1/2 transform -translate-x-1/2 w-3.5 h-3.5 bg-white dark:bg-gray-900 border-4 border-blue-500 rounded-full z-10 hidden lg:block"
      />

      {/* Experience Card */}
      <div className={`w-full lg:w-5/12 ${isEven ? 'lg:pr-8' : 'lg:pl-8'}`}>
        <motion.div
          whileHover={{ scale: 1.02, y: -5 }}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 shadow-lg dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700 hover:shadow-xl dark:hover:shadow-gray-900/30 transition-all duration-300"
        >
          {/* Company Logo */}
          {experience.logo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 + 0.4 }}
              className="w-16 h-16 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center mb-4 overflow-hidden"
            >
              <Image
                src={experience.logo}
                alt={experience.company}
                width={48}
                height={48}
                className="w-12 h-12 object-contain"
              />
            </motion.div>
          )}

          {/* Job Title */}
          <motion.h3
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-2"
          >
            {experience.title}
          </motion.h3>

          {/* Company Name */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center space-x-2 mb-3"
          >
            <Briefcase className="h-4 w-4 text-blue-500" />
            <span className="text-lg font-semibold text-blue-600 dark:text-blue-400">
              {experience.company}
            </span>
            {experience.website && (
              <motion.a
                href={experience.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-blue-500 transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ExternalLink className="h-4 w-4" />
              </motion.a>
            )}
          </motion.div>

          {/* Location and Duration */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mb-3 text-gray-600 dark:text-gray-400"
          >
            <div className="flex items-center space-x-2 mb-2 sm:mb-0">
              <MapPin className="h-4 w-4" />
              <span>{experience.location}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{experience.duration}</span>
            </div>
          </motion.div>

          {/* Description */}
          <motion.ul
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="space-y-2.5 mb-5"
          >
            {experience.description.map((desc: string, descIndex: number) => (
              <motion.li
                key={descIndex}
                initial={{ opacity: 1, x: 0 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-start space-x-2 text-gray-700 dark:text-gray-300"
              >
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                <span>{desc}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech: string, techIndex: number) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.3, delay: index * 0.2 + 1.1 + techIndex * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Empty space for opposite side */}
      <div className="hidden lg:block w-5/12" />
    </motion.div>
  )
}

const SectionHeader = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className="text-center mb-16 lg:mb-20"
    >
      <motion.h2
        className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Professional{' '}
        <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
          Experience
        </span>
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
      >
        My journey through different roles and companies, building innovative solutions and growing as a developer.
      </motion.p>

      {/* Decorative Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1, delay: 0.6 }}
        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8 rounded-full"
      />
    </motion.div>
  )
}

export default function Experience() {
  const [containerRef, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section
      id="experience"
      ref={containerRef}
      className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeader />

        {/* Timeline Container */}
        <div className="relative">
          {/* Desktop Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gray-300 dark:bg-gray-600 hidden lg:block" />

          {/* Experience Cards */}
          {experiences.map((experience, index) => (
            <ExperienceCard key={experience.id} experience={experience} index={index} />
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 lg:mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20"
          >
            <div className="text-3xl lg:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              2+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Years Experience</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20"
          >
            <div className="text-3xl lg:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              15+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Projects Completed</div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg dark:shadow-gray-900/20"
          >
            <div className="text-3xl lg:text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              20k+
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">Users Impacted</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}