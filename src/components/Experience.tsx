import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Briefcase, MapPin, Calendar, Building2 } from 'lucide-react'

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
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Work Experience
          </h2>

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
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="flex items-start gap-4 mb-4 sm:mb-0">
                    {/* Company Logo */}
                    {exp.logo ? (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-12 h-12 sm:w-16 sm:h-16 object-contain rounded-lg bg-white p-2 shadow-md"
                      />
                    ) : (
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center shadow-md">
                        <Building2 className="text-white" size={24} />
                      </div>
                    )}

                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold mb-2">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Technologies:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.split(', ').map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-start gap-2 text-gray-700 dark:text-gray-300"
                    >
                      <span className="text-blue-600 dark:text-blue-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
