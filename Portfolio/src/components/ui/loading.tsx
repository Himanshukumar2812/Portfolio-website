'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-white dark:bg-gray-900 flex items-center justify-center z-50">
      <div className="text-center">
        {/* Loading Animation */}
        <motion.div
          className="relative w-20 h-20 mx-auto mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 border-4 border-blue-200 dark:border-blue-800 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div
            className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full"
            animate={{ rotate: 360 }}
            transition={{
              duration: 0.75,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
        
        {/* Loading Text */}
        <motion.h2
          className="text-xl font-semibold text-gray-900 dark:text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Loading Portfolio
        </motion.h2>
        
        <motion.p
          className="text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Preparing an amazing experience...
        </motion.p>
      </div>
    </div>
  )
}

export default Loading