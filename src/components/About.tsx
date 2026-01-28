import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  // Optional: Add your profile photo here
  const profilePhoto = null // Replace with: "/profile-photo.jpg" when you add your image to public/

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start mb-8">
            {/* Profile Photo (Optional) */}
            {profilePhoto && (
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl blur-xl opacity-30"></div>
                  <img
                    src={profilePhoto}
                    alt="Khoa Xuan Dang"
                    className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-2xl object-cover shadow-xl border-4 border-white dark:border-gray-700"
                  />
                </div>
              </motion.div>
            )}

            {/* About Text */}
            <div className={`space-y-6 text-lg text-gray-700 dark:text-gray-300 ${profilePhoto ? '' : 'w-full'}`}>
            <p>
              I'm a passionate Software Engineer pursuing my B.S. in Computer Science at the 
              University of Cincinnati, with a strong foundation in full-stack development, 
              cloud computing, and artificial intelligence.
            </p>

            <p>
              Currently working as a Software Engineering Co-op at Matson Money, where I've 
              designed and owned 50+ secure RESTful APIs supporting 500+ financial advisory firms 
              and 2,000+ daily users. I specialize in building scalable, production-ready solutions 
              using modern technologies like React, .NET, Python, and AWS.
            </p>

            <p>
              My experience spans across multiple domains including building AI-powered RAG systems, 
              architecting microservices with Spring Boot and CockroachDB, and implementing secure 
              authentication workflows with Auth0. I'm particularly interested in leveraging AI and 
              cloud technologies to solve complex business problems.
            </p>

            <p>
              With a proven track record of reducing operational costs by $40K annually, improving 
              processing times by 40%, and achieving 95% test coverage in mission-critical systems, 
              I'm committed to delivering high-quality, impactful software solutions.
            </p>
          </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
