import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code2, Zap, Trophy } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Optional: Add your profile photo here
  const profilePhoto = null // Replace with: "/profile-photo.jpg" when you add your image to public/

  const stats = [
    { icon: Trophy, label: 'GPA', value: '3.893', color: 'emerald' },
    { icon: Code2, label: 'Experience', value: '1+ Years', color: 'cyan' },
    { icon: Zap, label: 'APIs Built', value: '50+', color: 'purple' },
  ]

  const getStatColor = (color: string) => {
    const colors: Record<string, string> = {
      emerald: 'from-emerald-500 to-emerald-600',
      cyan: 'from-cyan-500 to-cyan-600',
      purple: 'from-purple-500 to-purple-600',
    }
    return colors[color] || colors.emerald
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #00ff00 0px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, #00ff00 0px, transparent 1px, transparent 40px)'
        }}></div>
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
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
              <span className="font-mono text-cyan-400 text-sm">&lt;about&gt;</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-100 mb-2 font-mono">
              whoami
            </h2>
            <p className="text-gray-400 font-mono text-sm">
              <span className="text-gray-600">// </span>
              Background, skills, and what drives me
            </p>
          </div>

          <div className="flex flex-col gap-8">
            {/* Profile Photo (Optional) */}
            {profilePhoto && (
              <motion.div
                className="flex justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50 animate-pulse-slow"></div>
                  <div className="relative">
                    {/* Corner brackets */}
                    <div className="absolute -top-3 -left-3 text-emerald-400 text-2xl font-mono">&lt;</div>
                    <div className="absolute -top-3 -right-3 text-cyan-400 text-2xl font-mono">/&gt;</div>
                    <div className="absolute -bottom-3 -left-3 text-purple-400 text-2xl font-mono">{'{'}</div>
                    <div className="absolute -bottom-3 -right-3 text-blue-400 text-2xl font-mono">{'}'}</div>
                    
                    <img
                      src={profilePhoto}
                      alt="Khoa Xuan Dang"
                      className="w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover border-4 border-emerald-500/30 shadow-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* About Text in Terminal Style */}
            <motion.div
              className="terminal-window"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
            >
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-emerald-500"></div>
                <span className="text-gray-400 text-xs ml-2 font-mono">~/about.md</span>
              </div>
              <div className="p-6 space-y-4 text-gray-300 font-mono text-sm leading-relaxed">
                <p>
                  <span className="text-emerald-400">$</span> <span className="text-gray-500">cat intro.txt</span>
                </p>
                <p className="ml-4 text-gray-400">
                  I'm a passionate Software Engineer pursuing my B.S. in Computer Science at the 
                  University of Cincinnati, with a strong foundation in full-stack development, 
                  cloud computing, and artificial intelligence.
                </p>

                <p className="mt-4">
                  <span className="text-emerald-400">$</span> <span className="text-gray-500">cat current_work.txt</span>
                </p>
                <p className="ml-4 text-gray-400">
                  Currently working as a Software Engineering Co-op at Matson Money, where I've 
                  designed and owned 50+ secure RESTful APIs supporting 500+ financial advisory firms 
                  and 2,000+ daily users. I specialize in building scalable, production-ready solutions 
                  using modern technologies like React, .NET, Python, and AWS.
                </p>

                <p className="mt-4">
                  <span className="text-emerald-400">$</span> <span className="text-gray-500">cat expertise.txt</span>
                </p>
                <p className="ml-4 text-gray-400">
                  My experience spans across multiple domains including building AI-powered RAG systems, 
                  architecting microservices with Spring Boot and CockroachDB, and implementing secure 
                  authentication workflows with Auth0. I'm particularly interested in leveraging AI and 
                  cloud technologies to solve complex business problems.
                </p>

                <p className="mt-4">
                  <span className="text-emerald-400">$</span> <span className="text-gray-500">cat achievements.txt</span>
                </p>
                <p className="ml-4 text-gray-400">
                  With a proven track record of reducing operational costs by $40K annually, improving 
                  processing times by 40%, and achieving 95% test coverage in mission-critical systems, 
                  I'm committed to delivering high-quality, impactful software solutions.
                </p>
              </div>
            </motion.div>

            {/* Stats Cards */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${getStatColor(stat.color)} rounded-lg blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                  <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg p-6 text-center">
                    <stat.icon className="mx-auto mb-3 text-emerald-400" size={32} />
                    <div className="text-3xl font-bold font-mono bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 text-sm font-mono">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
          >
            <span className="font-mono text-cyan-400 text-sm">&lt;/about&gt;</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
