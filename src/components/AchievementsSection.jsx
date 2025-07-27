import { motion } from 'framer-motion';
import { Award, Trophy, Star, Target } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { personalInfo } from '@/data/portfolio';

const AchievementsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();

  const achievementIcons = [Trophy, Award, Star, Target];

  return (
    <section id="achievements" className="py-20 bg-white dark:bg-gray-900" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Achievements & Certifications
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Key milestones and recognition in my learning journey
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {personalInfo.achievements.map((achievement, index) => {
            const IconComponent = achievementIcons[index % achievementIcons.length];
            
            return (
              <motion.div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <IconComponent className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-800 dark:text-gray-200 font-medium leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Education Section */}
        <motion.div 
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
            Education
          </h3>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                  {personalInfo.education.degree}
                </h4>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-4">
                  {personalInfo.education.institution}
                </p>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium">Period:</span> {personalInfo.education.period}
                </p>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Current CGPA:</span>
                  <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
                    {personalInfo.education.cgpa}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">HSC:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    {personalInfo.education.hsc}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">SSLC:</span>
                  <span className="text-green-600 dark:text-green-400 font-semibold">
                    {personalInfo.education.sslc}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;