import { Github, Linkedin, Mail, Sparkles } from 'lucide-react'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const socials = [
  { icon: Github, href: 'https://github.com/KhoaXuanDang', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/khoa-dang-ba97b922b', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:dxkhoa02@gmail.com', label: 'Email' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-lavender-50 dark:bg-[#100c20]">
      <div className="container-px py-16">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#home" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-amethyst-cta text-white shadow-glow">
                <Sparkles size={18} />
              </span>
              <span className="font-display text-lg font-extrabold text-ink dark:text-white">
                Khoa<span className="text-primary-600 dark:text-primary-400">Dang</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink-soft dark:text-slate-400">
              Building scalable solutions with modern tech. Passionate about Cloud, AI &amp;
              Full-Stack Development.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-ink-soft transition-all duration-300 ease-smooth hover:-translate-y-0.5 hover:border-primary-300 hover:text-primary-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-primary-400/60 dark:hover:text-primary-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigate */}
          <div className="md:col-span-4">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-ink dark:text-white">
              Navigate
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-sm text-ink-soft transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="md:col-span-3">
            <h4 className="font-display text-sm font-bold uppercase tracking-wide text-ink dark:text-white">
              Get in touch
            </h4>
            <a
              href="mailto:dxkhoa02@gmail.com"
              className="mt-4 block text-sm text-ink-soft transition-colors hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-300"
            >
              dxkhoa02@gmail.com
            </a>
            <a href="#contact" className="btn-primary mt-4 px-5 py-2.5 text-sm">
              Let&apos;s Talk
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-200 pt-8 text-sm text-ink-muted dark:border-white/10 dark:text-slate-400 sm:flex-row">
          <p>© {currentYear} Khoa Xuan Dang. All rights reserved.</p>
          <p>Built with React + TypeScript + Tailwind CSS</p>
          <p>Designed and developed by Khoa Dang</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
