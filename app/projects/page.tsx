"use client"

import { useState, Suspense } from "react"
import { Canvas } from "@react-three/fiber"
import { Environment, Stars } from "@react-three/drei"
import { motion, AnimatePresence } from "framer-motion"
import { Orbitron } from "next/font/google"
import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"
import ProjectModal from "@/components/project-modal"

const orbitron = Orbitron({ subsets: ["latin"] })

const projects = [
  {
    id: 1,
    title: "StudyGPT AI powered assistant",
    description: "AI powered assistant for students to help them with their studies",
    tech: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "OpenAI API", "Supabase"],
    image: "/placeholder.svg?height=300&width=400",
    color: "orange",
  },
  {
    id: 2,
    title: "Zynox-digital brand website",
    description: "Brand website for Zynox-digital",
    tech: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "OpenAI API", "Supabase"],
    image: "/placeholder.svg?height=300&width=400",
    color: "blue",
  },
  {
    id: 3,
    title: "GrowKaro ",
    description: "Alternative to Fiverr for freelancers",
    tech: ["React", "Framer Motion", "SCSS"],
    image: "/placeholder.svg?height=300&width=400",
    color: "yellow",
  },
  {
    id: 4,
    title: "NOCTURNE - perfumery website",
    description: "Perfumery website for NOCTURNE",
    tech: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "OpenAI API", "Supabase"],
    image: "/placeholder.svg?height=300&width=400",
    color: "orange",
  },
]

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <div className={`min-h-screen bg-black text-white ${orbitron.className}`}>
      <Navigation />

      {/* 3D Background */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
          <Suspense fallback={null}>
            <Environment preset="night" />
            <Stars radius={300} depth={60} count={10000} factor={4} saturation={0} fade />
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
                PROJECTS
              </span>
            </h1>
            <p className="text-xl text-blue-300 max-w-3xl mx-auto">
              Explore the digital realms I've crafted - each project a gateway to innovation
            </p>
          </motion.div>

          <ProjectGrid projects={projects} onProjectSelect={setSelectedProject} />
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </div>
  )
}
