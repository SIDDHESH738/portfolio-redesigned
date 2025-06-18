"use client"

import { motion } from "framer-motion"
import { Calendar, MapPin, Award } from "lucide-react"

const experiences = [
  {
    title: "Tech Faculty",
    company: "CT",
    location: "Mumbai",
    period: "2024 - 2025",
    achievements: [
      "Teaching students about web development and digital marketing",
      "Helping students build their own websites and digital marketing campaigns",
      "Creating a learning environment for students to learn and grow",
    ],
  },
  {
    title: "Digital Marketing",
    company: "AcmeGrade",
    location: "Mumbai",
    period: "2024",
    achievements: [
      "Created digital marketing campaigns for clients",
      "Helped clients grow their businesses",
      "Created a learning environment for students to learn and grow",
    ],
  },
  {
    title: "Digital Marketing",
    company: "Corizo",
    location: "Delhi",
    period: "2023 - 2024",
    achievements: [
      "Architected scalable frontend solutions",
      "Implemented micro-frontend architecture",
      "Reduced bundle size by 35%",
    ],
  },
]

export default function ExperienceTimeline() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-blue-400" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.3 }}
            className="relative mb-12 ml-16"
          >
            {/* Timeline dot */}
            <div className="absolute -left-10 top-6 w-4 h-4 bg-orange-400 rounded-full border-4 border-black" />

            <div className="bg-black/50 backdrop-blur-sm border border-blue-400/30 rounded-lg p-6">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-orange-400">{exp.title}</h3>
                <div className="flex items-center text-blue-300 text-sm">
                  <Calendar size={16} className="mr-2" />
                  {exp.period}
                </div>
              </div>

              <div className="flex items-center text-white mb-4">
                <span className="font-semibold mr-4">{exp.company}</span>
                <div className="flex items-center text-gray-400 text-sm">
                  <MapPin size={16} className="mr-1" />
                  {exp.location}
                </div>
              </div>

              <div className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <div key={i} className="flex items-start">
                    <Award size={16} className="text-orange-400 mr-2 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 text-sm">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
