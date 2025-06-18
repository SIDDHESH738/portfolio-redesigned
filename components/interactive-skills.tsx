"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "Three.js", level: 85 },
      { name: "Tailwind CSS", level: 92 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 87 },
      { name: "Python", level: 82 },
      { name: "PostgreSQL", level: 80 },
      { name: "GraphQL", level: 78 },
      { name: "Docker", level: 75 },
    ],
  },
  {
    name: "3D & Animation",
    skills: [
      { name: "WebGL", level: 83 },
      { name: "GLSL Shaders", level: 75 },
      { name: "Blender", level: 70 },
      { name: "Framer Motion", level: 88 },
      { name: "GSAP", level: 85 },
    ],
  },
]

export default function InteractiveSkills() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div className="max-w-6xl mx-auto">
      {/* Category Tabs */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-black/50 backdrop-blur-sm border border-orange-400/30 rounded-lg p-2">
          {skillCategories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-md font-semibold transition-all ${
                activeCategory === index ? "bg-orange-400 text-black" : "text-orange-400 hover:bg-orange-400/20"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Skills Display */}
      <motion.div
        key={activeCategory}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {skillCategories[activeCategory].skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-6"
          >
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
              <span className="text-orange-400 font-bold">{skill.level}%</span>
            </div>

            <div className="w-full bg-gray-800 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className="bg-gradient-to-r from-orange-400 to-yellow-400 h-2 rounded-full"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}
