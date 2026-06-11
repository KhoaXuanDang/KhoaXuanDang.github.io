import { useState } from 'react'
import { Mail, Linkedin, Github, Send, CheckCircle } from 'lucide-react'
import Reveal from './Reveal'

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'dxkhoa02@gmail.com',
    link: 'mailto:dxkhoa02@gmail.com',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'KhoaXuanDang',
    link: 'https://github.com/KhoaXuanDang',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'khoa-dang-ba97b922b',
    link: 'https://linkedin.com/in/khoa-dang-ba97b922b',
  },
]

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="bg-white py-24 dark:bg-[#0d0a1a]">
      <div className="container-px">
        <Reveal>
          <div className="overflow-hidden rounded-[2rem] bg-amethyst-banner p-8 shadow-soft dark:bg-white/[0.04] sm:p-12 lg:p-16">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="eyebrow">Contact</span>
              <h2 className="mt-5 font-display text-4xl font-extrabold text-ink dark:text-white sm:text-5xl">
                Let&apos;s build something amazing together
              </h2>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              {/* Info */}
              <div className="space-y-4">
                {contactInfo.map((info) => (
                  <a
                    key={info.label}
                    href={info.link}
                    target={info.link.startsWith('http') ? '_blank' : undefined}
                    rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="card card-hover flex items-center gap-4 p-5"
                  >
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                      <info.icon size={22} />
                    </span>
                    <div>
                      <div className="text-xs font-medium uppercase tracking-wide text-ink-muted dark:text-slate-400">
                        {info.label}
                      </div>
                      <div className="font-semibold text-ink dark:text-white">{info.value}</div>
                    </div>
                  </a>
                ))}

                <div className="card p-6">
                  <h4 className="font-display text-lg font-bold text-primary-600 dark:text-primary-400">
                    Open to Opportunities
                  </h4>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft dark:text-slate-300">
                    I&apos;m currently seeking full-time Software Engineering positions starting in
                    2026.
                  </p>
                </div>
              </div>

              {/* Form */}
              <div className="card p-7 sm:p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink-soft dark:text-slate-300">
                      Your name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="field"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink-soft dark:text-slate-300">
                      Your email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="field"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink-soft dark:text-slate-300">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="field resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitted}
                    className="btn-primary w-full px-6 py-3.5 text-base disabled:cursor-default"
                  >
                    {submitted ? (
                      <>
                        <CheckCircle size={20} />
                        Message sent!
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Contact
