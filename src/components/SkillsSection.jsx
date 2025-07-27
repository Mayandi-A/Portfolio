import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/use-scroll-animation';
import { skills } from '@/data/portfolio';

const SkillsSection = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation();
  const [expandedCategories, setExpandedCategories] = useState({});
  
  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  const toggleCategory = (category) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800" ref={sectionRef}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {categories.map((category, categoryIndex) => {
            const categorySkills = skills.filter(skill => skill.category === category);
            const isExpanded = expandedCategories[category];
            
            return (
              <motion.div
                key={category}
                className="skill-category"
                initial={{ opacity: 0, y: 30 }}
                animate={sectionVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              >
                <motion.div 
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Card Header */}
                  <motion.button
                    onClick={() => toggleCategory(category)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 hover:from-blue-100 hover:to-purple-100 dark:hover:from-blue-900/30 dark:hover:to-purple-900/30 transition-all duration-300"
                    whileTap={{ scale: 0.98 }}
                  >
                    <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                      {category}
                    </h3>
                    <motion.div
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </motion.div>
                  </motion.button>
                  
                  {/* Card Content */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                      >
                        <div className="p-6 space-y-6">
                          {categorySkills.map((skill, skillIndex) => (
                            <motion.div
                              key={skill.name}
                              className="skill-item"
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                            >
                              <div className="flex justify-between mb-3">
                                <span className="text-lg font-medium text-gray-800 dark:text-gray-200">
                                  {skill.name}
                                </span>
                                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
                                  {skill.percentage}%
                                </span>
                              </div>
                              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                                <motion.div
                                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
                                  initial={{ width: 0 }}
                                  animate={{ width: `${skill.percentage}%` }}
                                  transition={{ duration: 1.5, delay: skillIndex * 0.1 + 0.2, ease: 'easeOut' }}
                                >
                                  <motion.div
                                    className="absolute inset-0 bg-white/20 rounded-full"
                                    animate={{ x: ['-100%', '100%'] }}
                                    transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                                  />
                                </motion.div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;