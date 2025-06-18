"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Stars } from "@react-three/drei"
import { motion } from "framer-motion"
import { Orbitron } from "next/font/google"
import Navigation from "@/components/navigation"
import HologramAvatar from "@/components/hologram-avatar"
import TimelineCarousel from "@/components/timeline-carousel"
import FloatingQuotes from "@/components/floating-quotes"

const orbitron = Orbitron({ subsets: ["latin"] })

export default function AboutPage() {
  return (
    <div className={`min-h-screen bg-black text-white ${orbitron.className}`}>
      <Navigation />

      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
          <Suspense fallback={null}>
            <Environment preset="night" />
            <Stars radius={300} depth={60} count={15000} factor={5} saturation={0} fade />
            <HologramAvatar />
            <FloatingQuotes />
          </Suspense>
        </Canvas>
      </div>

      {/* Content */}
      <div className="relative z-10 pt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                ABOUT
              </span>
            </h1>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto leading-relaxed">
              Digital architect crafting immersive experiences at the intersection of technology and creativity.
              Transforming ideas into reality through code, design, and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="bg-black/50 backdrop-blur-sm border border-orange-400/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-orange-400 mb-4">Mission Statement</h3>
                <p className="text-gray-300 leading-relaxed">
                  To push the boundaries of web development by creating immersive, performance-optimized experiences
                  that blur the line between digital and reality.
                </p>
              </div>

              <div className="bg-black/50 backdrop-blur-sm border border-blue-400/30 p-6 rounded-lg">
                <h3 className="text-2xl font-bold text-blue-400 mb-4">Philosophy</h3>
                <p className="text-gray-300 leading-relaxed">
                  Every pixel has purpose. Every interaction tells a story. Technology should feel magical, not
                  mechanical.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="h-96 relative"
            >
              {/* 3D Avatar placeholder - the actual 3D content is in the Canvas above */}
              <div className="w-full h-full bg-gradient-to-br from-orange-400/20 to-blue-400/20 rounded-lg border border-orange-400/30 flex items-center justify-center">
                <p className="text-orange-400 text-lg">Coming Soon...</p>
              </div>
            </motion.div>
          </div>

          <TimelineCarousel />
        </div>
      </div>
    </div>
  )
}
