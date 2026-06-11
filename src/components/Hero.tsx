import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Download, ArrowUpRight, Sparkles } from 'lucide-react'
import { DoodleArrow, DoodleSparkle } from './Doodle'

const EASE = [0.4, 0, 0.2, 1] as const

const Hero = () => {
  const stack = ['React', 'Python', '.NET', 'AWS', 'AI']

  const socials = [
    { icon: Github, href: 'https://github.com/KhoaXuanDang', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/in/khoa-dang-ba97b922b', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:dxkhoa02@gmail.com', label: 'Email' },
  ]

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-lavender-tint pt-32 pb-20 dark:bg-[#0d0a1a] sm:pt-36 lg:pt-40 lg:pb-28"
    >
      {/* Soft gradient blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-primary-200/50 blur-3xl dark:bg-primary-700/20" />
        <div className="absolute -right-20 top-40 h-80 w-80 rounded-full bg-cream-200/60 blur-3xl dark:bg-primary-500/10" />
      </div>

      <div className="container-px relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Left — copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
            >
              <span className="eyebrow">
                <Sparkles size={15} />
                Full-Stack Developer
              </span>
            </motion.div>

            <motion.h1
              className="mt-6 font-display text-5xl font-extrabold leading-[1.05] text-ink dark:text-white sm:text-6xl lg:text-7xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            >
              Hi, I&apos;m <span className="text-gradient">Khoa Dang</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft dark:text-slate-300"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
            >
              Building scalable solutions with modern tech. Passionate about Cloud,
              AI &amp; Full-Stack Development.
            </motion.p>

            <motion.div
              className="mt-7 flex flex-wrap items-center gap-2.5"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
            >
              {stack.map((item) => (
                <span key={item} className="tag">{item}</span>
              ))}
            </motion.div>

            <motion.div
              className="mt-9 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: EASE }}
            >
              <a href="#contact" className="btn-primary px-7 py-3.5 text-base">
                Get in touch
                <ArrowUpRight size={18} />
              </a>
              <a href="/resume.pdf" download className="btn-outline px-7 py-3.5 text-base">
                <Download size={18} />
                Download Resume
              </a>
            </motion.div>

            <motion.div
              className="mt-9 flex items-center gap-3"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            >
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white text-ink-soft transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 hover:shadow-soft dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-primary-400/60 dark:hover:text-primary-300"
                >
                  <Icon size={19} />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right — portrait cutout with handwritten decorators */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.25, ease: EASE }}
          >
            <div className="relative mx-auto h-[360px] w-full max-w-md sm:h-[440px] lg:h-[480px]">
              {/* Soft gradient halo behind the cutout */}
              <div className="absolute left-1/2 top-1/2 -z-0 h-72 w-72 -translate-x-1/2 -translate-y-1/2 animate-pulse-slow rounded-full bg-amethyst-cta opacity-25 blur-3xl sm:h-80 sm:w-80" />

              {/* Portrait — transparent cutout (profile-photo.png); falls back to the existing photo */}
              <img
                src="/profile-photo.png"
                onError={(e) => {
                  const img = e.currentTarget
                  if (!img.dataset.fallback) {
                    img.dataset.fallback = 'true'
                    img.src = '/profile-photo.jpg'
                    img.classList.add('rounded-[2rem]', 'object-cover')
                    img.classList.remove('object-contain')
                  }
                }}
                alt="Khoa Xuan Dang"
                className="relative z-10 mx-auto h-full w-full object-contain drop-shadow-2xl"
              />

              {/* Decorators (desktop only to avoid overlap on small screens) */}
              <div className="pointer-events-none absolute inset-0 z-20 hidden font-bold text-ink dark:text-slate-100 lg:block">
                <DoodleSparkle className="absolute left-2 top-1 text-primary-500" size={24} />
                <DoodleSparkle className="absolute right-3 bottom-12 text-cream-400" size={15} />

                {/* Call me Khoa */}
                <div className="absolute left-1 top-2 -rotate-6">
                  <span className="font-hand text-[26px] leading-none">Call me Khoa</span>
                  <DoodleArrow variant="down-right" className="ml-10 mt-1 h-10 w-12 text-primary-500" />
                </div>

                {/* Cloud & AI enthusiast */}
                <div className="absolute right-2 top-12 flex flex-col items-end -rotate-2">
                  <span className="font-hand text-[26px] leading-tight text-right">
                    Cloud &amp; AI<br />enthusiast
                  </span>
                  <DoodleArrow variant="down-left" className="mr-2 mt-1 h-10 w-12 text-primary-500" />
                </div>

                {/* 1+ years exp */}
                <div className="absolute bottom-14 left-1 flex items-center gap-1 -rotate-3">
                  <span className="font-hand text-[26px] leading-none">1+ years exp</span>
                  <DoodleArrow variant="right" className="h-9 w-11 text-primary-500" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
