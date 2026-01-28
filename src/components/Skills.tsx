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
      skills: ['Python', 'C#', 'Java', 'JavaScript/TypeScript', 'C/C++', 'SQL'],
    },
    {
      icon: Layers,
      title: 'Frontend',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML/CSS'],
    },
    {
      icon: Database,
      title: 'Backend & Frameworks',
      skills: ['.NET', 'Spring Boot', 'FastAPI', 'Django', 'Flask', 'Node.js'],
    },
    {
      icon: Database,
      title: 'Databases',
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Technical Skills
          </h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <category.icon className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
