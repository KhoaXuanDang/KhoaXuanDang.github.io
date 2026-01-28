import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award, BookOpen } from 'lucide-react'

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

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

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-code-pattern"></div>
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
              <span className="font-mono text-yellow-400 text-sm">&lt;education&gt;</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-100 mb-2 font-mono">
              Academic Credentials
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-gray-600">// </span>
              Formal education and coursework
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="space-y-6 mb-12"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="terminal-window group hover:border-yellow-500/50 transition-all duration-300"
              >
                <div className="terminal-header">
                  <div className="terminal-dot bg-red-500"></div>
                  <div className="terminal-dot bg-yellow-500"></div>
                  <div className="terminal-dot bg-emerald-500"></div>
                  <GraduationCap className="ml-auto text-yellow-400" size={16} />
                </div>

                <div className="p-6 sm:p-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <div className="mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold font-mono text-yellow-400 mb-2">
                          $ cd {edu.school.toLowerCase().replace(/\s+/g, '-')}
                        </h3>
                        <p className="text-lg text-cyan-400 font-mono mt-1">
                          {edu.degree}
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 text-sm text-gray-400 font-mono mb-4">
                        <p>{edu.location}</p>
                        <span className="hidden sm:inline text-gray-600">|</span>
                        <p>{edu.period}</p>
                      </div>
                      <div className="flex flex-wrap items-center gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded font-mono text-sm">
                          <Award size={14} />
                          <span>GPA: {edu.gpa}</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-500/10 border border-purple-500/30 text-purple-400 rounded font-mono text-sm">
                          <Award size={14} />
                          <span>{edu.honors}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="terminal-window"
          >
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-emerald-500"></div>
              <BookOpen className="ml-auto text-cyan-400" size={16} />
            </div>

            <div className="p-6 sm:p-8">
              <div className="mb-4">
                <h3 className="text-xl font-bold font-mono text-cyan-400 mb-2">
                  <span className="text-gray-500">const </span>
                  relevantCourses
                  <span className="text-gray-500"> = [</span>
                </h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ml-4">
                {relevantCourses.map((course, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2 px-3 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded text-gray-300 font-mono text-xs hover:bg-cyan-500/20 transition-colors"
                  >
                    <span className="text-cyan-400 flex-shrink-0">✓</span>
                    <span>"{course}"{index < relevantCourses.length - 1 && ','}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4">
                <span className="text-gray-500 font-mono">];</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <span className="font-mono text-yellow-400 text-sm">&lt;/education&gt;</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
