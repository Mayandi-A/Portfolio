import { motion } from 'framer-motion';
import { Github, Linkedin, Heart, Code } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

const Footer = () => {
  const socialLinks = [
    { icon: Linkedin, href: personalInfo.social.linkedin, label: 'LinkedIn' },
    { icon: Github, href: personalInfo.social.github, label: 'GitHub' },
    { icon: Code, href: personalInfo.social.leetcode, label: 'LeetCode' },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <motion.div 
            className="flex justify-center space-x-6 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                viewport={{ once: true }}
              >
                <span className="sr-only">{social.label}</span>
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
          
          <motion.div 
            className="border-t border-gray-200 dark:border-gray-700 pt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center">
              © 2025 {personalInfo.name}. All rights reserved. Built with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                className="mx-1"
              >
                <Heart className="w-4 h-4 text-red-500 fill-current" />
              </motion.span>
              using React & Tailwind CSS.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;