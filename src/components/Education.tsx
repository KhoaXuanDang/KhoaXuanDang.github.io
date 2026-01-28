import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { GraduationCap, Award } from 'lucide-react'

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
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            Education
          </h2>

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
                className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <GraduationCap className="text-blue-600 dark:text-blue-400" size={32} />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                          {edu.school}
                        </h3>
                        <p className="text-lg text-gray-700 dark:text-gray-300 mt-1">
                          {edu.degree}
                        </p>
                      </div>
                      <div className="mt-2 sm:mt-0 text-right">
                        <p className="text-gray-600 dark:text-gray-400">{edu.location}</p>
                        <p className="text-gray-600 dark:text-gray-400">{edu.period}</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 mt-4">
                      <div className="flex items-center gap-2 px-4 py-2 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full">
                        <Award size={18} />
                        <span className="font-semibold">GPA: {edu.gpa}</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full">
                        <Award size={18} />
                        <span className="font-semibold">{edu.honors}</span>
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
            className="bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
              Relevant Coursework
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {relevantCourses.map((course, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-700 dark:text-gray-300"
                >
                  <span className="text-blue-600 dark:text-blue-400">✓</span>
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
