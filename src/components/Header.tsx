import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Terminal } from 'lucide-react'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'home', href: '#home' },
    { name: 'about', href: '#about' },
    { name: 'skills', href: '#skills' },
    { name: 'experience', href: '#experience' },
    { name: 'projects', href: '#projects' },
    { name: 'education', href: '#education' },
    { name: 'contact', href: '#contact' },
  ]

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-white/95 dark:bg-gray-950/95 backdrop-blur-md border-gray-200 dark:border-emerald-500/20 shadow-lg dark:shadow-emerald-500/5'
          : 'bg-white/50 dark:bg-gray-950/50 border-gray-200 dark:border-emerald-500/10'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.a
            href="#home"
            className="flex items-center gap-2 text-xl font-mono font-bold text-emerald-600 dark:text-emerald-400"
            whileHover={{ scale: 1.05 }}
          >
            <Terminal size={20} className="text-emerald-600 dark:text-emerald-400" />
            <span className="text-gray-500 dark:text-gray-400">&lt;</span>
            KhoaDang
            <span className="text-gray-500 dark:text-gray-400">/&gt;</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group px-3 py-2 rounded text-sm font-mono text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all duration-200"
              >
                <span className="text-emerald-600 dark:text-emerald-500 mr-1">$</span>
                <span className="group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{item.name}</span>
              </a>
            ))}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="ml-4 px-3 py-1.5 rounded border border-emerald-600 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all duration-200"
              aria-label="Toggle dark mode"
            >
              [{darkMode ? 'Light' : 'Dark'}]
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded border border-emerald-600 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-mono text-xs hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-all mr-2"
              aria-label="Toggle dark mode"
            >
              [{darkMode ? 'L' : 'D'}]
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded border border-emerald-600 dark:border-emerald-500/30 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden pb-4 border-t border-gray-200 dark:border-emerald-500/20 mt-2 pt-4"
          >
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded text-base font-mono text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 transition-colors"
                >
                  <span className="text-emerald-600 dark:text-emerald-500 mr-2">$</span>
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}

export default Header
