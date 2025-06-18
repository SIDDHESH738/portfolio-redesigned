"use client"

import { motion } from "framer-motion"
import { X, ExternalLink, Github } from "lucide-react"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  color: string
}

interface ProjectModalProps {
  project: Project
  onClose: () => void
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        className="bg-black border-2 border-orange-400/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 text-white hover:text-orange-400 transition-colors"
          >
            <X size={24} />
          </button>

          <div className="relative h-64 md:h-80">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
          </div>
        </div>

        <div className="p-8">
          <h2 className="text-3xl font-bold text-orange-400 mb-4">{project.title}</h2>
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">{project.description}</p>

          <div className="mb-6">
            <h3 className="text-xl font-bold text-white mb-3">Technologies Used</h3>
            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-2 bg-orange-400/20 text-orange-400 rounded border border-orange-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 bg-orange-400 text-black font-semibold rounded hover:bg-orange-500 transition-colors"
            >
              <ExternalLink size={20} />
              View Live
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3 border-2 border-orange-400 text-orange-400 font-semibold rounded hover:bg-orange-400 hover:text-black transition-colors"
            >
              <Github size={20} />
              Source Code
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
