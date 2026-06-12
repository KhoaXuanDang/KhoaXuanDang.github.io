import { motion } from 'framer-motion'
import { Briefcase, MapPin, Calendar, Check } from 'lucide-react'
import Reveal from './Reveal'

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

const EASE = [0.4, 0, 0.2, 1] as const

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-24 dark:bg-[#0a0f1d]">
      <div className="container-px">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">Experience</span>
          <h2 className="mt-5 font-display text-4xl font-extrabold text-ink dark:text-white sm:text-5xl">
            Work History
          </h2>
          <p className="mt-4 text-lg text-ink-soft dark:text-slate-300">
            Professional experience and achievements
          </p>
        </Reveal>

        <div className="relative mx-auto max-w-4xl">
          {/* Timeline rail */}
          <div className="absolute left-[26px] top-2 bottom-2 hidden w-px bg-gradient-to-b from-primary-300 via-primary-200 to-transparent dark:from-primary-500/50 dark:via-primary-500/20 sm:block" />

          <div className="space-y-8">
            {experiences.map((exp) => (
              <motion.div
                key={exp.company}
                className="relative sm:pl-20"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.5, delay: 0.05, ease: EASE }}
              >
                {/* Timeline node */}
                <span className="absolute left-0 top-6 hidden h-[54px] w-[54px] place-items-center rounded-2xl border border-slate-100 bg-white shadow-soft dark:border-white/10 dark:bg-white/5 sm:grid">
                  <img
                    src={exp.logo}
                    alt={`${exp.company} logo`}
                    className="h-9 w-9 rounded-lg object-contain"
                  />
                </span>

                <div className="card card-hover p-7 sm:p-8">
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="h-12 w-12 rounded-xl border border-slate-100 object-contain p-1 dark:border-white/10 sm:hidden"
                      />
                      <div>
                        <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                          {exp.role}
                        </h3>
                        <div className="mt-1 flex items-center gap-2 font-semibold text-primary-600 dark:text-primary-400">
                          <Briefcase size={16} />
                          {exp.company}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-muted dark:text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <MapPin size={15} className="text-primary-500" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Calendar size={15} className="text-primary-500" />
                      {exp.period}
                    </span>
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {exp.technologies.split(', ').map((tech) => (
                      <span key={tech} className="tag">{tech}</span>
                    ))}
                  </div>

                  <ul className="mt-6 space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm leading-relaxed text-ink-soft dark:text-slate-300">
                        <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/20 dark:text-primary-300">
                          <Check size={12} strokeWidth={3} />
                        </span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
