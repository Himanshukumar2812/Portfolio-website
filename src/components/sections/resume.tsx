'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Download, Eye, ExternalLink, FileText, Star, Award, Briefcase, GraduationCap, Brain, Code, Database, Cloud } from 'lucide-react'
import { personalInfo } from '@/data/portfolio'


// PDF Viewer Component
const PDFViewer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 50 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="relative bg-white dark:bg-gray-800 rounded-2xl w-full max-w-5xl h-[85vh] shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Himanshu Kumar - Resume Preview
              </h3>
              <div className="flex items-center space-x-3">
                <motion.a
                  href={personalInfo.resume}
                  download="Himanshu_Kumar_Resume.pdf"
                  className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download className="h-4 w-4" />
                  <span>Download PDF</span>
                </motion.a>
                <button
                  onClick={onClose}
                  className="p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* PDF Content Area */}
            <div className="flex-1 h-full">
              <object data={personalInfo.resume} type="application/pdf" className="w-full h-full">
                <p className="p-4 text-center text-gray-600 dark:text-gray-300">
                  Unable to display PDF. 
                  <a href={personalInfo.resume} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 underline">Open in a new tab</a> or download it above.
                </p>
              </object>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}

// Resume Action Cards
const ResumeActions = ({ onViewResume }: { onViewResume: () => void }) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  const actions = [
    {
      title: "View Online",
      description: "Preview my AI/ML focused resume in an interactive viewer",
      icon: Eye,
      action: onViewResume,
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "hover:from-blue-600 hover:to-cyan-600"
    },
    {
      title: "Download PDF",
      description: "Get a copy of my resume highlighting ML expertise",
      icon: Download,
      action: () => {
        const link = document.createElement('a')
        link.href = personalInfo.resume
        link.download = 'Himanshu_Kumar_AI_ML_Resume.pdf'
        link.click()
      },
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "hover:from-purple-600 hover:to-pink-600"
    },
    {
      title: "Connect on LinkedIn",
      description: "View my professional network and recommendations",
      icon: ExternalLink,
      action: () => {
        const linkedinProfile = personalInfo.socialLinks.find(link => link.platform === 'LinkedIn')
        if (linkedinProfile) {
          window.open(linkedinProfile.url, '_blank')
        }
      },
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "hover:from-green-600 hover:to-emerald-600"
    }
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
    >
      {actions.map((action, index) => (
        <motion.div
          key={action.title}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
          whileHover={{ scale: 1.02, y: -5 }}
          whileTap={{ scale: 0.98 }}
          onClick={action.action}
          className={`relative group cursor-pointer bg-gradient-to-br ${action.gradient} p-1 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full">
            <motion.div
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className={`w-12 h-12 rounded-full bg-gradient-to-r ${action.gradient} flex items-center justify-center mb-4`}
            >
              <action.icon className="h-6 w-6 text-white" />
            </motion.div>
            
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              {action.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {action.description}
            </p>

            {/* Hover effect overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br ${action.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none rounded-2xl`} />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

// AI/ML Skills Overview
const AIMLSkills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  const skillCategories = [
    {
      title: "Machine Learning",
      skills: ["TensorFlow", "PyTorch", "scikit-learn", "XGBoost"],
      color: "purple",
      icon: Brain
    },
    {
      title: "Deep Learning",
      skills: ["CNNs", "RNNs", "Transformers", "GANs"],
      color: "blue",
      icon: Brain
    },
    {
      title: "Computer Vision",
      skills: ["OpenCV", "YOLO", "Object Detection", "Image Processing"],
      color: "green",
      icon: Eye
    },
    {
      title: "Data Science",
      skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn"],
      color: "orange",
      icon: Database
    },
    {
      title: "MLOps",
      skills: ["Docker", "Kubernetes", "MLflow", "AWS SageMaker"],
      color: "indigo",
      icon: Cloud
    },
    {
      title: "Programming",
      skills: ["Python", "JavaScript", "React", "FastAPI"],
      color: "red",
      icon: Code
    }
  ]

  const colorClasses = {
    purple: {
      bg: "bg-purple-50 dark:bg-purple-900/10",
      border: "border-purple-200 dark:border-purple-800",
      title: "text-purple-900 dark:text-purple-100",
      skill: "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
      icon: "text-purple-600 dark:text-purple-400"
    },
    blue: {
      bg: "bg-blue-50 dark:bg-blue-900/10",
      border: "border-blue-200 dark:border-blue-800",
      title: "text-blue-900 dark:text-blue-100",
      skill: "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
      icon: "text-blue-600 dark:text-blue-400"
    },
    green: {
      bg: "bg-green-50 dark:bg-green-900/10",
      border: "border-green-200 dark:border-green-800",
      title: "text-green-900 dark:text-green-100",
      skill: "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300",
      icon: "text-green-600 dark:text-green-400"
    },
    orange: {
      bg: "bg-orange-50 dark:bg-orange-900/10",
      border: "border-orange-200 dark:border-orange-800",
      title: "text-orange-900 dark:text-orange-100",
      skill: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
      icon: "text-orange-600 dark:text-orange-400"
    },
    indigo: {
      bg: "bg-indigo-50 dark:bg-indigo-900/10",
      border: "border-indigo-200 dark:border-indigo-800",
      title: "text-indigo-900 dark:text-indigo-100",
      skill: "bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300",
      icon: "text-indigo-600 dark:text-indigo-400"
    },
    red: {
      bg: "bg-red-50 dark:bg-red-900/10",
      border: "border-red-200 dark:border-red-800",
      title: "text-red-900 dark:text-red-100",
      skill: "bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300",
      icon: "text-red-600 dark:text-red-400"
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.6 }}
      className="mb-12"
    >
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
        AI/ML & Technical Skills Overview
      </h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className={`p-6 rounded-2xl border-2 ${colorClasses[category.color as keyof typeof colorClasses].bg} ${colorClasses[category.color as keyof typeof colorClasses].border} transition-all duration-300`}
          >
            <div className="flex items-center mb-4">
              <category.icon className={`h-6 w-6 mr-3 ${colorClasses[category.color as keyof typeof colorClasses].icon}`} />
              <h4 className={`text-lg font-bold ${colorClasses[category.color as keyof typeof colorClasses].title}`}>
                {category.title}
              </h4>
            </div>
            
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 1 + index * 0.1 + skillIndex * 0.05 }}
                  className={`inline-block px-3 py-1 text-sm font-medium rounded-full mr-2 mb-2 ${colorClasses[category.color as keyof typeof colorClasses].skill}`}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default function Resume() {
  const [isViewerOpen, setIsViewerOpen] = useState(false)
  
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section
      id="resume"
      ref={ref}
      className="py-20 lg:py-32 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-400/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            My{' '}
            <span className="text-gradient bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Resume
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            A comprehensive overview of my AI/ML expertise, full-stack development skills, and professional achievements.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-600 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* Resume Actions */}
        <ResumeActions onViewResume={() => setIsViewerOpen(true)} />

        {/* AI/ML Skills section removed per request */}

        {/* Contact CTA */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center p-8 bg-gradient-to-r from-purple-500/10 via-blue-500/10 to-cyan-500/10 rounded-2xl border border-gray-200 dark:border-gray-700"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s Build AI Solutions Together
          </h3>
          <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
            I&apos;m passionate about leveraging AI/ML to solve real-world problems and create innovative applications.
            Let&apos;s collaborate on your next machine learning project or full-stack application.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <motion.button
              onClick={() => window.location.href = '#contact'}
              className="btn-futuristic px-8 py-4 text-lg font-semibold rounded-lg shadow-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              Get In Touch
            </motion.button>
            
            <motion.a
              href={personalInfo.resume}
              download="Himanshu_Kumar_AI_ML_Resume.pdf"
              className="flex items-center space-x-2 px-8 py-4 text-lg font-semibold rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="h-5 w-5" />
              <span>Download Resume</span>
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* PDF Viewer Modal */}
      <PDFViewer 
        isOpen={isViewerOpen} 
        onClose={() => setIsViewerOpen(false)} 
      />
    </section>
  )
}