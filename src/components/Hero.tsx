import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, Terminal, Code2, ExternalLink } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const profilePhoto = "/profile-photo.jpg"
  const [text, setText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  
  const fullText = "const developer = new SoftwareEngineer();"
  
  useEffect(() => {
    let index = 0
    const typingInterval = setInterval(() => {
      if (index < fullText.length) {
        setText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(typingInterval)
      }
    }, 100)
    
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)
    
    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Matrix rain effect */}
        <div className="absolute inset-0 opacity-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-emerald-500 font-mono text-xs"
              style={{
                left: `${i * 5}%`,
                top: '-10%',
              }}
              animate={{
                y: ['0vh', '110vh'],
              }}
              transition={{
                duration: 10 + Math.random() * 10,
                repeat: Infinity,
                ease: 'linear',
                delay: Math.random() * 5,
              }}
            >
              {Array.from({ length: 20 }, () => 
                Math.random() > 0.5 ? '1' : '0'
              ).join('')}
            </motion.div>
          ))}
        </div>

        {/* Floating code symbols */}
        {['{', '}', '<', '>', '/', '(', ')', ';', '=', '+'].map((symbol, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl font-mono text-emerald-500/10"
            style={{
              left: `${10 + i * 10}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {symbol}
          </motion.div>
        ))}

        {/* Scanline effect */}
        <motion.div
          className="absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent"
          animate={{
            y: ['0%', '100%'],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Terminal window */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="terminal-window mb-8"
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-emerald-500"></div>
              <span className="text-gray-400 text-xs ml-2 font-mono">~/portfolio</span>
            </div>
            <div className="p-6 font-mono text-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-emerald-400">→</span>
                <span className="text-gray-400">whoami</span>
              </div>
              <div className="text-cyan-400 mb-4">
                {text}
                {showCursor && <span className="text-emerald-400">▊</span>}
              </div>
            </div>
          </motion.div>

          {/* Profile photo with code frame */}
          {profilePhoto && (
            <motion.div
              className="mb-8 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="relative">
                {/* Glowing border effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-cyan-500 to-blue-500 rounded-full blur-xl opacity-50 animate-pulse-slow"></div>
                
                {/* Corner brackets */}
                <div className="absolute -top-2 -left-2 text-emerald-400 text-3xl font-mono">&lt;</div>
                <div className="absolute -top-2 -right-2 text-cyan-400 text-3xl font-mono">/&gt;</div>
                <div className="absolute -bottom-2 -left-2 text-blue-400 text-3xl font-mono">{'{'}</div>
                <div className="absolute -bottom-2 -right-2 text-purple-400 text-3xl font-mono">{'}'}</div>
                
                <img
                  src={profilePhoto}
                  alt="Khoa Xuan Dang"
                  className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover border-4 border-emerald-500/50 shadow-2xl"
                />
              </div>
            </motion.div>
          )}

          {/* Main content */}
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                <Terminal className="text-emerald-400" size={16} />
                <span className="text-emerald-400 text-sm font-mono">Full-Stack Developer</span>
              </div>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-gray-700 dark:text-gray-300">Hi, I'm </span>
              <span className="font-mono bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                &lt;Khoa Dang /&gt;
              </span>
            </motion.h1>

            <motion.div
              className="mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-400 font-mono mb-2">
                <span className="text-syntax-keyword">class</span>{' '}
                <span className="text-syntax-function">SoftwareEngineer</span>{' '}
                <span className="text-gray-500">{'{'}</span>
              </p>
              <p className="text-lg sm:text-xl text-gray-500 ml-8 font-mono">
                <span className="text-syntax-variable">skills</span>
                <span className="text-gray-400">:</span>{' '}
                <span className="text-syntax-string">["React", "Python", ".NET", "AWS", "AI"]</span>
              </p>
              <p className="text-xl sm:text-2xl lg:text-3xl text-gray-500 font-mono">
                <span className="text-gray-500">{'}'}</span>
              </p>
            </motion.div>

            <motion.p
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <span className="text-gray-500 dark:text-gray-600 font-mono">// </span>
              Building scalable solutions with modern tech.
              <br />
              <span className="text-gray-500 dark:text-gray-600 font-mono">// </span>
              Passionate about Cloud, AI & Full-Stack Development.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              <a
                href="#contact"
                className="group px-8 py-3 bg-emerald-500 text-black rounded-lg font-mono font-semibold hover:bg-emerald-400 transition-all duration-300 flex items-center gap-2 relative overflow-hidden glow-button"
              >
                <Terminal size={18} />
                <span>./contact</span>
                <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="px-8 py-3 border-2 border-emerald-500/50 text-emerald-400 rounded-lg font-mono font-semibold hover:bg-emerald-500/10 transition-all duration-300 flex items-center gap-2"
              >
                <Download size={18} />
                <span>resume.pdf</span>
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
            >
              <a
                href="https://github.com/KhoaXuanDang"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-emerald-400 transition-colors relative"
                aria-label="GitHub"
              >
                <Github size={28} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  github
                </span>
              </a>
              <a
                href="https://linkedin.com/in/khoa-dang-ba97b922b"
                target="_blank"
                rel="noopener noreferrer"
                className="group text-gray-400 hover:text-cyan-400 transition-colors relative"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  linkedin
                </span>
              </a>
              <a
                href="mailto:dxkhoa02@gmail.com"
                className="group text-gray-400 hover:text-blue-400 transition-colors relative"
                aria-label="Email"
              >
                <Mail size={28} />
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  email
                </span>
              </a>
            </motion.div>

            {/* Code decoration */}
            <motion.div
              className="mt-12 font-mono text-sm text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6 }}
            >
              <Code2 className="inline-block mr-2" size={16} />
              <span>console.log("Let's build something amazing!");</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
