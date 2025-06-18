"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, User, Mail, MessageSquare } from "lucide-react"

export default function HologramForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="space-y-8"
      >
        <div>
          <h2 className="text-3xl font-bold text-orange-400 mb-6">ESTABLISH CONNECTION</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Ready to collaborate on the next breakthrough project? Initialize communication protocol and let's create
            something extraordinary together.
          </p>
        </div>

        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-orange-400/20 rounded-lg flex items-center justify-center">
              <Mail className="text-orange-400" size={20} />
            </div>
            <div>
              <p className="text-white font-semibold">Email Protocol</p>
              <p className="text-blue-300">siddheshjangale78@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-blue-400/20 rounded-lg flex items-center justify-center">
              <MessageSquare className="text-blue-400" size={20} />
            </div>
            <div>
              <p className="text-white font-semibold">Response Time</p>
              <p className="text-blue-300">{"< 24 hours"}</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Hologram Form */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="bg-black/50 backdrop-blur-sm border-2 border-orange-400/30 rounded-lg p-8"
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-orange-400 font-semibold mb-2">
              <User size={16} className="inline mr-2" />
              IDENTITY
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black/70 border border-orange-400/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
              placeholder="Enter your designation..."
            />
          </div>

          <div>
            <label className="block text-orange-400 font-semibold mb-2">
              <Mail size={16} className="inline mr-2" />
              COMMUNICATION CHANNEL
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black/70 border border-orange-400/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors"
              placeholder="Enter transmission address..."
            />
          </div>

          <div>
            <label className="block text-orange-400 font-semibold mb-2">
              <MessageSquare size={16} className="inline mr-2" />
              MESSAGE PAYLOAD
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full bg-black/70 border border-orange-400/50 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-orange-400 focus:outline-none transition-colors resize-none"
              placeholder="Transmit your message..."
            />
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-orange-400 to-yellow-400 text-black font-bold py-4 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isSubmitting ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                className="w-5 h-5 border-2 border-black border-t-transparent rounded-full"
              />
            ) : (
              <>
                <Send size={20} />
                <span>TRANSMIT MESSAGE</span>
              </>
            )}
          </motion.button>
        </form>
      </motion.div>
    </div>
  )
}
