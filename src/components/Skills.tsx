import { motion } from 'framer-motion'
import { Code2, Database, Cloud, Cpu, Layers, Globe } from 'lucide-react'
import Reveal from './Reveal'

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
    skills: ['PostgreSQL', 'SQL Server', 'CockroachDB', 'Redis', 'Elasticsearch', 'Vector DB'],
  },
  {
    icon: Cloud,
    title: 'Cloud & DevOps',
    skills: ['AWS (Lambda, S3, API Gateway)', 'Azure', 'Docker', 'Kubernetes', 'Helm', 'CI/CD'],
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
    skills: ['Git', 'Auth0', 'Salesforce', 'DocuSign', 'Supabase', 'Slack API', 'Google Calendar API'],
  },
]

const EASE = [0.4, 0, 0.2, 1] as const

const Skills = () => {
  return (
    <section id="skills" className="bg-lavender-50 py-24 dark:bg-[#100c20]">
      <div className="container-px">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">Skills</span>
          <h2 className="mt-5 font-display text-4xl font-extrabold text-ink dark:text-white sm:text-5xl">
            Technical Arsenal
          </h2>
          <p className="mt-4 text-lg text-ink-soft dark:text-slate-300">
            Tools and technologies I work with
          </p>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="card card-hover p-7"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: EASE }}
            >
              <div className="mb-5 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                  <category.icon size={22} />
                </span>
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
