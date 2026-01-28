import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, MapPin, Calendar, Building2, Terminal } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const experiences = [
    {
      company: 'Matson Money',
      role: 'Software Engineering Co-op',
      location: 'Mason, OH / Phoenix, AZ',
      period: '01/2026 – Present, 03/2025 – 08/2025',
      technologies: 'Azure, React.js, C#, Microsoft SQL Server, .NET, Docusign, Auth0, Sandbox, Salesforce',
      logo: '/matson_money_logo.jpg',
      achievements: [
        'Designed and owned 50+ secure RESTful APIs supporting 500+ financial advisory firms and 2,000+ daily users, integrating Salesforce, SQL Server, and React portals',
        'Built authentication-aware workflows using Auth0, enforcing secure access to sensitive financial and client data across internal and external systems',
        'Collaborated with senior engineers to replace 50+ Jitterbit-based integrations with in-house services, eliminating third-party dependency and saving ~$40K annually',
        'Delivered a fillable forms platform integrated with DocuSign, reducing manual processing time by ~40% and improving auditability',
        'Migrated business-critical automation from PowerShell scripts into a self-service ASP.NET Core MVC module, reducing turnaround time from ~7 days to 1–2 hours',
        'Improved system reliability through 100+ unit and integration tests, contributing to safer releases and long-term maintainability',
        'Designed a config-driven hierarchical category system, eliminating 100% of recurring developer tickets for UI taxonomy changes',
      ],
    },
    {
      company: 'Picon Technology Co., Ltd',
      role: 'Software Engineering Intern',
      location: 'Da Nang, Vietnam',
      period: '05/2024 – 09/2024',
      technologies: 'FastAPI, PostgreSQL, LangChain, RAG, React, Supabase, Ragas, Slack API, PG Vector database',
      logo: '/picon_technology_co_ltd_logo.jpg',
      achievements: [
        'Developed a Retrieval-Augmented Generation (RAG) AI assistant to improve internal policy inquiry accuracy and response speed',
        'Improved document retrieval accuracy using LangChain similarity search with metadata pre-filtering, achieving ~89% relevance',
        'Designed prompt chaining strategies for RAG, reaching ~85% response consistency and ~93% faithfulness (Ragas)',
        'Built evaluation pipelines using Ragas metrics and LangSmith, monitoring relevance, faithfulness, and latency across the full AI lifecycle',
        'Investigated multi-agent AI architectures to improve response accuracy, operational efficiency, and reduce human intervention',
        'Containerized services and deployed via Kubernetes-based CI/CD, improving deployment reliability and system availability',
      ],
    },
    {
      company: 'Sharedi',
      role: 'Software Engineering Intern (Part-time)',
      location: 'Mountain View, CA',
      period: '05/2024 – 12/2024',
      technologies: 'Java Spring Boot, Cockroachdb, ReactJS, NextJS, Docker, AJAX',
      logo: '/Sharedi_logo.jpg',
      achievements: [
        'Architected the core backend system using Java Spring Boot and CockroachDB, designing RESTful APIs for 5 mission-critical services (mentor profiles, bookings, availability, payments, Google Calendar sync) powering end-to-end mentor discovery and scheduling',
        'Improved backend reliability and regression safety by implementing mock-based unit tests, DB sanity checks, and CI validation, achieving 95% test coverage and preventing multiple pre-production critical failures',
      ],
    },
    {
      company: 'Hybrid Technologies Co., Ltd',
      role: 'Software Engineering Intern',
      location: 'Da Nang, Vietnam',
      period: '06/2023 – 07/2023',
      technologies: 'Django, AWS, PostgreSQL',
      logo: '/hybrid_technologies_co_ltd_logo.jpg',
      achievements: [
        'Developed a robust eCommerce platform using Django, enhancing user experiences and streamlining transaction processes.',
        'Implemented key features including a custom user model, category management, dynamic carts, and post-order functionalities.',
        'Engineered a comprehensive product image gallery and a review/rating system to increase engagement and product visibility.',
        'Designed intuitive "My Account" features for effortless profile management and order tracking.',
        'Deployed the application on AWS Elastic Beanstalk with RDS PostgreSQL, ensuring both scalability and reliability.',
        'Configured a custom domain with AWS Route 53 and integrated SSL certificates for secure communication.',
      ],
    },
  ]

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-gray-50 dark:bg-gray-900">
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
              <span className="font-mono text-blue-400 text-sm">&lt;experience&gt;</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2 font-mono">
              git log --work-history
            </h2>
            <p className="text-gray-600 dark:text-gray-400 font-mono text-sm">
              <span className="text-gray-500 dark:text-gray-600">// </span>
              Professional experience and achievements
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-8"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="terminal-window group hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-emerald-500"></div>
                  <span className="text-gray-400 text-xs ml-2 font-mono">~/work/{exp.company.toLowerCase().replace(/\\s+/g, '-')}</span>
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                    <div className="flex items-start gap-4 mb-4 sm:mb-0">
                      {/* Company Logo */}
                      {exp.logo ? (
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white dark:bg-gray-900 p-2 border-2 border-gray-200 dark:border-emerald-500/30"
                        />
                      ) : (
                        <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-lg flex items-center justify-center border-2 border-gray-200 dark:border-emerald-500/30">
                          <Building2 className="text-white dark:text-black" size={24} />
                        </div>
                      )}

                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold font-mono text-emerald-400 mb-2">
                          $ {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-cyan-400 font-mono font-semibold mb-2">
                          <Briefcase size={16} />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-400 font-mono">
                    <div className="flex items-center gap-2">
                      <MapPin size={14} className="text-emerald-500" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar size={14} className="text-cyan-500" />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="text-sm font-mono text-gray-500 mb-2">
                      <span className="text-purple-400">const</span> <span className="text-cyan-400">technologies</span> <span className="text-gray-500">= [</span>
                    </div>
                    <div className="flex flex-wrap gap-2 ml-4">
                      {exp.technologies.split(', ').map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded font-mono text-xs"
                        >
                          "{tech}"{techIndex < exp.technologies.split(', ').length - 1 && ','}
                        </span>
                      ))}
                    </div>
                    <div className="text-sm font-mono text-gray-500 mt-2">
                      <span className="text-gray-500">];</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="text-sm font-mono text-gray-500 mb-2">
                      <span className="text-emerald-600 dark:text-emerald-400">// </span>
                      <span className="text-gray-600 dark:text-gray-400">Key achievements:</span>
                    </div>
                    {exp.achievements.map((achievement, achIndex) => (
                      <div
                        key={achIndex}
                        className="flex items-start gap-3 text-gray-700 dark:text-gray-300 text-sm"
                      >
                        <Terminal size={14} className="text-emerald-600 dark:text-emerald-400 mt-1 flex-shrink-0" />
                        <span className="font-mono">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 1 }}
          >
            <span className="font-mono text-blue-400 text-sm">&lt;/experience&gt;</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
