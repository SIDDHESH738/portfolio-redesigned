"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname, useRouter } from "next/navigation"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "HOME", path: "/" },
  { name: "ABOUT", path: "/about" },
  { name: "PROJECTS", path: "/projects" },
  { name: "EXPERIENCE", path: "/experience" },
  { name: "SKILLS", path: "/skills" },
  { name: "CONTACT", path: "/contact" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (path: string) => {
    setIsOpen(false)
    router.push(path)
  }

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-black/90 backdrop-blur-md" : "bg-black/50 backdrop-blur-sm"
        } border-b border-orange-400/30`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-orange-400 cursor-pointer relative group"
              onClick={() => handleNavigation("/")}
            >
              <span className="relative z-10">DEV SIDD</span>
              <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-orange-400"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <motion.button
                  key={item.path}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => handleNavigation(item.path)}
                  className="relative group"
                >
                  <span
                    className={`text-sm font-semibold tracking-wider transition-colors ${
                      pathname === item.path ? "text-orange-400" : "text-white group-hover:text-orange-400"
                    }`}
                  >
                    {item.name}
                  </span>
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-orange-400"
                    initial={{ width: pathname === item.path ? "100%" : 0 }}
                    whileHover={{ width: "100%" }}
                    animate={{ width: pathname === item.path ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="md:hidden text-white"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 bg-black/95 backdrop-blur-md border-b border-orange-400/30 md:hidden"
          >
            <div className="container mx-auto px-6 py-8">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleNavigation(item.path)}
                    className="relative group"
                  >
                    <span
                      className={`text-left text-lg font-semibold tracking-wider transition-colors ${
                        pathname === item.path ? "text-orange-400" : "text-white group-hover:text-orange-400"
                      }`}
                    >
                      {item.name}
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-orange-400"
                      initial={{ width: pathname === item.path ? "100%" : 0 }}
                      whileHover={{ width: "100%" }}
                      animate={{ width: pathname === item.path ? "100%" : 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
