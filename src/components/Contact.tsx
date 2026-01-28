import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Mail, Linkedin, Github, Send, CheckCircle, Terminal } from 'lucide-react'

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:dxkhoa02@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.name}%0D%0AEmail: ${formData.email}`
    window.location.href = mailtoLink
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 3000)
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'dxkhoa02@gmail.com',
      link: 'mailto:dxkhoa02@gmail.com',
      color: 'emerald',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'KhoaXuanDang',
      link: 'https://github.com/KhoaXuanDang',
      color: 'cyan',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'khoa-dang-ba97b922b',
      link: 'https://linkedin.com/in/khoa-dang-ba97b922b',
      color: 'blue',
    },
  ]

  const getContactColor = (color: string) => {
    const colors: Record<string, { border: string; text: string; hover: string }> = {
      emerald: { border: 'border-emerald-500/30', text: 'text-emerald-400', hover: 'hover:border-emerald-500/50 hover:bg-emerald-500/10' },
      cyan: { border: 'border-cyan-500/30', text: 'text-cyan-400', hover: 'hover:border-cyan-500/50 hover:bg-cyan-500/10' },
      blue: { border: 'border-blue-500/30', text: 'text-blue-400', hover: 'hover:border-blue-500/50 hover:bg-blue-500/10' },
    }
    return colors[color] || colors.emerald
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <motion.div
              className="inline-block mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.2 }}
            >
              <span className="font-mono text-pink-400 text-sm">&lt;contact&gt;</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-100 mb-2 font-mono">
              $ ./connect
            </h2>
            <p className="text-gray-400 font-mono text-sm mb-2">
              <span className="text-gray-600">// </span>
              Let's build something amazing together
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-emerald-500"></div>
                  <span className="text-gray-400 text-xs ml-2 font-mono">~/contact-info</span>
                </div>
                <div className="p-6 space-y-4">
                  {contactInfo.map((info, index) => {
                    const colorClasses = getContactColor(info.color)
                    return (
                      <motion.a
                        key={index}
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className={`flex items-center gap-4 p-4 border ${colorClasses.border} rounded ${colorClasses.hover} transition-all group`}
                        whileHover={{ scale: 1.02 }}
                      >
                        <div className={`p-2 ${colorClasses.border} border rounded`}>
                          <info.icon className={colorClasses.text} size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs text-gray-500 font-mono">
                            <span className="text-emerald-500">$</span> {info.label.toLowerCase()}
                          </div>
                          <div className={`font-mono text-sm ${colorClasses.text}`}>
                            {info.value}
                          </div>
                        </div>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              <div className="terminal-window border-purple-500/30">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-emerald-500"></div>
                  <Terminal className="ml-auto text-purple-400" size={14} />
                </div>
                <div className="p-6">
                  <h4 className="font-mono font-semibold text-lg mb-2 text-purple-400">
                    <span className="text-gray-500">const</span> status = <span className="text-emerald-400">"Open to Opportunities"</span>;
                  </h4>
                  <p className="text-gray-400 font-mono text-sm">
                    <span className="text-gray-600">// </span>
                    I'm currently seeking full-time Software Engineering positions starting in 2026.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="terminal-window">
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-emerald-500"></div>
                  <span className="text-gray-400 text-xs ml-2 font-mono">~/send-message.sh</span>
                </div>
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-mono text-gray-400 mb-2"
                      >
                        <span className="text-cyan-400">$</span> Enter your name:
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded border border-emerald-500/30 bg-gray-900/50 text-gray-300 font-mono focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-600"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-mono text-gray-400 mb-2"
                      >
                        <span className="text-cyan-400">$</span> Enter your email:
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded border border-emerald-500/30 bg-gray-900/50 text-gray-300 font-mono focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-600"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-mono text-gray-400 mb-2"
                      >
                        <span className="text-cyan-400">$</span> Enter your message:
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded border border-emerald-500/30 bg-gray-900/50 text-gray-300 font-mono focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none placeholder-gray-600"
                        placeholder="Your message here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={submitted}
                      className={`w-full px-6 py-3 rounded font-mono font-semibold transition-all flex items-center justify-center gap-2 ${
                        submitted
                          ? 'bg-emerald-500 text-black'
                          : 'bg-emerald-500 text-black hover:bg-emerald-400 glow-button'
                      }`}
                    >
                      {submitted ? (
                        <>
                          <CheckCircle size={20} />
                          $ Message sent!
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          $ ./send
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <span className="font-mono text-pink-400 text-sm">&lt;/contact&gt;</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
