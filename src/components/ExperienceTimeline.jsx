import { motion } from 'framer-motion';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { experiences } from '@/data/portfolio';

const ExperienceTimeline = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Experience Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A timeline of my professional growth and key achievements
          </p>
        </motion.div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>
          
          {/* Timeline items */}
          {experiences.map((experience, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={experience.id}
                className={`relative mb-12 md:mb-16 ${isEven ? 'md:w-1/2 md:pr-8 md:text-right' : 'md:w-1/2 md:pl-8 md:ml-auto'}`}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={sectionVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                {/* Timeline dot */}
                <motion.div 
                  className={`absolute w-8 h-8 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 shadow-lg z-10 ${
                    isEven 
                      ? 'left-4 md:left-auto md:right-[-16px] top-6' 
                      : 'left-4 md:left-[-16px] top-6'
                  }`}
                  initial={{ scale: 0 }}
                  animate={sectionVisible ? { scale: 1 } : { scale: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                />
                
                {/* Content */}
                <div className="ml-16 md:ml-0">
                  <motion.div 
                    className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700"
                    whileHover={{ scale: 1.02, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {experience.period}
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-gray-100">
                      {experience.title}
                    </h3>
                    <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-3">
                      {experience.company}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {experience.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 ${isEven ? 'md:justify-end' : ''}`}>
                      {experience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;