import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Layers,
  Globe,
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages',
      color: 'emerald',
      skills: ['Python', 'C#', 'Java', 'JavaScript/TypeScript', 'C/C++', 'SQL'],
    },
    {
      icon: Layers,
      title: 'Frontend',
      color: 'cyan',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      icon: Database,
      title: 'Backend & Frameworks',
      color: 'blue',
      skills: ['.NET', 'Spring Boot', 'FastAPI', 'Django', 'Flask', 'Node.js'],
    },
    {
      icon: Database,
      title: 'Databases',
      color: 'purple',
      skills: [
        'PostgreSQL',
        'SQL Server',
        'CockroachDB',
        'Redis',
        'Elasticsearch',
        'Vector DB',
      ],
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      color: 'yellow',
      skills: [
        'AWS (Lambda, S3, API Gateway)',
        'Azure',
        'Docker',
        'Kubernetes',
        'Helm',
        'CI/CD',
      ],
    },
    {
      icon: Cpu,
      title: 'AI & ML',
      color: 'pink',
      skills: [
        'LangChain',
        'LangSmith',
        'RAG (Retrieval-Augmented Generation)',
        'Large Language Models',
        'Multi-Agent Systems',
      ],
    },
    {
      icon: Globe,
      title: 'Tools & Platforms',
      color: 'orange',
      skills: [
        'Git',
        'Auth0',
        'Salesforce',
        'DocuSign',
        'Supabase',
        'Slack API',
        'Google Calendar API',
      ],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors: Record<string, { icon: string; iconDark: string; border: string; borderDark: string; hover: string; hoverDark: string; tag: string; tagDark: string }> = {
      emerald: { 
        icon: 'text-emerald-600', 
        iconDark: 'dark:text-emerald-400', 
        border: 'border-emerald-300', 
        borderDark: 'dark:border-emerald-500/30', 
        hover: 'hover:border-emerald-500', 
        hoverDark: 'dark:hover:border-emerald-500/50', 
        tag: 'bg-emerald-50 text-emerald-700 border-emerald-300', 
        tagDark: 'dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30' 
      },
      cyan: { 
        icon: 'text-cyan-600', 
        iconDark: 'dark:text-cyan-400', 
        border: 'border-cyan-300', 
        borderDark: 'dark:border-cyan-500/30', 
        hover: 'hover:border-cyan-500', 
        hoverDark: 'dark:hover:border-cyan-500/50', 
        tag: 'bg-cyan-50 text-cyan-700 border-cyan-300', 
        tagDark: 'dark:bg-cyan-500/10 dark:text-cyan-400 dark:border-cyan-500/30' 
      },
      blue: { 
        icon: 'text-blue-600', 
        iconDark: 'dark:text-blue-400', 
        border: 'border-blue-300', 
        borderDark: 'dark:border-blue-500/30', 
        hover: 'hover:border-blue-500', 
        hoverDark: 'dark:hover:border-blue-500/50', 
        tag: 'bg-blue-50 text-blue-700 border-blue-300', 
        tagDark: 'dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30' 
      },
      purple: { 
        icon: 'text-purple-600', 
        iconDark: 'dark:text-purple-400', 
        border: 'border-purple-300', 
        borderDark: 'dark:border-purple-500/30', 
        hover: 'hover:border-purple-500', 
        hoverDark: 'dark:hover:border-purple-500/50', 
        tag: 'bg-purple-50 text-purple-700 border-purple-300', 
        tagDark: 'dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30' 
      },
      yellow: { 
        icon: 'text-yellow-600', 
        iconDark: 'dark:text-yellow-400', 
        border: 'border-yellow-300', 
        borderDark: 'dark:border-yellow-500/30', 
        hover: 'hover:border-yellow-500', 
        hoverDark: 'dark:hover:border-yellow-500/50', 
        tag: 'bg-yellow-50 text-yellow-700 border-yellow-300', 
        tagDark: 'dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/30' 
      },
      pink: { 
        icon: 'text-pink-600', 
        iconDark: 'dark:text-pink-400', 
        border: 'border-pink-300', 
        borderDark: 'dark:border-pink-500/30', 
        hover: 'hover:border-pink-500', 
        hoverDark: 'dark:hover:border-pink-500/50', 
        tag: 'bg-pink-50 text-pink-700 border-pink-300', 
        tagDark: 'dark:bg-pink-500/10 dark:text-pink-400 dark:border-pink-500/30' 
      },
      orange: { 
        icon: 'text-orange-600', 
        iconDark: 'dark:text-orange-400', 
        border: 'border-orange-300', 
        borderDark: 'dark:border-orange-500/30', 
        hover: 'hover:border-orange-500', 
        hoverDark: 'dark:hover:border-orange-500/50', 
        tag: 'bg-orange-50 text-orange-700 border-orange-300', 
        tagDark: 'dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/30' 
      },
    }
    return colors[color] || colors.emerald
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
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
              <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm">&lt;skills&gt;</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-mono">
              Technical Arsenal
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
              <span className="text-gray-400 dark:text-gray-600 font-mono">// </span>
              Tools and technologies I work with
            </p>
            <motion.div
              className="mt-4"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
            >
              <span className="font-mono text-emerald-600 dark:text-emerald-400 text-sm">&lt;/skills&gt;</span>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => {
              const colorClasses = getColorClasses(category.color)
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`terminal-window group ${colorClasses.hover} ${colorClasses.hoverDark} transition-all duration-300`}
                >
                  <div className="terminal-header">
                    <div className="terminal-dot bg-red-500"></div>
                    <div className="terminal-dot bg-yellow-500"></div>
                    <div className="terminal-dot bg-emerald-500"></div>
                    <category.icon className={`ml-auto ${colorClasses.icon} ${colorClasses.iconDark}`} size={16} />
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className={`text-lg font-mono font-semibold ${colorClasses.icon} ${colorClasses.iconDark}`}>
                        <span className="text-gray-500">const </span>
                        {category.title.toLowerCase().replace(/\s+/g, '_')}
                        <span className="text-gray-500"> = [</span>
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-4">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className={`px-2.5 py-1 rounded border font-mono text-xs ${colorClasses.tag} ${colorClasses.tagDark} hover:scale-105 transition-transform cursor-default`}
                        >
                          "{skill}"
                          {skillIndex < category.skills.length - 1 && ','}
                        </span>
                      ))}
                    </div>
                    <div className="mt-4">
                      <span className="text-gray-500 font-mono text-sm">];</span>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
