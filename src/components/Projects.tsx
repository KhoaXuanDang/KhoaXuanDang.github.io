import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Github, Star, GitFork, ExternalLink, Search, X, ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'

interface Repository {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  stargazers_count: number
  forks_count: number
  language: string | null
  topics: string[]
  updated_at: string
  pushed_at: string
  fork: boolean
}

const featuredProjects = ['mind-map-generator', 'ai-assistant', 'portfolio', 'sharedi', 'rag-chatbot']

const EASE = [0.4, 0, 0.2, 1] as const

const Projects = () => {
  const [repos, setRepos] = useState<Repository[]>([])
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All')

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          'https://api.github.com/users/KhoaXuanDang/repos?sort=updated&per_page=100'
        )

        if (!response.ok) {
          throw new Error('Failed to fetch repositories')
        }

        const data: Repository[] = await response.json()

        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => {
            const aFeatured = featuredProjects.some((name) =>
              a.name.toLowerCase().includes(name.toLowerCase())
            )
            const bFeatured = featuredProjects.some((name) =>
              b.name.toLowerCase().includes(name.toLowerCase())
            )

            if (aFeatured && !bFeatured) return -1
            if (!aFeatured && bFeatured) return 1

            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count
            }

            return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          })
          .slice(0, 12)

        setRepos(filtered)
        setFilteredRepos(filtered)
        setLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  useEffect(() => {
    let filtered = repos

    if (searchTerm) {
      filtered = filtered.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          repo.topics.some((topic) => topic.toLowerCase().includes(searchTerm.toLowerCase()))
      )
    }

    if (selectedLanguage !== 'All') {
      filtered = filtered.filter((repo) => repo.language === selectedLanguage)
    }

    setFilteredRepos(filtered)
  }, [searchTerm, selectedLanguage, repos])

  const languages: string[] = [
    'All',
    ...Array.from(new Set(repos.map((r) => r.language).filter((l): l is string => l !== null))),
  ]

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays < 30) {
      return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`
    } else if (diffDays < 365) {
      const months = Math.floor(diffDays / 30)
      return `${months} month${months > 1 ? 's' : ''} ago`
    } else {
      const years = Math.floor(diffDays / 365)
      return `${years} year${years > 1 ? 's' : ''} ago`
    }
  }

  return (
    <section id="projects" className="bg-lavender-50 py-24 dark:bg-[#100c20]">
      <div className="container-px">
        <Reveal className="mx-auto mb-12 max-w-2xl text-center">
          <span className="eyebrow">Projects</span>
          <h2 className="mt-5 font-display text-4xl font-extrabold text-ink dark:text-white sm:text-5xl">
            Latest Work
          </h2>
          <p className="mt-4 text-lg text-ink-soft dark:text-slate-300">
            Latest work and open-source contributions
          </p>
        </Reveal>

        {/* Search and filter */}
        <Reveal className="mb-10">
          <div className="mx-auto mb-6 max-w-md">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-ink-muted" size={19} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="field pl-12 pr-10"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-ink-muted transition-colors hover:text-primary-600"
                  aria-label="Clear search"
                >
                  <X size={18} />
                </button>
              )}
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {languages.map((lang) => (
              <button
                key={lang}
                onClick={() => setSelectedLanguage(lang)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-smooth ${
                  selectedLanguage === lang
                    ? 'bg-primary-600 text-white shadow-glow'
                    : 'border border-slate-200 bg-white text-ink-soft hover:border-primary-300 hover:text-primary-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-primary-400/60 dark:hover:text-primary-300'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </Reveal>

        {loading && (
          <div className="py-16 text-center">
            <div className="mx-auto h-11 w-11 animate-spin rounded-full border-[3px] border-primary-200 border-t-primary-600" />
            <p className="mt-4 text-ink-muted dark:text-slate-400">Loading projects...</p>
          </div>
        )}

        {error && (
          <div className="mx-auto max-w-md rounded-3xl border border-rose-200 bg-rose-50 px-6 py-10 text-center dark:border-rose-500/30 dark:bg-rose-500/10">
            <p className="font-semibold text-rose-600 dark:text-rose-400">Error: {error}</p>
            <p className="mt-1 text-sm text-ink-muted dark:text-slate-400">
              Failed to fetch repositories
            </p>
          </div>
        )}

        {!loading && !error && (
          <>
            {filteredRepos.length === 0 ? (
              <div className="py-16 text-center text-ink-muted dark:text-slate-400">
                No projects found matching your criteria.
              </div>
            ) : (
              <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                  {filteredRepos.map((repo) => (
                    <motion.div
                      key={repo.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="card card-hover flex flex-col p-6"
                    >
                      <div className="mb-3 flex items-center justify-between">
                        <span className="grid h-10 w-10 place-items-center rounded-xl bg-primary-50 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                          <Github size={20} />
                        </span>
                        {repo.language && (
                          <span className="flex items-center gap-1.5 text-xs font-medium text-ink-muted dark:text-slate-400">
                            <span className="h-2 w-2 rounded-full bg-primary-500" />
                            {repo.language}
                          </span>
                        )}
                      </div>

                      <h3 className="mb-2 break-words font-display text-lg font-bold text-ink dark:text-white">
                        {repo.name}
                      </h3>
                      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-ink-soft dark:text-slate-300">
                        {repo.description || 'No description available'}
                      </p>

                      {repo.topics.length > 0 && (
                        <div className="mb-4 flex flex-wrap gap-2">
                          {repo.topics.slice(0, 3).map((topic) => (
                            <span key={topic} className="tag text-xs">#{topic}</span>
                          ))}
                        </div>
                      )}

                      <div className="mb-4 flex items-center gap-4 text-sm text-ink-muted dark:text-slate-400">
                        <span className="flex items-center gap-1">
                          <Star size={15} className="text-amber-400" />
                          {repo.stargazers_count}
                        </span>
                        <span className="flex items-center gap-1">
                          <GitFork size={15} className="text-primary-400" />
                          {repo.forks_count}
                        </span>
                        <span className="ml-auto text-xs">Updated {formatDate(repo.pushed_at)}</span>
                      </div>

                      <div className="mt-auto flex gap-2 pt-2">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary flex-1 px-4 py-2.5 text-sm"
                        >
                          <Github size={16} />
                          View Code
                        </a>
                        {repo.homepage && (
                          <a
                            href={repo.homepage}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline px-3.5 py-2.5"
                            title="Live Demo"
                            aria-label="Live demo"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}

            <div className="mt-12 text-center">
              <a
                href="https://github.com/KhoaXuanDang"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-7 py-3.5 text-base"
              >
                <Github size={20} />
                View all on GitHub
                <ArrowUpRight size={18} />
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Projects
