import { Trophy, Code2, Zap } from 'lucide-react'
import Reveal from './Reveal'

const About = () => {
  const stats = [
    { icon: Trophy, label: 'GPA', value: '3.893' },
    { icon: Code2, label: 'Experience', value: '1+ Years' },
    { icon: Zap, label: 'APIs Built', value: '50+' },
  ]

  const paragraphs = [
    "I'm a passionate Software Engineer pursuing my B.S. in Computer Science at the University of Cincinnati, with a strong foundation in full-stack development, cloud computing, and artificial intelligence.",
    "Currently working as a Software Engineering Co-op at Matson Money, where I've designed and owned 50+ secure RESTful APIs supporting 500+ financial advisory firms and 2,000+ daily users. I specialize in building scalable, production-ready solutions using modern technologies like React, .NET, Python, and AWS.",
    "My experience spans multiple domains including building AI-powered RAG systems, architecting microservices with Spring Boot and CockroachDB, and implementing secure authentication workflows with Auth0. I'm particularly interested in leveraging AI and cloud technologies to solve complex business problems.",
    "With a proven track record of reducing operational costs by $40K annually, improving processing times by 40%, and achieving 95% test coverage in mission-critical systems, I'm committed to delivering high-quality, impactful software solutions.",
  ]

  return (
    <section id="about" className="bg-white py-24 dark:bg-[#0d0a1a]">
      <div className="container-px">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">About Me</span>
          <h2 className="mt-5 font-display text-4xl font-extrabold text-ink dark:text-white sm:text-5xl">
            Background, skills &amp; what drives me
          </h2>
        </Reveal>

        <div className="grid items-start gap-8 lg:grid-cols-12">
          {/* Story */}
          <Reveal className="lg:col-span-7" x={-30} y={0}>
            <div className="card p-8 sm:p-10">
              <div className="space-y-5">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed text-ink-soft dark:text-slate-300">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Stats */}
          <Reveal className="lg:col-span-5" x={30} y={0} delay={0.1}>
            <div className="grid gap-5 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div key={stat.label} className="card card-hover flex items-center gap-4 p-6">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                    <stat.icon size={24} />
                  </span>
                  <div>
                    <div className="font-display text-2xl font-extrabold text-ink dark:text-white">
                      {stat.value}
                    </div>
                    <div className="text-sm text-ink-muted dark:text-slate-400">{stat.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
