"use client"

import { Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Stars } from "@react-three/drei"
import { motion } from "framer-motion"
import { Orbitron } from "next/font/google"
import Navigation from "@/components/navigation"
import HologramForm from "@/components/hologram-form"
import ContactParticles from "@/components/contact-particles"

const orbitron = Orbitron({ subsets: ["latin"] })

export default function ContactPage() {
  return (
    <div className={`min-h-screen bg-black text-white ${orbitron.className}`}>
      <Navigation />

      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <Suspense fallback={null}>
            <Environment preset="night" />
            <Stars radius={300} depth={60} count={6000} factor={2} saturation={0} fade />
            <ContactParticles />
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
                CONTACT
              </span>
            </h1>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto">
              Initiate communication protocol - let's build the future together
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <HologramForm />
          </div>
        </div>
      </div>
    </div>
  )
}
