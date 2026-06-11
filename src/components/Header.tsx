import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon, Sparkles } from 'lucide-react'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const Header = ({ darkMode, setDarkMode }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const ThemeToggle = ({ className = '' }: { className?: string }) => (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className={`grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-ink-soft transition-all duration-300 ease-smooth hover:border-primary-300 hover:text-primary-600 dark:border-white/15 dark:text-slate-200 dark:hover:border-primary-400/60 dark:hover:text-primary-300 ${className}`}
      aria-label="Toggle color theme"
    >
      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth ${
        scrolled ? 'glass border-b border-slate-100 shadow-soft dark:border-white/10' : 'border-b border-transparent'
      }`}
    >
      <nav className="container-px">
        <div className="flex h-[4.5rem] items-center justify-between py-3">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-amethyst-cta text-white shadow-glow transition-transform duration-300 ease-smooth group-hover:scale-105">
              <Sparkles size={18} />
            </span>
            <span className="font-display text-lg font-extrabold text-ink dark:text-white">
              Khoa<span className="text-primary-600 dark:text-primary-400">Dang</span>
            </span>
          </a>

          {/* Centered nav */}
          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-medium text-ink-soft transition-all duration-300 ease-smooth hover:bg-primary-50 hover:text-primary-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right cluster */}
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle />
            <a href="#contact" className="btn-primary px-5 py-2.5 text-sm">
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile cluster */}
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-ink dark:border-white/15 dark:text-slate-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
              className="overflow-hidden lg:hidden"
            >
              <div className="flex flex-col gap-1 pb-4 pt-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="rounded-2xl px-4 py-2.5 text-base font-medium text-ink-soft transition-colors hover:bg-primary-50 hover:text-primary-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary mt-2 px-5 py-3 text-sm"
                >
                  Let&apos;s Talk
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}

export default Header
