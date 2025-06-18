"use client"

import { useState, useEffect, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Stars } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from "next/navigation"
import { Orbitron } from "next/font/google"
import HeroScene from "@/components/hero-scene"
import ParticleField from "@/components/particle-field"
import CinematicLoader from "@/components/cinematic-loader"

const orbitron = Orbitron({ subsets: ["latin"] })

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [showEnter, setShowEnter] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true)
      setTimeout(() => setShowEnter(true), 1000)
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const handleEnter = () => {
    router.push("/about")
  }

  return (
    <div className={`w-full h-screen bg-black overflow-hidden ${orbitron.className}`}>
      <AnimatePresence>{!isLoaded && <CinematicLoader />}</AnimatePresence>

      {isLoaded && (
        <>
          {/* 3D Background */}
          <div className="absolute inset-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
              <Suspense fallback={null}>
                <Environment preset="night" />
                <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade />
                <HeroScene />
                <ParticleField />
              </Suspense>
            </Canvas>
          </div>

          {/* UI Overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-center"
            >
              <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-wider">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  DEV SIDD
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-blue-300 mb-8 tracking-wide">ENTER THE DIGITAL REALM</p>
            </motion.div>

            <AnimatePresence>
              {showEnter && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleEnter}
                  className="px-8 py-4 border-2 border-orange-400 text-orange-400 bg-black/50 backdrop-blur-sm hover:bg-orange-400 hover:text-black transition-all duration-300 text-lg font-semibold tracking-wider"
                >
                  PRESS TO ENTER
                </motion.button>
              )}
            </AnimatePresence>
          </div>

          {/* Ambient Glow Effects */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000" />
        </>
      )}
    </div>
  )
}
