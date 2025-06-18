"use client"

import { motion } from "framer-motion"
import Image from "next/image"

interface Project {
  id: number
  title: string
  description: string
  tech: string[]
  image: string
  color: string
}

interface ProjectGridProps {
  projects: Project[]
  onProjectSelect: (project: Project) => void
}

export default function ProjectGrid({ projects, onProjectSelect }: ProjectGridProps) {
  const getColorClasses = (color: string) => {
    switch (color) {
      case "orange":
        return "border-orange-400/30 hover:border-orange-400"
      case "blue":
        return "border-blue-400/30 hover:border-blue-400"
      case "yellow":
        return "border-yellow-400/30 hover:border-yellow-400"
      default:
        return "border-orange-400/30 hover:border-orange-400"
    }
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          className={`bg-black/50 backdrop-blur-sm border-2 ${getColorClasses(project.color)} 
                     rounded-lg overflow-hidden cursor-pointer transition-all duration-300`}
          onClick={() => onProjectSelect(project)}
        >
          <div className="relative h-48">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>

          <div className="p-6">
            <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-orange-400/20 text-orange-400 text-xs rounded border border-orange-400/30"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
