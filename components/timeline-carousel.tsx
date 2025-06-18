"use client"

import { motion } from "framer-motion"

const timelineData = [
  {
    year: "2025",
    title: "Tech Faculty",
    company: "CT",
    description: "Leading development of next-generation web applications using cutting-edge technologies.",
  },
  {
    year: "2024",
    title: "Campus Ambassador",
    company: "Acmegrade",
    description: "Drive students to successfull career paths",
  },
  {
    year: "2023",
    title: "Frontend Architect",
    company: "Innovation Labs",
    description: "Architected scalable frontend solutions for enterprise-level applications.",
  },
  {
    year: "2023",
    title: "Creative Developer",
    company: "Pixel Perfect Agency",
    description: "Bridged the gap between design and development with interactive experiences.",
  },
]

export default function TimelineCarousel() {
  return (
    <div className="mt-20">
      <h2 className="text-3xl font-bold text-center text-orange-400 mb-12">CAREER TRAJECTORY</h2>

      <div className="space-y-8">
        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex items-center ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
          >
            <div className="bg-black/50 backdrop-blur-sm border border-blue-400/30 p-6 rounded-lg max-w-md">
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold text-orange-400 mr-4">{item.year}</span>
                <div className="h-px bg-gradient-to-r from-orange-400 to-blue-400 flex-1" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-blue-300 font-semibold mb-2">{item.company}</p>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
