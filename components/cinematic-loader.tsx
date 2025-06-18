"use client"

import { motion } from "framer-motion"

export default function CinematicLoader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-50 bg-black flex items-center justify-center"
    >
      <div className="text-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="w-16 h-16 border-2 border-orange-400 border-t-transparent rounded-full mx-auto mb-8"
        />

        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-2xl font-bold text-orange-400 tracking-wider"
        >
          INITIALIZING EXPERIENCE
        </motion.h2>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, delay: 1 }}
          className="h-1 bg-gradient-to-r from-orange-400 to-yellow-400 mt-4 max-w-xs mx-auto"
        />
      </div>
    </motion.div>
  )
}
