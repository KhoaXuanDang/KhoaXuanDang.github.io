import { GraduationCap, Award, BookOpen, Check } from 'lucide-react'
import Reveal from './Reveal'

const education = [
  {
    school: 'University of Cincinnati',
    degree: 'B.S. in Computer Science',
    location: 'Cincinnati, OH',
    period: 'Expected 05/2026',
    gpa: '3.89',
    honors: "Dean's Lists",
  },
  {
    school: 'Bellevue College',
    degree: 'A.S. in Computer Science',
    location: 'Bellevue, WA',
    period: '12/2022',
    gpa: '3.85',
    honors: "Dean's Lists",
  },
]

const relevantCourses = [
  'Object Oriented Programming',
  'Artificial Intelligence',
  'Data Structures and Algorithms',
  'Database Design',
  'Networking and Security',
  'Operating Systems',
  'Cloud Computing',
  'Advanced Software Engineering',
]

const Education = () => {
  return (
    <section id="education" className="bg-white py-24 dark:bg-[#0a0f1d]">
      <div className="container-px">
        <Reveal className="mx-auto mb-14 max-w-2xl text-center">
          <span className="eyebrow">Education</span>
          <h2 className="mt-5 font-display text-4xl font-extrabold text-ink dark:text-white sm:text-5xl">
            Academic Credentials
          </h2>
          <p className="mt-4 text-lg text-ink-soft dark:text-slate-300">
            Formal education and coursework
          </p>
        </Reveal>

        <div className="mx-auto max-w-5xl">
          <div className="mb-6 grid gap-6 md:grid-cols-2">
            {education.map((edu, index) => (
              <Reveal key={edu.school} delay={index * 0.1}>
                <div className="card card-hover h-full p-8">
                  <span className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                    <GraduationCap size={24} />
                  </span>
                  <h3 className="font-display text-xl font-bold text-ink dark:text-white">
                    {edu.school}
                  </h3>
                  <p className="mt-1 font-semibold text-primary-600 dark:text-primary-400">
                    {edu.degree}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-sm text-ink-muted dark:text-slate-400">
                    <span>{edu.location}</span>
                    <span className="hidden sm:inline">·</span>
                    <span>{edu.period}</span>
                  </div>
                  <div className="mt-5 flex flex-wrap gap-3">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-primary-50 px-3 py-1.5 text-sm font-medium text-primary-700 dark:bg-primary-500/15 dark:text-primary-300">
                      <Award size={14} />
                      GPA: {edu.gpa}
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-100 px-3 py-1.5 text-sm font-medium text-cream-500 dark:bg-white/10 dark:text-slate-200">
                      <Award size={14} />
                      {edu.honors}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15}>
            <div className="card p-8">
              <div className="mb-6 flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-2xl bg-primary-50 text-primary-600 dark:bg-primary-500/15 dark:text-primary-300">
                  <BookOpen size={22} />
                </span>
                <h3 className="font-display text-lg font-bold text-ink dark:text-white">
                  Relevant Coursework
                </h3>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {relevantCourses.map((course) => (
                  <div
                    key={course}
                    className="flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 text-sm text-ink-soft transition-all duration-300 ease-smooth hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 dark:hover:border-primary-500/40 dark:hover:bg-primary-500/10"
                  >
                    <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-500/20 dark:text-primary-300">
                      <Check size={12} strokeWidth={3} />
                    </span>
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Education
