import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Github, Star, GitFork, ExternalLink, Search, X } from 'lucide-react'

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

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [repos, setRepos] = useState<Repository[]>([])
  const [filteredRepos, setFilteredRepos] = useState<Repository[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedLanguage, setSelectedLanguage] = useState<string>('All')

  // Featured project names (customize based on your best projects)
  const featuredProjects = [
    'mind-map-generator',
    'ai-assistant',
    'portfolio',
    'sharedi',
    'rag-chatbot',
  ]

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
        
        // Filter out forks and sort by stars, then by updated date
        const filtered = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => {
            // Prioritize featured projects
            const aFeatured = featuredProjects.some(name => 
              a.name.toLowerCase().includes(name.toLowerCase())
            )
            const bFeatured = featuredProjects.some(name => 
              b.name.toLowerCase().includes(name.toLowerCase())
            )
            
            if (aFeatured && !bFeatured) return -1
            if (!aFeatured && bFeatured) return 1
            
            // Then sort by stars
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count
            }
            
            // Finally by update date
            return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          })
          .slice(0, 12) // Show top 12 projects

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

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (repo) =>
          repo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          repo.description?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          repo.topics.some((topic) =>
            topic.toLowerCase().includes(searchTerm.toLowerCase())
          )
      )
    }

    // Filter by language
    if (selectedLanguage !== 'All') {
      filtered = filtered.filter((repo) => repo.language === selectedLanguage)
    }

    setFilteredRepos(filtered)
  }, [searchTerm, selectedLanguage, repos])

  const languages: string[] = ['All', ...Array.from(new Set(repos.map((r) => r.language).filter((l): l is string => l !== null)))]

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-code-pattern"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
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
              <span className="font-mono text-purple-400 text-sm">&lt;projects&gt;</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-100 mb-2 font-mono">
              git log --repos
            </h2>
            <p className="text-gray-400 font-mono text-sm mb-2">
              <span className="text-gray-600">// </span>
              Latest work and open-source contributions
            </p>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="font-mono text-purple-400 text-sm">&lt;/projects&gt;</span>
            </motion.div>
          </div>

          {/* Search and Filter */}
          <div className="mb-8 space-y-4">
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-emerald-500" size={20} />
              <input
                type="text"
                placeholder="$ search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-10 py-3 rounded-lg border border-emerald-500/30 bg-gray-900/50 text-gray-300 font-mono focus:ring-2 focus:ring-emerald-500 focus:border-transparent placeholder-gray-600"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-emerald-400"
                >
                  <X size={20} />
                </button>
              )}
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => setSelectedLanguage(lang)}
                  className={`px-4 py-2 rounded border font-mono text-sm transition-all ${
                    selectedLanguage === lang
                      ? 'bg-emerald-500 text-black border-emerald-500'
                      : 'bg-gray-900/50 border-emerald-500/30 text-gray-400 hover:border-emerald-500/50 hover:bg-emerald-500/10'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-12">
              <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
              <p className="mt-4 text-gray-400 font-mono">
                <span className="text-emerald-400">$</span> loading projects...
              </p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-12 font-mono">
              <p className="text-red-400">Error: {error}</p>
              <p className="text-gray-600 mt-2">// Failed to fetch repositories</p>
            </div>
          )}

          {/* Projects Grid */}
          {!loading && !error && (
            <>
              {filteredRepos.length === 0 ? (
                <div className="text-center py-12 text-gray-600 dark:text-gray-400">
                  <p>No projects found matching your criteria.</p>
                </div>
              ) : (
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate={inView ? 'visible' : 'hidden'}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredRepos.map((repo) => (
                    <motion.div
                      key={repo.id}
                      variants={itemVariants}
                      className="terminal-window group hover:border-emerald-500/50 transition-all duration-300"
                    >
                      <div className="terminal-header">
                        <div className="terminal-dot bg-red-500"></div>
                        <div className="terminal-dot bg-yellow-500"></div>
                        <div className="terminal-dot bg-emerald-500"></div>
                        <Github size={14} className="ml-auto text-emerald-400" />
                      </div>

                      <div className="p-5 flex flex-col h-full">
                        <div className="mb-3">
                          <h3 className="font-mono font-bold text-lg text-emerald-400 truncate mb-2">
                            $ git clone {repo.name}
                          </h3>
                          <p className="text-gray-400 text-sm flex-grow line-clamp-3 font-mono">
                            <span className="text-gray-600">// </span>
                            {repo.description || 'No description available'}
                          </p>
                        </div>

                        {repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-2 mb-4">
                            {repo.topics.slice(0, 3).map((topic) => (
                              <span
                                key={topic}
                                className="px-2 py-0.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded font-mono text-xs"
                              >
                                #{topic}
                              </span>
                            ))}
                          </div>
                        )}

                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3 font-mono">
                          {repo.language && (
                            <span className="flex items-center gap-1">
                              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                              {repo.language}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Star size={14} className="text-yellow-500" />
                            {repo.stargazers_count}
                          </span>
                          <span className="flex items-center gap-1">
                            <GitFork size={14} className="text-cyan-500" />
                            {repo.forks_count}
                          </span>
                        </div>

                        <div className="text-xs text-gray-600 mb-4 font-mono">
                          <span className="text-emerald-500">→</span> Updated {formatDate(repo.pushed_at)}
                        </div>

                        <div className="flex gap-2 mt-auto">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 px-3 py-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded hover:bg-emerald-500/20 transition-colors text-center text-xs font-mono font-semibold flex items-center justify-center gap-2"
                          >
                            <Github size={14} />
                            View Code
                          </a>
                          {repo.homepage && (
                            <a
                              href={repo.homepage}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="px-3 py-2 border border-cyan-500/30 text-cyan-400 rounded hover:bg-cyan-500/10 transition-colors text-center text-xs font-mono flex items-center justify-center"
                            >
                              <ExternalLink size={14} />
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              <div className="text-center mt-12">
                <a
                  href="https://github.com/KhoaXuanDang"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500 text-black rounded-lg hover:bg-emerald-400 transition-colors font-mono font-semibold glow-button"
                >
                  <Github size={20} />
                  $ git clone --all
                  <ExternalLink size={16} />
                </a>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
