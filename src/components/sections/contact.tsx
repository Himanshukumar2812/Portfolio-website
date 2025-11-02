'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Github, 
  Linkedin, 
  Twitter, 
  Heart,
  ArrowUp,
  MessageCircle,
  Calendar,
  ExternalLink,
  CheckCircle,
  AlertCircle
} from 'lucide-react'
import { personalInfo } from '@/data/portfolio'
import { validateEmail, smoothScrollTo } from '@/lib/utils'

// Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  const validateForm = () => {
    const newErrors = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some(error => error !== '')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call - replace with actual form submission logic
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // For now, we'll simulate success
      // In a real implementation, you would send the form data to your backend or email service
      console.log('Form submitted:', formData)
      
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus('idle'), 5000)
    }
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.3 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Email Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 dark:border-gray-700 focus:border-blue-500'
              }`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-500 flex items-center"
              >
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.name}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email
                  ? 'border-red-500 focus:border-red-500'
                  : 'border-gray-200 dark:border-gray-700 focus:border-blue-500'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 text-sm text-red-500 flex items-center"
              >
                <AlertCircle className="h-4 w-4 mr-1" />
                {errors.email}
              </motion.p>
            )}
          </motion.div>
        </div>

        {/* Subject */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.subject
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 dark:border-gray-700 focus:border-blue-500'
            }`}
            placeholder="What would you like to discuss?"
          />
          {errors.subject && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.subject}
            </motion.p>
          )}
        </motion.div>

        {/* Message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
        >
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-lg border-2 transition-all duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none ${
              errors.message
                ? 'border-red-500 focus:border-red-500'
                : 'border-gray-200 dark:border-gray-700 focus:border-blue-500'
            }`}
            placeholder="Tell me about your project, ideas, or just say hello!"
          />
          {errors.message && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2 text-sm text-red-500 flex items-center"
            >
              <AlertCircle className="h-4 w-4 mr-1" />
              {errors.message}
            </motion.p>
          )}
        </motion.div>

        {/* Submit Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0"
        >
          <motion.button
            type="submit"
            disabled={isSubmitting}
            className={`w-full sm:w-auto flex items-center justify-center space-x-2 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 ${
              isSubmitting
                ? 'bg-gray-400 cursor-not-allowed'
                : 'btn-futuristic hover:shadow-lg'
            }`}
            whileHover={!isSubmitting ? { scale: 1.02 } : {}}
            whileTap={!isSubmitting ? { scale: 0.98 } : {}}
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white" />
                <span>Sending...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Send Message</span>
              </>
            )}
          </motion.button>

          {/* Success/Error Messages */}
          {submitStatus === 'success' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-2 text-green-600 dark:text-green-400"
            >
              <CheckCircle className="h-5 w-5" />
              <span>Message sent successfully!</span>
            </motion.div>
          )}

          {submitStatus === 'error' && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center space-x-2 text-red-600 dark:text-red-400"
            >
              <AlertCircle className="h-5 w-5" />
              <span>Failed to send message. Please try again.</span>
            </motion.div>
          )}
        </motion.div>
      </form>
    </motion.div>
  )
}

// Contact Info Cards
const ContactInfo = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Me',
      description: 'For project discussions and collaborations',
      value: personalInfo.email,
      action: () => window.open(`mailto:${personalInfo.email}`, '_blank'),
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      title: 'Call Me',
      description: 'Available for consultation calls',
      value: personalInfo.phone || '+91 XXXXX-XXXXX',
      action: () => window.open(`tel:${personalInfo.phone}`, '_blank'),
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: Calendar,
      title: 'Schedule Meeting',
      description: 'Book a time that works for both of us',
      value: 'Available Mon-Fri',
      action: () => window.open('https://calendly.com/himanshukumar', '_blank'),
      gradient: 'from-purple-500 to-pink-500'
    }
  ]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="space-y-6"
    >
      {contactMethods.map((method, index) => (
        <motion.div
          key={method.title}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
          whileHover={{ scale: 1.02, x: 5 }}
          onClick={method.action}
          className={`relative group cursor-pointer bg-gradient-to-r ${method.gradient} p-1 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300`}
        >
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 flex items-center space-x-4">
            <div className={`w-14 h-14 rounded-full bg-gradient-to-r ${method.gradient} flex items-center justify-center flex-shrink-0`}>
              <method.icon className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                {method.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                {method.description}
              </p>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {method.value}
              </p>
            </div>
            <ExternalLink className="h-5 w-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-200 transition-colors" />
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Social Media Links
const SocialMediaLinks = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  const iconMap = {
    Github,
    Linkedin,
    Twitter,
    Mail,
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="text-center"
    >
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
        Follow Me Online
      </h3>
      
      <div className="flex justify-center space-x-6">
        {personalInfo.socialLinks.map((link, index) => {
          const IconComponent = iconMap[link.icon as keyof typeof iconMap]
          
          return (
            <motion.a
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-5 pt-6 pb-5 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 flex items-center justify-center"
              style={{ color: link.color }}
              whileHover={{ 
                scale: 1.08,
                boxShadow: `0 10px 30px ${link.color}40`
              }}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.25, delay: 0.2 + index * 0.03 }}
            >
              <IconComponent className="h-8 w-8 transition-all duration-300 translate-y-[-2px]" />
              
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 px-3 py-1 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {link.platform}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900 dark:border-t-gray-100" />
              </div>
            </motion.a>
          )
        })}
      </div>
    </motion.div>
  )
}

// Back to Top Button
const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  React.useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <motion.button
      onClick={() => smoothScrollTo('hero')}
      className={`fixed bottom-8 right-8 z-40 p-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
      }`}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
    >
      <ArrowUp className="h-6 w-6" />
    </motion.button>
  )
}

// Footer Component
const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })

  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'AI/ML Development',
    'Computer Vision',
    'Data Analytics',
    'Full Stack Development',
    'API Development',
    'Consulting'
  ]

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-gray-900 dark:bg-gray-950 text-white pt-12 pb-0"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2"
          >
            <h3 className="text-2xl font-bold text-gradient bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              {personalInfo.name}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {personalInfo.description}
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <MapPin className="h-4 w-4" />
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => smoothScrollTo(link.href.slice(1))}
                    className="text-gray-400 hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service} className="text-gray-400">
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0"
        >
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} {personalInfo.name}. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-2 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 animate-pulse" />
            <span>By HK2812</span>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

// Main Contact Component
export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  return (
    <section
      id="contact"
      ref={ref}
      className="pt-12 pb-0 lg:pt-16 lg:pb-0 bg-gray-50 dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
            Get In{' '}
            <span className="text-gradient bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to bring your AI/ML ideas to life? Let&apos;s collaborate on your next innovative project.
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : {}}
            transition={{ duration: 1, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Info */}
          <div className="lg:col-span-1">
            <ContactInfo />
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <ContactForm />
          </div>
        </div>

        {/* Social Media */}
        <SocialMediaLinks />
      </div>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTop />
    </section>
  )
}